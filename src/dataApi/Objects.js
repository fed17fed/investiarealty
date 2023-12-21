import useSWR from "swr"
import { request } from "graphql-request"

const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL
const fetcher = query => request(API_URL, query)

export default function Objects() {

  const { data, error, isLoading } = useSWR(
    `query Objects {
      realtyObjects {
        edges {
          node {
            title
            featuredImage {
              node {
                sourceUrl
              }
            }        
            Real_estate_object {
              forrent
              price
              sqft
              city
              location
              gallery {
                image {
                  link
                }
              }
              propertytype
              yearbuilding
              lat
              long
              bed
              bath
              featured
              features {
                airconditioning
                dryer
                fieldGroupName
                frontyard
                lakeview
                lawn
                outdoorshower
                refrigerator
                tvcable
                washer
                winecellar
              }
            }        
          }
        }
      }
    }`,
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div className="loading_center">loading...</div>
  const { realtyObjects: { edges }} = data

  return { user: edges, isLoading, error };
}

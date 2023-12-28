import useSWR, { preload } from 'swr'
import { request } from "graphql-request"

const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL
const fetcher = query => request(API_URL, query)

export default function Objects() {

  const { data, error, isLoading } = useSWR(
    `query Objects {
      realtyObjects {
        edges {
          node {
            Real_estate_object {
              vendorCode
              title
              forrent
              price
              sqft
              city
              location
              propertytype
              yearbuilding
              lat
              long
              bed
              bath
              featured
              mainImage {
                sourceUrl
              }
              gallery {
                image {
                  link
                }
              }
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
              catobject {
                tags
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
  const lists = edges?.map((item) => item.node.Real_estate_object );
  return {lists, isLoading, error };
}

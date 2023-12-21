import useSWR from "swr"
import { request } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL
const fetcher = query => request(API_URL, query)

export default function HeroData() {

    const { data, error, isLoading } = useSWR(
        `query Hero {
          pageBy(pageId: 53) {
            hero {
              slideritems {
                title
                description
                price
                image {
                  guid
                }
              }
            }
            servises {
              typeservice {
                name
                image {
                  guid
                }
              }
            }
          }
        }`,
        fetcher
      )
    
      if (error) return <div>failed to load</div>
  if (isLoading) return <div className="loading_center">loading...</div>
  const { pageBy: {hero: {slideritems}}} = data

  return { slideritems: slideritems, isLoading, error };
}
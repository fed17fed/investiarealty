import useSWR from "swr"
import { request } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL
const fetcher = query => request(API_URL, query)

export default function ServicesData() {

    const { data, error, isLoading } = useSWR(
        `query Service {
            pageBy(pageId: 53) {
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
  const { pageBy: { servises: { typeservice } } } = data

  return { iconboxData: typeservice, isLoading, error };
}
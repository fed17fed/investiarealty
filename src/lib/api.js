const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL

export async function fetchAPI(query = '') {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

// export async function getHero() {
//       const data = await fetchAPI(
//         `query Hero {
//           pages(where: {title: "Home"}) {
//             edges {
//               node {
//                 hero {
//                   slideritems {
//                     image {
//                       uri
//                     }
//                     price
//                     title
//                     description
//                   }
//                 }
//               }
//             }
//           }
//         }`
//       )
    
//       return data
//     }

//     export async function getStaticProps() {
//       // Instead of fetching your `/api` route you can call the same
//       // function directly in `getStaticProps`
//       const pages = await getHero()
     
//       // Props returned will be passed to the page component
//       return { props: { pages } }      
//     }
    
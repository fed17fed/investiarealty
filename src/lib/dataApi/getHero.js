 import { fetchAPI } from "../api"

 export default function getHero() {
  async function getStaticProps(context) {
    const data = await fetchAPI(
      `query Hero {
        pages(where: {title: "Home"}) {
          edges {
            node {
              hero {
                slideritems {
                  image {
                    uri
                  }
                  price
                  title
                  description
                }
              }
            }
          }
        }
      }`
    )
    console.log("GetHero = ", data);
    return {
      props: { data },
    }
  }
}

  // export const {pages: { edges }} = getHero();

  

  // export async function getStaticProps(context) {
  //   const data = await getHero()  
  //   return {
  //     props: { data }, // будут переданы в компонент страницы в качестве пропсов
  //   }
  // }

    //   export async function getStaticProps() {
    //   // Instead of fetching your `/api` route you can call the same
    //   // function directly in `getStaticProps`
    //   const pages = await getHero()
     
    //   // Props returned will be passed to the page component
    //   return { props: { pages } }      
    // }

// export async function getAllPostsForHome(preview) {
//     const data = await fetchAPI(
//       `
//       query AllPosts {
//         posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
//           edges {
//             node {
//               title
//               excerpt
//               slug
//               date
//               featuredImage {
//                 node {
//                   sourceUrl
//                 }
//               }
//               author {
//                 node {
//                   name
//                   firstName
//                   lastName
//                   avatar {
//                     url
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `
//     )
//     console.log("GetHero = ", data);
//     return data    

//   }
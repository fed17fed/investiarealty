import { fetchAPI } from "@/lib/api";

async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `
  ) 

  return data
}


export default async function Mytest() {
    const {posts: { edges }} = await getAllPostsForHome();
//   const missionData = [
//     {
//       icon: "flaticon-garden",
//       title: "Modern Villa",
//       description: "Nullam sollicitudin blandit Nullam maximus.",
//     },
//     {
//       icon: "flaticon-secure-payment",
//       title: "Secure Payment",
//       description: "Nullam sollicitudin blandit Nullam maximus.",
//     },
//   ];

  return (
    <>
      {edges.map((item, id) => (
        <div key={id}>          
          <p>{item.node.date}<span>  {item.node.excerpt}</span></p>
        </div>
      ))} 
    </>
  );
};



// const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL
// export default async function Realty(query, req, res) {
//   const headers =  { 'Content-Type': 'application/json'};
//   const response = await fetch(API_URL, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({ query:`
//     query Objects {
//       realtyObjects {
//         edges {
//           node {
//             Real_estate_object {
//               vendorCode
//               title
//               forrent
//               price
//               sqft
//               city
//               location
//               propertytype
//               yearbuilding
//               lat
//               long
//               bed
//               bath
//               featured
//               mainImage {
//                 sourceUrl
//               }
//               gallery {
//                 image {
//                   link
//                 }
//               }
//               features {
//                 airconditioning
//                 dryer
//                 fieldGroupName
//                 frontyard
//                 lakeview
//                 lawn
//                 outdoorshower
//                 refrigerator
//                 tvcable
//                 washer
//                 winecellar
//               }
//               catobject {
//                 tags
//               }
//             }
//           }
//         }
//       }
//     }
//     `})
//   });

//   if (!response.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
  
//   const data = await response.json();  

  

//   const { data: {realtyObjects: { edges }}} = data
//   const lists = edges?.map((item) => item.node.Real_estate_object )
//    console.log('Myuser = ', lists);

//    return  lists   
  
// }

// Realty()
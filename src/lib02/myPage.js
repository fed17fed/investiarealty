// import React from 'react';
// const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL

// const MyPage = ( data ) => {
//     console.log('Myuser = ', data);
//   // Render your page with the fetched data
//   return <div>{data?.title}</div>;
// };

// export async function getServerSideProps(context, query) {

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
  

//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

// export default MyPage;
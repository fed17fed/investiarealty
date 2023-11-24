import { getAllPostsForHome } from "@/app/lib/api";

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



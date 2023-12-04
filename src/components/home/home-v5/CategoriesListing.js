import Image from "next/image";
import Link from "next/link";

const CategoriesListing = () => {
  // Array of iconbox data
  const iconboxData = [
    {
      id: 1,
      icon: "/images/category/Main_Categjry_1.jpg",
      title: "Офис/Офисные здания",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText1: "Покупка",
      linkText2: "Аренда",
    },
    {
      id: 2,
      icon: "/images/category/Main_Categjry_2.jpg",
      title: "Торговые площади",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText1: "Покупка",
      linkText2: "Аренда",
    },
    {
      id: 3,
      icon: "/images/category/Main_Categjry_3.jpg",
      title: "Промышленная недвижимость",
      text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
      linkText1: "Покупка",
      linkText2: "Аренда",
    },
    {
        id: 4,
        icon: "/images/category/Main_Categjry_1.jpg",
        title: "Гостиничная недвижимость",
        text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
        linkText1: "Покупка",
        linkText2: "Аренда",
      },
      {
        id: 5,
        icon: "/images/category/Main_Categjry_2.jpg",
        title: "Ресторанный бизнес",
        text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
        linkText1: "Покупка",
        linkText2: "Аренда",
      },
      {
        id: 6,
        icon: "/images/category/Main_Categjry_3.jpg",
        title: "Медицинское учреждения",
        text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
        linkText1: "Покупка",
        linkText2: "Аренда",
      },
      {
        id: 7,
        icon: "/images/category/Main_Categjry_1.jpg",
        title: "Образовательные учреждения",
        text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
        linkText1: "Покупка",
        linkText2: "Аренда",
      },
      {
        id: 8,
        icon: "/images/category/Main_Categjry_2.jpg",
        title: "Спортивные и развивательные",
        text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
        linkText1: "Покупка",
        linkText2: "Аренда",
      },
      {
        id: 9,
        icon: "/images/category/Main_Categjry_3.jpg",
        title: "Земля",
        text: "Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.",
        linkText1: "Покупка",
        linkText2: "Аренда",
      },
  ];

  return (
    <>
      {iconboxData.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} // Increase delay for each item
        >
          <div className="category_style text-center">
            <div className="category_img">
              <Image width={360} height={225} src={item.icon} alt="icon" />
            </div>
            <div className="category_content">
              <h4 className="category_title">{item.title}</h4>
              {/* <p className="text">{item.text}</p> */}
              <div className="button_block">
                <Link href="#" className="ud-btn btn-white2">
                  {item.linkText1}
                  <i className="fal fa-arrow-right-long" />
                </Link>
                <Link href="#" className="ud-btn btn-white2">
                  {item.linkText2}
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesListing;

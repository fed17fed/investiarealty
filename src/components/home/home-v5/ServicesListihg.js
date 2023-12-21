"use client";
import Image from "next/image";
import Link from "next/link";
import ServicesData from "@/dataApi/ServicesData";

const ServicesListihg = () => {
  // const { typeserv } = HeroData();
  const { iconboxData }  = ServicesData();
  // const iconboxData = [
  //   {
  //     id: 1,
  //     icon: "/images/services/Serv_main1.svg",
  //     title: "Buy a property",
  //     text: "Консультация и полное юридическое сопровождение",
  //     linkText: "Find a home",
  //   },
  //   {
  //     id: 2,
  //     icon: "/images/services/Serv_main2.svg",
  //     title: "Sell a property",
  //     text: "Патент",
  //     linkText: "Place an ad",
  //   },
  //   {
  //     id: 3,
  //     icon: "/images/services/Serv_main3.svg",
  //     title: "Rent a property",
  //     text: "Счет в банке Кредит",
  //     linkText: "Find a rental",
  //   },
  //   {
  //       id: 4,
  //       icon: "/images/services/Serv_main4.svg",
  //       title: "Buy a property",
  //       text: "Открытие регистра, компании, представительств",
  //       linkText: "Find a home",
  //     },
  //     {
  //       id: 5,
  //       icon: "/images/services/Serv_main5.svg",
  //       title: "Sell a property",
  //       text: "Вид на жительство",
  //       linkText: "Place an ad",
  //     },
  //     {
  //       id: 6,
  //       icon: "/images/services/Serv_main6.svg",
  //       title: "Rent a property",
  //       text: "Ремонт и реконструкция",
  //       linkText: "Find a rental",
  //     },
  //     {
  //       id: 7,
  //       icon: "/images/services/Serv_main7.svg",
  //       title: "Buy a property",
  //       text: "Инвестиции",
  //       linkText: "Find a home",
  //     },
  //     {
  //       id: 8,
  //       icon: "/images/services/Serv_main8.svg",
  //       title: "Лицензии",
  //       text: "Лицензии",
  //       linkText: "Place an ad",
  //     },
  //     {
  //       id: 9,
  //       icon: "/images/services/Serv_main9.svg",
  //       title: "Rent a property",
  //       text: "Дополнительная помощь",
  //       linkText: "Find a rental",
  //     },
  // ];

  return (
    <>
      {iconboxData?.map((item) => (
        <div
          className="col-sm-6 col-lg-4"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay={(item.id + 1) * 100} // Increase delay for each item
        >
          <div className="category_style text-center services_blockmain">
            <div className="category_img">
              <Image width={60} height={60} src={item.image.guid} alt="icon" />
            </div>
            <div className="services_content">
              {/* <h4 className="category_title">{item.title}</h4> */}
              <p className="text">{item.name}</p>
              {/* <Link href="/grid-default" className="ud-btn btn-white2">
                {item.linkText}
                <i className="fal fa-arrow-right-long" />
              </Link> */}
            </div>
          </div>
        </div>
      ))}
          <div className="services_btnblock">
              <Link href="#" className="ud-btn btn-white2">
                Запрос на консультацию
                <i className="fal fa-arrow-right-long" />
              </Link> 
              <Link href="#" className="ud-btn btn-white2">
                Запрос на показ
                <i className="fal fa-arrow-right-long" />
              </Link> 
          </div>
    </>
  );
};

export default ServicesListihg;

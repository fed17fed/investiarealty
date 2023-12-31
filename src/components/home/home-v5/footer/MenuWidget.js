import React from "react";
import Social from "./Social";

const MenuWidget = () => {
  const menuSections = [
    {
      title: "Popular Search",
      links: [
        { label: "investia@cyprusview.com", href: "mailto:investia@cyprusview.com" },
        { label: "+357 24 634830", href: "tel:+35724634830" },
        { label: "+357 24 634829", href: "tel:35724634829" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Политика конфиденциальности", href: "" },
        // { label: "Контакты", href: "/contact" },
        // { label: "Каталог", href: "/grid-default" },
        // { label: "Privacy Policy", href: "#" },
        // { label: "Pricing Plans", href: "#" },
        // { label: "Our Services", href: "#" },
        // { label: "Contact Support", href: "#" },
        // { label: "Careers", href: "#" },
        // { label: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <>
      {" "}
      {menuSections.map((section, index) => (
        <div className="col-sm-6 col-lg-3 footer_menu" key={index}>
          <div className="footer-widget ps-0">
            <div className="link-style1 mb-3">
              {/* <h6 className="text-white mb25">{section.title}</h6> */}
              <ul className="ps-0">
                {section.links.map((link, linkIndex) => (
                  <li className="mb10" key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
              <div>
                  {index === 0
                    ? ""
                    : <Social />
                  }
              </div>
            </div>
          </div>
        </div>
      ))}      
    </>
  );
};

export default MenuWidget;

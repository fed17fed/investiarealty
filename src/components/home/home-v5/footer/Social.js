import React from "react";
import Image from "next/image";

const Social = () => {
  const socialIcons = [
    { label: "/images/socicons/youtube.svg", href: "" },
    { label: "/images/socicons/facebook.svg", href: "" },
    { label: "/images/socicons/google.svg", href: "" },
    { label: "/images/socicons/instagram.svg", href: "" },
  ];

  return (
    <div className="social-style1 d-flex align-items-center mt25 footer_soc">
      {/* <h6 className="text-white mb-0 mr10">Подписывайтесь</h6> */}
      {socialIcons.map((iconClass, index) => (
        <a className="pr20" key={index} href={iconClass.href}>
          <Image width={30} height={30} src={iconClass.label} alt="icon" />
          {/* <i className={iconClass + " list-inline-item"} /> */}
        </a>
      ))}
    </div>
  );
};

export default Social;

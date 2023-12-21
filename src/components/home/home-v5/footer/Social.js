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
    <div className="social-style1 d-flex align-items-center justify-content-end">
      <h6 className="text-white mb-0 mr10">Подписывайтесь</h6>
      {socialIcons.map((iconClass, index) => (
        <a className="pl10" key={index} href={iconClass.href}>
          <Image width={20} height={20} src={iconClass.label} alt="icon" />
          {/* <i className={iconClass + " list-inline-item"} /> */}
        </a>
      ))}
    </div>
  );
};

export default Social;

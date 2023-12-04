import React from "react";
import Image from "next/image";

const Social = () => {
  const socialIcons = [
    "/images/socicons/youtube.svg",
    "/images/socicons/facebook.svg",
    "/images/socicons/google.svg",
    "/images/socicons/instagram.svg",
  ];

  return (
    <div className="social-style1 d-flex align-items-center justify-content-end">
      <h6 className="text-white mb-0">Foolow Us</h6>
      {socialIcons.map((iconClass, index) => (
        <a className="pl10" key={index} href="#">
          <Image width={20} height={20} src={iconClass} alt="icon" />
          {/* <i className={iconClass + " list-inline-item"} /> */}
        </a>
      ))}
    </div>
  );
};

export default Social;

import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <div className="container white-bdrt1 py-2">
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center text-lg-center">
            <p className="copyright-text text-gray ff-heading">
              © {getCurrentYear()}{" "}
              <a
                href="https://cv.dev.ut.dp.ua/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Investia.
              </a>{" "}
              All Rights ReservedAll urban features must be checked with the proper authorities.
            </p>
          </div>
        </div>
        {/* End .col-sm-6 */}
      </div>
    </div>
  );
};

export default Footer;

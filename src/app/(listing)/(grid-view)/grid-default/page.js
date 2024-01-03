import Header from "@/components/home/home-v5/Header";
import Footer from "@/components/home/home-v5/footer/index";
import MobileMenu from "@/components/common/mobile-menu";
import React from "react";
import PropertyFiltering from "@/components/listing/grid-view/grid-default/PropertyFiltering";
import { Realty } from "@/app/api/lists/route";

export const metadata = {
  title: "Gird Default || Homez - Real Estate NextJS Template",
};

export default async function GridDefault({ lists }) {

  lists = await Realty()

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Недвижимость</h2>
                <div className="breadcumb-list">
                  <a href="/"><i class="fa-solid fa-house"></i></a>
                  <a href="/grid-default">Недвижимость</a>
                </div>
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter"
                >
                  <span className="flaticon-settings" /> Filter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <PropertyFiltering lists = { lists } />
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};




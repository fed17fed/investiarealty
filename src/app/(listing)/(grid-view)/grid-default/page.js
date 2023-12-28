import Header from "@/components/home/home-v5/Header";
import Footer from "@/components/home/home-v5/footer/index";
import MobileMenu from "@/components/common/mobile-menu";
import React from "react";
import PropertyFiltering from "@/components/listing/grid-view/grid-default/PropertyFiltering";

const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL
export async function fetchData(query) {
  const headers =  { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query:`
    query Objects {
      realtyObjects {
        edges {
          node {
            Real_estate_object {
              vendorCode
              title
              forrent
              price
              sqft
              city
              location
              propertytype
              yearbuilding
              lat
              long
              bed
              bath
              featured
              mainImage {
                sourceUrl
              }
              gallery {
                image {
                  link
                }
              }
              features {
                airconditioning
                dryer
                fieldGroupName
                frontyard
                lakeview
                lawn
                outdoorshower
                refrigerator
                tvcable
                washer
                winecellar
              }
              catobject {
                tags
              }
            }
          }
        }
      }
    }
    `})
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  
  const data = await res.json();
  const { data: {realtyObjects: { edges }}} = data
  const lists = edges?.map((item) => item.node.Real_estate_object ) 

  return { props: { lists } }
  
}

// fetchData()

export const metadata = {
  title: "Gird Default || Homez - Real Estate NextJS Template",
};

const GridDefault = ( lists ) => {
  
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
                <h2 className="title">Офис/Офисное здание</h2>
                <div className="breadcumb-list">
                  <a href="#"><i class="fa-solid fa-house"></i></a>
                  <a href="#">Аренда</a>
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
      <PropertyFiltering lists={ lists }/>
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default GridDefault;





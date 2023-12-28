
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Faq1 from "@/components/pages/faq/Faq1";
import Faq2 from "@/components/pages/faq/Faq2";
import fs from 'fs';
import path from 'path';

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

  function writeDataToFile(data) {
    const filePath = path.join(process.cwd(), 'src', '/dataJson/objectsData.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  writeDataToFile(data);
  // res.status(200).json({ message: 'Data fetched and written to file successfully' });
  
}

fetchData()

//console.log('DATA =', filePath)
//const Mydata = handleClick()
//  console.log('DATA =', Mydata)

const Faq = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcrumb Sections */}
      <section className="breadcumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Frequently Asked Questions</h2>
                <div className="breadcumb-list">
                  <a href="#">Home</a>
                  <a href="#">For Rent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* FAQ Section Area */}
      <section className="our-faq pb90 pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="ui-content">
                <h4 className="title">Question About Selling</h4>
                <button
                  className="page-link"
                  // onClick={handleClick()}
                >
                  <span className="fas fa-angle-left">
                    Load_Objects
                  </span>  
                </button>
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq1 />
                </div>
              </div>
              {/* End ui-content */}

              <div className="ui-content">
                <h4 className="title">Question About Renting</h4>
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq2 />
                </div>
              </div>
              {/* End ui-content */}
            </div>
            {/* End .col-lg-12 */}
          </div>
        </div>
      </section>
      {/* End FAQ Section Area */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Faq;

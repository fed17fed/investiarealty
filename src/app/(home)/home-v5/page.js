import Explore from "@/components/common/Explore";
import CategoriesListing from "@/components/home/home-v5/CategoriesListing";
import ServicesListihg from "@/components/home/home-v5/ServicesListihg";
import Footer from "@/components/home/home-v5/footer";
import MobileMenu from "@/components/common/mobile-menu";
import FeaturedListings from "@/components/home/home-v5/FeatuerdListings";
import Header from "@/components/home/home-v5/Header";
import Partner from "@/components/common/Partner";
import PropertiesByCities from "@/components/home/home-v5/PropertiesByCities";
import Testimonial from "@/components/home/home-v5/Testimonial";
import FilterWithProperties from "@/components/home/home-v5/filter-with-property";
import Blog from "@/components/common/Blog";
import Hero from "@/components/home/home-v5/Hero";
import ApartmentTypes from "@/components/home/home-v5/ApartmentTypes";
import Cta from "@/components/home/home-v5/Cta";
import Faq1 from "@/components/pages/faq/Faq1";
import Faq2 from "@/components/pages/faq/Faq2";
import UsefulLinks from "@/components/common/UsefulLinks";
import Link from "next/link";
import PropertyListing from "@/components/home/home-v5/PropertyListing";

export const metadata = {
  title: "Investia || Investia - Real Estate Agents ltd",
};

const Home_V5 = () => {
  
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Hero Slide */}
      <div className="banner-wrapper position-relative">
        <section className="thumbimg-countnumber-carousel p-0">
          <Hero />
        </section>
      </div>
      {/* Edn Hero Slide */}

      {/* Filter with properties */}
      <section className="pt-0 pb60 bgc-f7 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <FilterWithProperties />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Filter with properties */}

      {/* CategoriesListing */}
      <section className="pb90 pb30-md bgc-thm-light category_section">
        <div className="container">  
          <div className="row">
            <CategoriesListing />
          </div>
        </div>
      </section>
      {/* End CategoriesListing */}

      {/* Discover Our Featured Listings */}
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Лучшие предложения - рекомендуем</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/grid-default">
                    Смотреть все
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Discover Our Featured Listings */}

      {/* Discover Our Content */}
      <section className="pt-0 pb110 bgc-f7 pb50-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="content_text">
                <p>
                  Покупка коммерческой недвижимости считается одним из самых надежных и прибыльных видов инвестиций. 
                  Будь то поиск места для нового стартапа или расширение существующего бизнеса, мы здесь, чтобы помочь вам найти идеальное место для реализации ваших целей. 
                </p>
                <p>
                  Более 50 лет компания Investia занимает лидирующее положение на рынке недвижимости Республики Кипр, гарантируя нашим клиентам профессиональное обслуживание и полную юридическую поддержку в обработке документов, приобретении ипотеки, страховании и регистрации компаний. Мы также предоставляем помощь в вопросах взаимодействия практически со всеми государственными учреждениями в стране."
                </p>
                <p>
                  Компания «Инвестия» предлагает  вам  объекты коммерческой недвижимости, на продажу и долгосрочную аренду - только серьезные и деловые предложения. 
                </p>
                <p>
                  Все объекты предварительно прошли независимую юридическую экспертизу. 
                  Оформление сделки происходит в кратчайшие сроки с привлечением квалифицированных специалистов. Сотрудничество с нашей компанией – это не только экономия Вашего времени, разумный вклад средств и постоянный доход, это  уровень и показатель Ваших достижений!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Discover Our Content */}

      {/* Explore Apartment Types cities */}
      {/* <section className="pb90 pb30-md">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="0">
            <div className="col-lg-6 mx-auto">
              <div className="main-title2 text-center">
                <h2 className="title">Explore Apartment Types</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
          </div>          

          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <ApartmentTypes />
          </div>
         
        </div>
      </section> */}
      {/* End Explore Apartment Types cities */}

      {/* Explore Apartment */}
      {/* <section className="pb90 pb30-md bgc-thm-light">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">See How Realton Can Help</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Explore />
          </div>
        </div>
      </section> */}
      {/* End Explore Apartment */}

      {/* Explore property-city */}
      {/* <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Properties by Cities</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/map-v4">
                  See All Cities
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
            
          </div>

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div>
          
        </div>
      </section> */}
      {/* End Explore property-city */}

      {/* CTA */}
      {/* <Cta /> */}
      {/* CTA */}

      {/* ServicesListihg */}
      <section className="pb30-md bgc-thm-light category_section">
        <div className="container">  
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Услуги</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
          </div>

          <div className="row">
            <ServicesListihg />
          </div>
        </div>
      </section>
      {/* End ServicesListihg */}      

      {/* Popular Property */}
      {/* <PropertyListing /> */}
      {/* End  Popular Property */}

      {/* FAQ Section Area */}
      <section className="our-faq pb-0 pt-0">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="300ms">
            <div className="col-lg-12">
              <div className="ui-content">
                <h2 className="title text-center">Часто  задаваємые вопросы</h2>
                <div className="accordion-style1 faq-page">
                  <Faq1 />
                </div>
              </div>
              {/* End ui-content */}

              {/* <div className="ui-content">
                <h4 className="title">Question About Renting</h4>
                <div className="accordion-style1 faq-page mb-4 mb-lg-5">
                  <Faq2 />
                </div>
              </div> */}
              {/* End ui-content */}
            </div>
            {/* End .col-lg-12 */}
          </div>
        </div>
      </section>
      {/* End FAQ Section Area */}

      {/* Our Testimonials */}
      <section className="pb50-md">
        <div className="container maxw1600">
          <div className="row  justify-content-center text-center align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h2 className="title">Отзывы клиентов</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            {/* End header */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div
                className="testimonial-slider"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Testimonials */}

      {/* Explore Blog */}
      {/* <section className="pb90 pb30-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto" data-aos="fade-up">
              <div className="main-title text-start text-md-center">
                <h2 className="title">From Our Blog</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <Blog />
          </div>
        </div>
      </section> */}
      {/* Explore Blog */}

      {/* Our Partners */}
      <section className="our-partners pt0">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-12" data-aos="fade-up">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div> */}
            <div className="col-lg-12 text-center">
              <div
                className="dots_none nav_none"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <UsefulLinks />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Our Partners */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V5;

import DashboardHeader from "@/components/common/DashboardHeader";
import Header from "@/components/home/home-v5/Header";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
// import Footer from "@/components/property/dashboard/Footer";
import Footer from "@/components/home/home-v5/footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import AddPropertyTabContent from "@/components/property/dashboard/dashboard-add-property";

export const metadata = {
  title: "Dashboard Add Property || Homez - Real Estate NextJS Template",
};

const DashboardAddProperty = () => {
  return (
    <>
      {/* Main Header Nav */}
      {/* <DashboardHeader /> */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
      <div className="container dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr0-md">
          {/* <SidebarDashboard /> */}
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content property-page bgc-f7">
              {/* <div className="row pb40 d-block d-lg-none">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>
              </div> */}

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Добавить недвижимость</h2>
                    <p className="text">Мы рады вас снова видеть!</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget tab_content pt30 mb30 position-relative">
                    <div className="navtab-style1">
                      <AddPropertyTabContent />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End dashboard__content */}
            
          </div>
          {/* End .dashboard__main */}
        </div>
      </div>
      {/* dashboard_content_wrapper */}
      <section class="footer-style1 pt60 pb-0">
              <Footer />
      </section>
    </>
  );
};

export default DashboardAddProperty;

"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import { Montserrat, Raleway, Poppins } from "next/font/google";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Raleway font
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700",],
  variable: "--title-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--more-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`body   ${montserrat.className} ${raleway.className} ${poppins.className}`}
        cz-shortcut-listen="false"
      >
        <div className="wrapper ovh">{children}</div>

        <ScrollToTop />
      </body>
    </html>
  );
}

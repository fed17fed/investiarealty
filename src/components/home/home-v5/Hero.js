"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { request } from "graphql-request";

const API_URL = process.env.NEXT_PUBLIC_MY_WORDPRESS_API_URL

const fetcher = query => request(API_URL, query)

export default function Hero() {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  const { data, error, isLoading } = useSWR(
    `query Hero {
      pages(where: {title: "Home"}) {
        edges {
          node {
            hero {
              slideritems {
                image {
                  guid
                }
                price
                title
                description
              }
            }
          }
        }
      }
    }`,
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (isLoading) return <div className="loading_center">loading...</div>

  const {pages:{edges:[{node:{hero:{slideritems}}}]}} = data
  
  // const sliderItems = [
  //   {
  //     image: "/images/home/home-5-1.jpg",
  //     price: "$986,00",
  //     title: "Studio on Grand Avenue",
  //     description: "32 Beds - 91 Baths - 1500 sq ft",
  //   },
  //   {
  //     image: "/images/home/home-5-2.jpg",
  //     price: "$986,00",
  //     title: "Studio on Grand Avenue",
  //     description: "32 Beds - 91 Baths - 1500 sq ft",
  //   },
  //   {
  //     image: "/images/home/home-5-3.jpg",
  //     price: "$986,00",
  //     title: "Studio on Grand Avenue",
  //     description: "32 Beds - 91 Baths - 1500 sq ft",
  //   },
  //   {
  //     image: "/images/home/home-5-4.jpg",
  //     price: "$986,00",
  //     title: "Studio on Grand Avenue",
  //     description: "32 Beds - 91 Baths - 1500 sq ft",
  //   },
  // ];

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="vertical" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "850px" }}
        >
          { slideritems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div
                  className="slider-slide-item"
                  style={{ backgroundImage: `url(${item.image.guid})` }}
                  data-thumb={item.image.guid}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-left position-relative">
                        <h4 className="h1 slider-subtitle text-white">
                          {item.price}
                        </h4>
                        <h3 className="h6 slider-title text-white">
                          {item.title}
                        </h3>
                        <p className="mb30 slider-text text-white">
                          {item.description}
                        </p>
                        {/* <div className="slider-btn-block">
                          <Link
                            href="/map-v4"
                            className="ud-btn btn-gray_black slider-btn"
                          >
                            View Details
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Set the direction to vertical
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={slideritems.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {slideritems.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={item.image.guid}
                alt="thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <p>{}</p>
      </div> */}
    </>
  );
};


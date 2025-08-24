


"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    {
      img: "https://i.ibb.co.com/twnMz8Nx/bag2.jpg",
      title: "Elegant Vanity Bags",
      promo: "Carry your essentials in style with our latest vanity bag collection—perfect blend of fashion and functionality.",
    },
    {
      img: "https://i.ibb.co.com/SD6r0v6D/bag4.jpg",
      title: "Smart School Bags",
      promo: "Designed for comfort and durability, our school bags keep you organized while adding a trendy look to your daily routine.",
    },
    {
      img: "https://i.ibb.co.com/cKqcB5rH/bag1.jpg",
      title: "Travel With Ease",
      promo: "Explore the world without worries. Our travel bags are spacious, durable, and crafted to make your journeys smoother.",
    },
  ];

  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh]">
              <img
                src={slide.img}
                alt={slide.title}
                className=" h-full  object-fit object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20 
                              bg-black/40">
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base text-white mb-6 max-w-3xl drop-shadow-md">
                  {slide.promo}
                </p>
                <button className="btn btn-outline btn-lg rounded-2xl text-white border-white hover:bg-white hover:text-black transition-all">
                 Start Shopping
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}




// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// export default function Hero() {
//   const slides = [
//     {
//       img: "/pexels-goumbik-292999.jpg",
//       title: "Step Into Style",
//       promo: "Discover the latest sneaker trends and elevate your streetwear look with our curated collection of stylish and comfortable shoes.",
//     },
//     {
//       img: "/pexels-pixabay-60619.jpg",
//       title: "Run With Comfort",
//       promo: "Experience unmatched comfort with every step. Our premium shoes combine innovative design with ergonomic support for your active lifestyle.",
//     },
//     {
//       img: "/pexels-pluyar-786003.jpg",
//       title: "Urban Vibes",
//       promo: "Make a statement with bold designs that fit your urban lifestyle. Shop the latest releases and set your style apart.",
//     },
//   ];

//   return (
//     <section className="relative w-full h-[80vh]">
//       <Swiper
//         modules={[Autoplay, Pagination, Navigation]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}

//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-[80vh]">
//               <img
//                 src={slide.img}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               {/* Overlay with blur */}
//               <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20 
//                               bg-black/40">
//                 <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
//                   {slide.title}
//                 </h1>
//                 <p className="text-base text-white mb-6 max-w-3xl drop-shadow-md">
//                   {slide.promo}
//                 </p>
//                 <button className="btn btn-outline btn-lg rounded-2xl text-white border-white hover:bg-white hover:text-black transition-all">
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

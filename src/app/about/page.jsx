

"use client";
import React from "react";
import { FaSuitcase, FaGlobeAsia, FaLeaf } from "react-icons/fa";
import MainLayout from "../components/MainLayout";

export default function AboutSection() {
  return (
   <MainLayout>
     
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Who We Are
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At <span className="font-semibold">Bagify</span>, we design more than
          just bags—we create companions for your everyday journeys, blending
          style, comfort, and durability.
        </p>
      </div>

      {/* Timeline Style / Vertical Steps */}
      <div className="relative border-l-4 border-primary/30 pl-10 space-y-12">
        {/* Mission */}
        <div className="relative">
          <div className="absolute -left-[34px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
            <FaSuitcase />
          </div>
          <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To craft premium vanity, school, and travel bags that combine
            fashion, durability, and function—built for every lifestyle.
          </p>
        </div>

        {/* Vision */}
        <div className="relative">
          <div className="absolute -left-[34px] top-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
            <FaGlobeAsia />
          </div>
          <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            To become a global leader in innovative bag design, making travel
            and daily life smarter, easier, and more stylish.
          </p>
        </div>

        {/* Values */}
        <div className="relative">
          <div className="absolute -left-[34px] top-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
            <FaLeaf />
          </div>
          <h3 className="text-2xl font-bold mb-2">Our Values</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sustainability, quality craftsmanship, and a customer-first approach
            are at the heart of Bagify.
          </p>
        </div>
      </div>
    </section>
   </MainLayout>
  );
}





// "use client";
// import React from "react";
// import { FaSuitcase, FaGlobeAsia, FaLeaf } from "react-icons/fa";

// export default function About() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       {/* Heading */}
//       <div className="text-center mb-14">
//         <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//           About Bagify
//         </h1>
//         <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//           At <span className="font-semibold">Bagify</span>, we believe a bag is more than an accessory—
//           it’s your style statement, your travel partner, and your everyday companion.
//         </p>
//       </div>

//       {/* Mission, Vision, Values */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Mission */}
//         <div className="rounded-2xl bg-white dark:bg-base-200 p-8 shadow-md hover:shadow-xl transition duration-300 text-center">
//           <FaSuitcase className="text-6xl text-primary mx-auto mb-5" />
//           <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
//           <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//             To craft premium vanity, school, and travel bags that blend fashion,
//             durability, and functionality—designed for every lifestyle.
//           </p>
//         </div>

//         {/* Vision */}
//         <div className="rounded-2xl bg-white dark:bg-base-200 p-8 shadow-md hover:shadow-xl transition duration-300 text-center">
//           <FaGlobeAsia className="text-6xl text-secondary mx-auto mb-5" />
//           <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
//           <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//             To become a global leader in innovative bag design, making
//             everyday journeys smarter, easier, and more stylish.
//           </p>
//         </div>

//         {/* Values */}
//         <div className="rounded-2xl bg-white dark:bg-base-200 p-8 shadow-md hover:shadow-xl transition duration-300 text-center">
//           <FaLeaf className="text-6xl text-green-600 mx-auto mb-5" />
//           <h2 className="text-2xl font-bold mb-3">Our Values</h2>
//           <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//             Sustainability, quality craftsmanship, customer-first mindset,
//             and timeless style are at the heart of Bagify.
//           </p>
//         </div>
//       </div>

//       {/* Extra Section - Why Choose Us */}
//       <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
//         <img
//           src="/about-bag.jpg"
//           alt="Bagify Collection"
//           className="rounded-2xl shadow-lg w-full object-cover"
//         />
//         <div>
//           <h2 className="text-3xl font-bold mb-4">Why Choose Bagify?</h2>
//           <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
//             We don’t just sell bags—we create experiences. Every stitch tells a story of 
//             craftsmanship, durability, and innovation. Whether you’re heading to class, 
//             a business trip, or a weekend adventure, Bagify has the perfect companion for you.
//           </p>
//           <ul className="space-y-3 text-gray-700 dark:text-gray-300">
//             <li>✔️ Premium quality materials</li>
//             <li>✔️ Eco-friendly production</li>
//             <li>✔️ Trendy & practical designs</li>
//             <li>✔️ Trusted by thousands worldwide</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
















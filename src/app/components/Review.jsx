

"use client";
import React from "react";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ariana Smith",
    rating: 5,
    comment:
      "Absolutely love this bag! It’s stylish, spacious, and perfect for daily use.",
  },
  {
    id: 2,
    name: "David Johnson",
    rating: 4,
    comment:
      "Great quality and durable material. A bit pricey, but worth it for the design.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    rating: 5,
    comment:
      "Super comfortable to carry. Perfect for travel and everyday essentials.",
  },
  {
    id: 4,
    name: "James Wilson",
    rating: 3,
    comment:
      "Nice design but could have more compartments. Still satisfied overall.",
  },
];

export default function UserReviews() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        What Our Customers Say
      </h2>

      {/* Reviews Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative bg-gradient-to-br from-white to-gray-50 dark:from-base-200 dark:to-base-300 
                       p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-6 left-6 text-4xl text-primary/20" />

            {/* Comment */}
            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
              "{review.comment}"
            </p>

            {/* Bottom Info */}
            <div className="mt-auto">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} className="text-gray-400" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}










// "use client";
// import React from "react";
// import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";

// const reviews = [
//   {
//     id: 1,
//     name: "Ariana Smith",
//     rating: 5,
//     comment:
//       "Absolutely love this bag! It’s stylish, spacious, and perfect for daily use.",
//   },
//   {
//     id: 2,
//     name: "David Johnson",
//     rating: 4,
//     comment:
//       "Great quality and durable material. A bit pricey, but worth it for the design.",
//   },
//   {
//     id: 3,
//     name: "Sophia Martinez",
//     rating: 5,
//     comment:
//       "Super comfortable to carry. Perfect for travel and everyday essentials.",
//   },
//   {
//     id: 4,
//     name: "James Wilson",
//     rating: 3,
//     comment:
//       "Nice design but could have more compartments. Still satisfied overall.",
//   },
// ];

// export default function UserReviews() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
//         What Our Customers Say
//       </h2>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {reviews.map((review) => (
//           <div
//             key={review.id}
//             className="bg-white dark:bg-base-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
//           >
//             {/* User Info */}
//             <div className="flex items-center gap-4 mb-4">
//               <FaUserCircle className="text-5xl text-primary/80" />
//               <div>
//                 <h3 className="font-semibold text-lg">{review.name}</h3>
//                 <div className="flex text-yellow-500">
//                   {[...Array(5)].map((_, i) =>
//                     i < review.rating ? (
//                       <FaStar key={i} />
//                     ) : (
//                       <FaRegStar key={i} className="text-gray-400" />
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Comment */}
//             <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//               {review.comment}
//             </p>
//           </div>
//         ))}
//       </div>

    
//     </section>
//   );
// }





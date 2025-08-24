"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useSession } from "next-auth/react";
import UserProfile from "./UserProfile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="bg-base-100/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Left - Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide flex items-center gap-2"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bagify
          </span>
        </Link>

        {/* Center - Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8 text-[16px] font-medium">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-700 dark:text-gray-200 hover:text-primary transition group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right - Theme + Auth */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          {session ? (
            <UserProfile session={session} />
          ) : (
            <div className="flex gap-3">
              <Link
                href="/login"
                className="px-4 py-1.5 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-1.5 rounded-xl bg-primary text-white hover:bg-primary/90 transition"
              >
                Signup
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={toggleSidebar} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar + Mask */}
      {isOpen && (
        <>
          {/* Overlay / Mask */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-64 h-full bg-base-100 shadow-xl p-6 flex flex-col gap-6 z-50 transition-transform duration-300">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {session ? (
              <div className="mt-auto mx-auto">
                <UserProfile session={session} />
              </div>
            ) : (
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary/90 transition w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}




// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa";
// import ThemeToggle from "./ThemeToggle";
// import { useSession } from "next-auth/react";
// import UserProfile from "./UserProfile";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//  const { data: session } = useSession();
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Products", href: "/products" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//     { name:"Dashboard", href:"/dashboard"}
//   ];

//   return (
//     <nav className="bg-base-100 shadow-md px-6 fixed w-full z-50">
//       <div className="flex items-center justify-between h-16">
//         {/* Left - Brand */}
//         <Link href="/" className="text-2xl font-extrabold tracking-wide">
//           <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//             Bagify
//           </span>
//         </Link>

//         {/* Center - Desktop Links */}
//         <div className="hidden md:flex flex-1 justify-center gap-8 text-lg font-medium">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="hover:text-primary transition "
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//         {/* Right - Theme + Auth */}
//   <div className="hidden md:flex items-center gap-4">
//     <ThemeToggle />
//     {session ? <UserProfile session={session}/> : ( <div className="flex gap-4">
//     <Link href="/login" className="btn btn-sm rounded-xl btn-outline">
//       Login
//     </Link>
//     <Link href="/signup" className="btn btn-sm rounded-xl btn-primary">
//       Signup
//     </Link>
//     </div>)}
//   </div>



//         {/* Mobile Hamburger */}
//         <div className="md:hidden flex items-center gap-4">
//           <ThemeToggle />
//           <button onClick={toggleSidebar} className="text-2xl">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar + Mask */}
//       {isOpen && (
//         <>
//           {/* Overlay / Mask */}
//           <div
//             className="fixed inset-0 bg-black/40 z-40"
//             onClick={() => setIsOpen(false)}
//           ></div>

//           {/* Sidebar */}
//           <div className="fixed top-0 left-0 w-64 h-full bg-base-100 shadow-lg p-6 flex flex-col gap-6 z-50">
//             {links.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-lg font-medium hover:text-primary transition"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             {
//               session ?
//               <div className="mt-auto mx-auto">
//                 <UserProfile session={session}/>
//               </div> :
//               <div className="mt-auto flex flex-col gap-2">
//               <Link
//                 href="/login"
//                 className="btn btn-sm rounded-xl btn-outline w-full"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/signup"
//                 className="btn btn-sm rounded-xl btn-primary w-full"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Signup
//               </Link>
//             </div>
//             }
//           </div>
//         </>
//       )}
//     </nav>
//   );
// }



import { Roboto } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import NextAuthSessionProvider from '@/Provider/NextAuthProvider';
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: {
    default: "Home",
    template: "%s | BagCollection",
  },
  description: "BagCollection is a stylish and premium bag showcase app.",
  icons: {
    icon: "/public/bag4.jpeg", 
    shortcut: "/public/bag4.jpeg",
    apple: "/public/bag4.jpeg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
     <NextAuthSessionProvider>
       <body
        className={`${roboto.className} antialiased min-h-screen`}
      >
       <main>
         {children}
         <Toaster position="top-center" reverseOrder={false} />
       </main>
      </body>
     </NextAuthSessionProvider>
    </html>
  );
}


















// export const metadata = {
//   title: {
//     default: "Home",
//     template: "%s | UrbanKicks",
//   },
//   description: "UrbanKicks is a shoe product base app.",
//   icons: {
//     icon: "/UrbanKicks-logo-transparent.png", 
//     shortcut: "/UrbanKicks-logo-transparent.png",
//     apple: "/UrbanKicks-logo-transparent.png",
//   },
// };
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <nav><Navbar/></nav>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

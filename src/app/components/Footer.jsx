import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-16">
      {/* Top Section */}
      <div className="footer p-10 sm:footer-horizontal flex-wrap justify-between">
        {/* Shop Section */}
        <div>
          <h6 className="footer-title">Shop</h6>
          <Link href="/products" className="link link-hover">All Products</Link>
          <Link href="/new" className="link link-hover">New Arrivals</Link>
          <Link href="/sale" className="link link-hover">Sale</Link>
          <Link href="/brands" className="link link-hover">Brands</Link>
        </div>

        {/* Company Section */}
        <div>
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="link link-hover">About Us</Link>
          <Link href="/contact" className="link link-hover">Contact</Link>
          <Link href="/careers" className="link link-hover">Careers</Link>
          <Link href="/press" className="link link-hover">Press</Link>
        </div>

        {/* Legal Section */}
        <div>
          <h6 className="footer-title">Legal</h6>
          <Link href="/terms" className="link link-hover">Terms of Use</Link>
          <Link href="/privacy" className="link link-hover">Privacy Policy</Link>
          <Link href="/cookies" className="link link-hover">Cookie Policy</Link>
        </div>

        {/* Social Section */}
        <div>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}


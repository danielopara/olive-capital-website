import React from "react";
import Image from "next/image";
import SocialButton from "./SocialButton";
import Terms from "./Terms";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] text-black p-4 md:p-6 w-full flex flex-col">
      {/* Main section with logo and introduction */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Company info section */}
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-black text-xl mb-1">
            <a href="/">
              <Image src="/icon.svg" width={80} height={28} alt="nav logo" />
            </a>
          </h3>
          <p className="text-sm mb-3 max-w-xs text-left italic text-black">
            ...Your financial dreams are valid{" "}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col text-black gap-2 text-sm">
          <h4 className="font-bold mb-1 text-sm">Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services/financial-advisory-services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* Location and Contact Section */}
        <div className="flex flex-col text-black gap-2 text-sm">
          <h4 className="font-bold mb-1 text-sm">Location</h4>
          <p>150 Obafemi Awolowo Way,</p>
          <p>Ikeja, Lagos, Nigeria</p>
          <h4 className="font-bold mt-3 text-sm">Contact</h4>
          <p>Phone: +234 809 729 6113</p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@olivecaptialltd.com"
              className="text-blue-500 hover:underline ml-1"
            >
              info@olivecaptialltd.com
            </a>
          </p>
        </div>

        {/* Social buttons section */}
        <div className="flex flex-col items-start">
          <h4 className="font-bold mb-1 text-sm">Follow Us</h4>
          <div className="flex flex-row space-x-4">
            <SocialButton twitter />
            <SocialButton linkedin />
            <SocialButton facebook />
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-300 mt-6 pt-3 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm">
        <small className="text-center md:text-left text-xs text-black">
          &copy; {currentYear} Olive Capital. All rights reserved.
        </small>
        <div className="flex flex-col md:flex-row justify-end mt-4 md:mt-0 space-y-1 md:space-y-0 md:space-x-3 text-xs text-black">
          <Terms />
          {/* <a href="/policy">Privacy Policy</a> */}
        </div>
      </div>
    </footer>
  );
}

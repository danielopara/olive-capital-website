import React from "react";
import Image from "next/image";
// import MobileAppButton from "./MobileAppButton";
import SocialButton from "./SocialButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] text-white p-6 md:p-10 w-full flex flex-col">
      {/* Main section with logo and buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-start gap-3s">
          <h3 className="text-black text-2xl mb-2">
            <a href="/">
              <Image src="/icon.svg" width={99} height={32} alt="nav logo" />
            </a>
          </h3>
          <p className="mb-4 max-w-xs text-left text-black">
            Olive Capital is the highest rated expert team in the world
          </p>
          {/* Mobile app buttons for Playstore and Appstore */}
          {/* <div className="flex space-x-4">
            <MobileAppButton playstore />
            <MobileAppButton appstore />
          </div> */}
        </div>
        <div className="flex flex-col justify-between text-black gap-4">
          <a href="">Home</a>
          <a href="">About Us</a>
        </div>

        <div className="flex flex-col justify-between text-black gap-4">
          <a href="">Our Services</a>
          <a href="">Contact Us</a>
        </div>
        {/* Social buttons section */}
        <div className="flex flex-row space-x-5 md:space-x-7">
          <SocialButton twitter />
          <SocialButton linkedin />
          <SocialButton facebook />
          {/* <SocialButton ig /> */}
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-green-400 mt-10 pt-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
        <small className="text-center md:text-left text-sm text-black">
          &copy; {currentYear} Olive Capital
          {/* Terms and conditions */}
        </small>
        <div className="flex flex-col md:flex-row justify-end md:justify-end mt-8 space-y-2 md:space-y-0 md:space-x-4 text-sm text-black">
          <a href="#">Help</a>
          <a href="#">Terms of condition</a>
          <a href="/policy">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}

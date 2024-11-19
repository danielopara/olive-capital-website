import React from "react";

export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Our Location
      </h1>
      <div className="w-full h-64 sm:h-80 md:h-[450px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3285450310473!2d3.3454571738081125!3d6.606033722201191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922d93063a67%3A0xdb3ef4129cf91952!2s150%20Obafemi%20Awolowo%20Wy%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1730804712020!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

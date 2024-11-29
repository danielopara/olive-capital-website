import Image from "next/image";

export default function Mission() {
  return (
    <div className="w-full bg-[#0B3D3B] px-6 md:px-12 relative min-h-[500px] mt-5 sm:mt-10 md:mt-[-100px]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 py-6 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 space-y-4 text-left">
            <h3 className="text-white text-xl font-semibold">
              Our Vision/Mission
            </h3>
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              To be the global brand for value creation in investment banking.
            </h1>
            <p className="text-white text-sm max-w-md">
              To provide world-class investment banking services in a
              sustainable manner while ensuring adequate returns to our
              stakeholders.
            </p>
          </div>
          <div className="flex flex-row justify-center items-start relative">
            <Image
              src="/woman.svg"
              alt="About Us Image"
              width={300}
              height={500}
              className="rounded-md hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

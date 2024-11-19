import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
// const dmsans = DM_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Olive Capital",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.className} bg-white overflow-x-hidden`}>
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3 w-full">
          <Nav />
        </div>

        <div className="mt-14 w-full">{children}</div>

        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}

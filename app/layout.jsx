import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "../components/Translator/Header";
import Footer from "../components/Translator/Footer";

const tajawal = Tajawal({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Khaled Ghonim Portfolio",
  description: "Web App for Khaled Ghonim's Translator and Developer Portfolio",
  icons: {
    icon: "/KGLogo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={tajawal.className}>
        <div className="relative w-screen h-full  bg-[--background-color]">
          <div className="fixed z-10 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
"use client";
import Image from "next/image";
import Link from "next/link";
import MainButton from "./components-website/MainButton";
import Navbar from "./components-website/Navbar";
import localFont from "next/font/local";
import bg from "../Public/images/bg.png";

const HeadingFont = localFont({
  src: "../public/fonts/Inter_18pt-Regular.ttf",
});
const Paragraph = localFont({
  src: "../public/fonts/Inter_24pt-Medium.ttf",
});

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen w-full overflow-hidden text-white flex flex-col">
      <Navbar />
      <Image
        src={bg}
        className="w-[80%] h-[80%] absolute top-0 left-44  blur-[60px] "
        alt="bg"
        loading="lazy"
      />
      <section className="flex z-30 flex-col items-center justify-center text-center flex-1 px-4 sm:px-8 md:px-16">
        <h1
          className={`${HeadingFont.className} text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-5xl 
           bg-gradient-to-t from-zinc-400 to-white bg-clip-text text-transparent`}
        >
          Manage your growth here with Minimalism
        </h1>

        <p
          className={`${Paragraph.className} mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
          explicabo. Consequuntur provident sequi.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/auth/login">
            <MainButton
              text="Login"
              classname="bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-md shadow-gray-800"
            />
          </Link>

          <MainButton
            text="Manage Your Tasks"
            classname="bg-white/90 text-black border border-gray-400 hover:bg-gray-100 hover:text-black hover:shadow-md hover:shadow-white/20 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
}

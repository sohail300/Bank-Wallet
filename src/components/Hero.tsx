"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "./ui/button";
import AvatarGroup from "@atlaskit/avatar-group";
import Link from "next/link";

const data = [
  {
    key: "alice@example.com",
    name: "Alice Johnson",
    href: "#",
    src: "https://i.pravatar.cc/150?img=1",
  },
  {
    key: "bob@example.com",
    name: "Bob Smith",
    href: "#",
    src: "https://i.pravatar.cc/150?img=2",
  },
  {
    key: "carol@example.com",
    name: "Carol Davis",
    href: "#",
    src: "https://i.pravatar.cc/150?img=3",
  },
  {
    key: "dave@example.com",
    name: "Dave Williams",
    href: "#",
    src: "https://i.pravatar.cc/150?img=4",
  },
  {
    key: "eve@example.com",
    name: "Eve Taylor",
    href: "#",
    src: "https://i.pravatar.cc/150?img=5",
  },
  {
    key: "dave@example.com",
    name: "Dave Williams",
    href: "#",
    src: "https://i.pravatar.cc/150?img=6",
  },
  {
    key: "eve@example.com",
    name: "Eve Taylor",
    href: "#",
    src: "https://i.pravatar.cc/150?img=7",
  },
];

const Hero = () => {
  return (
    <div className="h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" flex flex-row justify-between  w-full px-16 absolute bottom-0 ">
        <div className=" p-4 z-10 pt-20 md:pt-0 flex flex-col items-start">
          <h1 className="text-4xl md:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 ">
            Money now <br />
            available in <br />
            your mobile.
          </h1>
          <p className="mt-4 font-normal text-base text-gray-200 max-w-sm  my-8">
            Now is not the time for you to be confused when making purchases
            online or making purchases abroad.
          </p>
          <div className=" flex gap-8">
            <Link href="/signin">
              <Button className=" bg-green-600 text-black hover:bg-[#73ffb0]">
                Get Started
              </Button>
            </Link>
            <AvatarGroup
              appearance="stack"
              data={data}
              maxCount={5}
              label="Active Users"
            />
          </div>
        </div>

        <div className="mt-10 lg:mt-0">
          <Image
            src={"/hero.png"}
            width="600"
            className="w-full h-auto rounded-xl object-cover object-center"
            alt="Hero"
            height="400"
          />
        </div>
      </div>
    </div>
    // <div className="flex flex-col lg:min-h-screen py-24">
    //   <Spotlight
    //     className="-top-40 left-0 md:left-60 md:-top-20"
    //     fill="white"
    //   />
    //   <section className="flex-grow flex items-center w-full">
    //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
    //         <div className="space-y-8">
    //           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-green-800">
    //             Secure and Convenient Banking
    //           </h1>
    //           <p className="text-lg sm:text-xl md:text-2xl text-gray-800">
    //             Manage your finances with ease using our bank wallet app. Enjoy
    //             seamless transactions, real-time insights, and top-notch
    //             security.
    //           </p>
    //           <div className="flex space-x-4">
    //
    //             <Link
    //               href="/about"
    //               className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-green-600 bg-white border border-green-300 rounded-md shadow-sm hover:bg-green-50 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    //               prefetch={false}
    //             >
    //               About Us
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="mt-10 lg:mt-0">
    //           <Image
    //             src={"/hero.png"}
    //             width="600"
    //             className="w-full h-auto rounded-xl object-cover object-center"
    //             alt="Hero"
    //             height="400"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Hero;

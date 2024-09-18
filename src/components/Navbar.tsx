"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  let isLoggedIn = false;
  if (session?.user) {
    console.log(session.user);
    isLoggedIn = true;
  }

  return (
    <nav className="bg-gradient-to-r from-[#3D3D3D] to-[#1F1F1F] text-white p-4 fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-2xl font-bold">💸 Bank Wallet</div>
        </Link>

        {/* Desktop menu */}
        {/* Logged In */}
        {isLoggedIn === true ? (
          <div className="hidden md:flex space-x-4 text-gray-200">
            <Link href={"/profile"}>
              <Button
                variant="ghost"
                className="hover:bg-green-600 hover:text-white"
              >
                Profile
              </Button>
            </Link>
            <Button
              variant="destructive"
              onClick={async () => {
                await signOut();
                router.replace("/signin");
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex space-x-4 text-gray-200">
            <Link href={"/signin"}>
              <Button
                variant="ghost"
                className="hove hover:text-white hover:bg-[#565656]"
              >
                Signin
              </Button>
            </Link>
          </div>
        )}

        {/* Mobile menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </DropdownMenuTrigger>
          {isLoggedIn === true ? (
            <DropdownMenuContent align="end">
              <Link href={"/profile"}>
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                className="text-red-500"
                onClick={async () => {
                  await signOut();
                  router.replace("/signin");
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            <DropdownMenuContent align="end">
              <Link href={"/signin"}>
                <DropdownMenuItem>Signin</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import logo from "../assets/images/logo.svg";
import Mdnav from "./Mdnav";

const Nav = () => {
  const { data: session } = useSession();

  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [providers, setProviders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
      setIsLoading(false);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src={logo} alt="PromptCrunch logo" width={30} height={30} />
        <p className="logo_text">PromptCrunch</p>
      </Link>
      <Mdnav />
    </nav>
  );
};

export default Nav;

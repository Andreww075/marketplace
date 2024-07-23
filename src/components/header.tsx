"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const Header = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="border-b p-4 flex items-center justify-between h-16">
      {/* Logo */}

      <Link className="text-blue-600 font-bold text-2xl" href="/">
        Marketplace
      </Link>

      {/* nav */}

      <nav className="flex items-center gap-4 *:rounded">
        <Link
          href="/new"
          className="border border-blue-600 text-blue-600 inline-flex gap-1 items-center py-1 px-4 mr-4"
        >
          <FontAwesomeIcon icon={faPlus} className="h-4" />
          <span>Post an ad</span>
        </Link>

        <span className="border-r"></span>

        {!session?.user && (
          <>
            <button
              onClick={() => signIn("google")}
              className="border-0 text-gray-600"
            >
              Sign up
            </button>
            <button
              onClick={() => signIn("google")}
              className="bg-blue-600 text-white border-0 px-6 py-1"
            >
              Login
            </button>
          </>
        )}

        {session?.user && (
          <>
            <div className="relative flex items-center">
              <Link href='/account'>
                <Image
                  src={session.user.image as string}
                  alt={"avatar"}
                  width={36}
                  height={36}
                  className={
                    "rounded-md relative " + (showDropdown ? "z-50" : "")
                  }
                />
              </Link>

              <button className="p-2 block w-full" onClick={() => signOut()}>
                Logout
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

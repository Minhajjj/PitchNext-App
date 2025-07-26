import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center ">

        <Link href="/">
          <Image
            priority={true}
            src="/PitchNext.png"
            alt="logo"
            width={170}
            height={70}
            className="cursor-pointer"
          />
        </Link>

        {/* Right side links */}
        <div className="flex items-center gap-8 text-black">
          {session && session.user ? (
            <>
              {/* Create Link */}
              <Link
                href="/startup/create"
                className="text-black no-underline hover:underline font-medium"
              >
                Create
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="text-black hover:underline font-medium"
                >
                  Logout
                </button>
              </form>

              {/* Username Link */}
              <Link
                href={`/user/${session.user.id}`}
                className="text-black no-underline hover:underline font-medium"
              >
                {session.user.name}
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn('github');
              }}
              className="text-black hover:underline font-medium"
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

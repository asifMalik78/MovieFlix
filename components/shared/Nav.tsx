"use client";
import { useState, useEffect } from "react";
import { navOptions } from "@/utils/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import toast from "react-hot-toast";

const Nav = () => {
  const [show, setShow] = useState("none");
  const pathname = usePathname();
  const { data: session } = useSession();

  const logoutHandler = () => {
    setTimeout(() => {
      signOut();
    }, 1000);
    toast.success("Logged out Successfully");
  };
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow("glass");
    } else if (window.scrollY > 60 && window.screen.width <= 767) {
      setShow("glass");
    } else {
      setShow("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <nav
      className={`w-screen nav-bg-${show} rounded-none h-[60px] px-4  md:px-8 py-2 flex justify-between  items-center fixed top-0 left-0 right-0 z-50`}
    >
      <div className="flex items-center gap-12">
        <h1 className="text-2xl font-bold cursor-pointer">
          Movie <span className="text-primary">Flix</span>
        </h1>

        <ul className="items-center justify-start hidden gap-6 p-0 font-normal capitalize md:flex">
          {navOptions.map((option, idx) => {
            option.selected =
              (pathname.includes(option.route) && option.route.length > 1) ||
              pathname === option.route;
            return (
              <li key={idx} className={`${option.selected && "nav-active"}`}>
                <Link href={`${option.route}`}>{option.value}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        {session?.user ? (
          <button
            className="px-2 py-1 capitalize rounded-md md:py-1 md:px-5 bg-primary"
            onClick={logoutHandler}
          >
            sign out
          </button>
        ) : (
          <Link href="/signin">
            <button className="px-2 py-1 capitalize rounded-md md:py-1 md:px-4 bg-primary">
              sign in
            </button>
          </Link>
        )}

        {session?.user && (
          <Avatar>
            <AvatarImage src={`${session.user.image}`} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </div>
    </nav>
  );
};

export default Nav;

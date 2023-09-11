"use client";
import { navOptions } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function BottomNav() {
  const pathname = usePathname();
  const [isNavVisible, setIsNavVisible] = useState(true); // State to manage visibility of the bottom navbar
  const [prevScrollY, setPrevScrollY] = useState(0); // State to keep track of previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If the user scrolls down, hide the navbar
      // If the user scrolls up, show the navbar
      setIsNavVisible(currentScrollY <= prevScrollY);

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    // Attach event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`fixed block w-full px-2 pt-3 pb-4 bottom-0 md:hidden ${
        isNavVisible ? "translate-y-0" : "translate-y-full"
      }   nav-bg-glass transition-transform`}
    >
      <ul className="grid grid-cols-5 gap-6">
        {navOptions.map((option: any, idx: number) => {
          option.selected =
            (pathname.includes(option.route) && option.route.length > 1) ||
            pathname === option.route;
          return (
            <li key={idx} className={`${option.selected && "bottom-nav-active"} py-2`}>
              <Link
                href={`${option.route}`}
                className="flex items-center justify-center"
              >
                <div className="relative w-[1.5rem] h-[1.5rem]">
                  <Image src={option.path} alt="icon" fill={true} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BottomNav;

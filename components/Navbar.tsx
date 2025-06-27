"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: NavLink[] = [
    { href: "/", label: "الرئيسية" },
    { href: "/myfeelings", label: "احساسى" },
    { href: "/success-in-islam", label: "النجاح فى الاسلام" },
  ];

  const isActive = (path: string) =>
    pathname === path
      ? "text-[#FF9898] border-b-[#FF9898]"
      : "border-b-transparent hover:border-b-[#FF9898] hover:text-[#FF9898]";

  return (
    <nav className="border-b border-gray-200">
      <div className="flex  justify-between sm:justify-center items-center p-4">
        {/* Hamburger */}
        <button
          className="sm:hidden cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <Image
            src={isOpen ? "/Close.png" : "/hamburger.png"}
            alt="Menu Icon"
            width={30}
            height={30}
          />
        </button>
        {/* Logo */}
        <div className="flex flex-col items-center justify-center">
          <Link href="/">
            <Image width={100} height={100} src="/hidaya.png" alt="Logo" />
          </Link>
          <h2 className="text-md text-[#FF9898]">دعونا نكتشف هدايا</h2>
        </div>
      </div>

      {/* Nav Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:justify-center sm:items-center mt-4`}
      >
        <ul className="flex flex-col sm:flex-row gap-6 sm:gap-20 text-center">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`border-b-2 pb-2 cursor-pointer ${isActive(
                link.href
              )}`}
              onClick={() => setIsOpen(false)}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

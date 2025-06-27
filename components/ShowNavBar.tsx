"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
function ShowNavBar() {
  const pathname = usePathname();
  const isHiddenNav =
    /^\/myfeelings\/[^/]+$/.test(pathname) ||
    /^\/success-in-islam\/[^/]+$/.test(pathname);
  return <>{isHiddenNav || <Navbar />}</>;
}

export default ShowNavBar;

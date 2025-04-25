import Link from "next/link";
import React from "react";
import NavLinks from "./navlinks";
import {getCategories} from "../../../actions/get-categories";
import NavbarActions from "./navbar-actions";

async function Navbar() {
  const categories = await getCategories();
  return (
    <nav className="flex items-center justify-between bg-white text-black h-16 border-b">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center">
        <Link href="/" className="text-2xl font-bold">
          E-commerce
        </Link>
        <NavLinks data={categories} />
        <NavbarActions />
      </div>
    </nav>
  );
}

export default Navbar;

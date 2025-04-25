"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import {Category} from "../../../types";

interface NavLinksProps {
  data: Category[];
}

function NavLinks({data}: NavLinksProps) {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    label: route.name,
    href: `/category/${route.id}`,
    isActive: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="mx-6 flex items-end space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className={`text-sm font-medium hover:text-black ${
            route.isActive ? "text-black" : "text-gray-800"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;

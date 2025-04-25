"use client";
import React, {useEffect, useState} from "react";
import {Button} from "../ui/button";
import {ShoppingBag} from "lucide-react";
import useCart from "@/hooks/use-cart";
import {useRouter} from "next/navigation";

function NavbarActions() {
  const cart = useCart();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-4">
      <Button className="rounded-full" onClick={() => router.push("/cart")}>
        <ShoppingBag size={24} />
        <span className="text-sm text-white">{cart.items.length}</span>
      </Button>
    </div>
  );
}

export default NavbarActions;

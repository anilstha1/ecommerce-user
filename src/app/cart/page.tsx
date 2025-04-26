"use client";

import CartItem from "@/components/cart-item";
import Container from "@/components/common/container";
import Summary from "@/components/summary";
import useCart from "@/hooks/use-cart";
import React, {useEffect, useState} from "react";

function CartPage() {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white min-h-[calc(100vh-180px)]">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length == 0 && (
                <p className="text-neutral-500">No items in your cart</p>
              )}
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartPage;

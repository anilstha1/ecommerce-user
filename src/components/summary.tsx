"use client";
import useCart from "@/hooks/use-cart";
import {formatter} from "@/lib/utils";
import React, {useEffect} from "react";
import {Button} from "./ui/button";
import axios from "axios";
import {useSearchParams} from "next/navigation";
import {toast} from "react-hot-toast";

function Summary() {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    console.log(res.data);

    window.location.href = res.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <div className="font-semibold">{formatter.format(totalPrice)}</div>
        </div>
        <Button
          disabled={items.length === 0}
          className="rounded-full w-full"
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Summary;

"use client";
import React, {useEffect, useState} from "react";
import {Product} from "../../types";
import {Button} from "./ui/button";
import {Expand, ShoppingCart} from "lucide-react";
import {formatter} from "@/lib/utils";
import {useRouter} from "next/navigation";
import CustomDialog from "./custom-dialog";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

function ProductCard({data}: ProductCardProps) {
  const [isMounted, setIsMounted] = useState(false);  
  const [open, setOpen] = useState(false);

  const cart = useCart();

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setOpen(false);
    }
  };

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div className="">
      <CustomDialog open={open} onOpenChange={onOpenChange} product={data} />
      <div
        className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
        onClick={handleClick}
      >
        <div className="aspect-square rounded-xl bg-gray-100 relative">
          <img
            alt="image"
            src={data.images[0]}
            className="aspect-square object-cover rounded-md"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <Button
                className="flex items-center justify-center rounded-full bg-white hover:bg-white border shadow-md hover:scale-110 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(true);
                }}
              >
                <Expand size={20} className="text-gray-600" />
              </Button>
              <Button
                className="flex items-center justify-center rounded-full bg-white hover:bg-white border shadow-md hover:scale-110 transition"
                onClick={addToCart}
              >
                <ShoppingCart size={20} className="text-gray-600" />
              </Button>
            </div>
          </div>
        </div>

        <div className="">
          <p className="font-semibold text-lg">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category.name}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="font-semibold">{formatter.format(data.price)}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

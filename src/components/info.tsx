"use client";
import React, {useState} from "react";
import {Product} from "../../types";
import {formatter} from "@/lib/utils";
import {Button} from "./ui/button";
import {ShoppingCart} from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

function Info({data}: InfoProps) {
  const cart = useCart();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    if (!selectedColor || !selectedSize) {
      return alert("Please select both color and size");
    }

    cart.addItem({
      ...data,
      selectedColor,
      selectedSize,
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <div className="font-semibold">{formatter.format(data.price)}</div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="text-sm text-gray-500">{data?.description}</div>

      <div className="mt-10 flex flex-col items gap-x-3 gap-y-4">
        <div className="text-sm text-gray-800 space-y-4">
          <div className="font-semibold">Color:</div>
          <div className="flex space-x-4">
            {data?.colors.map((color) => (
              <div
                key={color}
                className={`h-8 w-8 rounded-full border cursor-pointer transition-all ${
                  selectedColor === color ? "ring-2 ring-black" : ""
                }`}
                style={{backgroundColor: color}}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-800 space-y-4">
          <div className="font-semibold">Size:</div>
          <div className="flex space-x-4">
            {data?.sizes.map((size) => (
              <div
                key={size}
                className={`h-8 w-8 rounded-full border flex items-center justify-center cursor-pointer transition-all ${
                  selectedSize === size ? "bg-black text-white" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <Button
          className="rounded-full px-4 w-fit md:px-8"
          onClick={addToCart}
          disabled={!selectedColor || !selectedSize}
        >
          Add to Cart
          <ShoppingCart className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default Info;

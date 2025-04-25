"use client";
import {X} from "lucide-react";

import {CartItem as CartItemType} from "../../types";
import {formatter} from "@/lib/utils";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  data: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({data}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <img
          src={data.images[0]}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <button
            onClick={onRemove}
            className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition"
          >
            <X size={15} />
          </button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">Color: {data.selectedColor}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              Size: {data.selectedSize}
            </p>
          </div>
          <div className="mt-1 flex items-end">
            {formatter.format(data.price)}
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

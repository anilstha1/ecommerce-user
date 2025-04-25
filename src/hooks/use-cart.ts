import {create} from "zustand";
import {persist, createJSONStorage} from "zustand/middleware";

import {CartItem} from "../../types";
import {toast} from "react-hot-toast";

interface CartStore {
  items: CartItem[];
  addItem: (data: CartItem) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item: CartItem) =>
            item.id === data.id &&
            item.selectedColor === data.selectedColor &&
            item.selectedSize === data.selectedSize
        );

        if (existingItem) {
          return toast("This variant is already in cart.");
        }

        set({items: [...get().items, data]});
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
        toast.success("Item removed from cart.");
      },
      removeAll: () => {
        set({items: []});
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

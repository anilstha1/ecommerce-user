"use client";
import React, {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Button} from "./ui/button";
import {X} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";

function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("minPrice") || "",
    max: searchParams.get("maxPrice") || "",
  });

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.push(`?${params.toString()}`);
  };

  const handlePriceRangeChange = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (priceRange.min) params.set("minPrice", priceRange.min);
    else params.delete("minPrice");
    if (priceRange.max) params.set("maxPrice", priceRange.max);
    else params.delete("maxPrice");

    router.push(`?${params.toString()}`);
  };

  const toggleFilters = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="p-4 md:space-y-4 md:border-r">
      <Button className="block md:hidden" onClick={toggleFilters}>
        Filters
      </Button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{x: 300}}
            animate={{x: 0}}
            exit={{x: 300}}
            transition={{duration: 0.3}}
            className="w-3/4 h-screen md:hidden space-y-4 fixed top-0 right-0 bg-white p-8 shadow-lg z-10"
          >
            <span
              className="absolute top-4 right-4 cursor-pointer"
              onClick={toggleFilters}
            >
              <X size={24} className="" />
            </span>
            <div>
              <h3 className="text-lg font-semibold mb-2">Sort by Price</h3>
              <hr className="mb-4" />
              <Select
                defaultValue={searchParams.get("sort") || ""}
                onValueChange={handleSortChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Price: Low to High</SelectItem>
                  <SelectItem value="desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Price Range</h3>
              <hr className="mb-4" />
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange((prev) => ({...prev, min: e.target.value}))
                  }
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange((prev) => ({...prev, max: e.target.value}))
                  }
                />
              </div>
              <Button onClick={handlePriceRangeChange} className="mt-4 w-full">
                Apply Filter
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden md:block space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Sort by Price</h3>
          <hr className="mb-4" />
          <Select
            defaultValue={searchParams.get("sort") || ""}
            onValueChange={handleSortChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <hr className="mb-4" />
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange((prev) => ({...prev, min: e.target.value}))
              }
            />
            <Input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange((prev) => ({...prev, max: e.target.value}))
              }
            />
          </div>
          <Button onClick={handlePriceRangeChange} className="mt-4 w-full">
            Apply Filter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Filters;

"use client";
import React, {useEffect, useState} from "react";
import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import {Product} from "../../types";
import Gallery from "./gallery";
import Info from "./info";

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}

function CustomDialog({open, onOpenChange, product}: CustomDialogProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTitle></DialogTitle>
      <DialogContent className="bg-white sm:max-w-3xl">
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
          <div className="sm:col-span-4 lg:col-span-5">
            <Gallery images={product.images} />
          </div>
          <div className="sm:col-span-8 lg:col-span-7">
            <Info data={product} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;

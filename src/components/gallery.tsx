"use client";
import React from "react";

function Gallery({images}: {images: string[]}) {
  const [activeImage, setActiveImage] = React.useState(images[0]);
  return (
    <div className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6">
          {images?.map((image) => (
            <div
              key={image}
              className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
              onClick={() => setActiveImage(image)}
            >
              <div className="">
                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                  <img
                    src={image}
                    alt="image"
                    className="aspect-square object-cover object-center"
                  />
                </span>
                <span
                  className={`absolute inset-0 rounded-md ring-2 ring-offset-2 ring-black ${
                    activeImage == image ? "ring-black" : "ring-transparent"
                  }`}
                ></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="aspect-square w-full">
        <div key={activeImage}>
          <span className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
            <img
              src={activeImage}
              alt="image"
              className="aspect-square object-cover object-center"
            />
            <span className="absolute inset-0 rounded-md ring-2 ring-offset-2 ring-black" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

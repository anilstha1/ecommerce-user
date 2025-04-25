import React from "react";
import {Billboard as BillboardType} from "../../types";

interface BillboardProps {
  data: BillboardType;
}

function Billboard({data}: BillboardProps) {
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1]"
        style={{
          backgroundImage: `url(${data?.imageUrl})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;

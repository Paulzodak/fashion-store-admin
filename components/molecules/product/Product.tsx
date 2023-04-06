import * as React from "react";
import Image from "next/image";
import { CiShoppingCart as CartIcon } from "react-icons/ci";
export interface IProductProps {}

export function Product({ details }: any) {
  return (
    <div className=" h-[15rem] ">
      <div className="relative h-[65%] w-[100%]  overflow-md">
        <Image src={details.image} alt="product" fill className="rounded-md" />
      </div>
      <h1 className="text-xs w-[80%] mt-4">{details.name}</h1>
      <p className="text-[8px] w-[80%]">Labore sint ipsum dolore mollit</p>
      <div className="grid grid-cols-[70%_20%] justify-between">
        <div className="font-bold">${details.price}</div>
        <button className="border p-1 rounded-full text-btnGreen border-btnGreen">
          <CartIcon size="1.2rem" color="inherit" />
        </button>
      </div>
    </div>
  );
}

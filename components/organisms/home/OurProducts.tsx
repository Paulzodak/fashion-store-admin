import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ProductList } from "@/components/molecules/product/ProductsList";
export interface IOurProductsProps {}
export function OurProducts(props: IOurProductsProps) {
  const { products } = useSelector((state: any) => state.products);

  const dummyFilters = [
    {
      name: "Best-sellers",
      active: true,
    },
    {
      name: "New-products",
      active: false,
    },
  ];
  const [filter, setFilter] = useState<any>(dummyFilters);
  const filterHeader = filter.filter(
    (item: any) => item.active == true && item.name
  );

  const filterHandler = (item: any, index: number) => {
    setFilter((prev: any) => {
      const temp = [...prev];
      temp.filter((items, tempindex) =>
        tempindex === index ? (items.active = true) : (items.active = false)
      );
      return temp;
    });
  };
  return (
    <div className="py-40">
      <h1 className="text-4xl text-center  font-bold">Our products</h1>
      <div className="grid grid-cols-2 w-[20rem]  mx-auto mt-8  cursor-pointer">
        {filter.map((item: any, index: number) => {
          return (
            <div
              onClick={() => filterHandler(item, index)}
              className={` text-center py-2  ${
                item.active
                  ? "bg-btnGreen text-[white] rounded-md"
                  : "text-btnGreen"
              }`}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="mt-10  ">
        <ProductList
          products={products.filter(
            (item: any) => item.tag === filterHeader[0].name
          )}
        />
      </div>
    </div>
  );
}

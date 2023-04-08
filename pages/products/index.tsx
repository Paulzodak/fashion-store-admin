import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import { IoAdd as AddIcon } from "react-icons/io5";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { useState } from "react";
import CreateProduct from "@/components/molecules/CreateProduct";
export interface IIndexProps {}

export default function Index(props: any) {
  const dummyCategories = [
    {
      name: "All",
      active: true,
    },
    {
      name: "Face",
      active: false,
    },
    {
      name: "Body",
      active: false,
    },
  ];
  const [filter, setFilter] = useState<any>(dummyCategories);
  const filterHeader = filter.filter(
    (item: any) => item.active == true && item.name
  );
  const [showCreateProduct, setShowCreateProduct] = useState<boolean>(false);
  const filterHandler = (item: any, index: number) => {
    setFilter((prev: any) => {
      const temp = [...prev];
      temp.filter((items, tempindex) =>
        tempindex === index ? (items.active = true) : (items.active = false)
      );
      return temp;
    });
  };
  console.log(filter);
  const tableRowClasses = "grid grid-cols-[10%_25%_25%_10%_10%_10%]";
  const tbClasses = "text-md  text-left ";
  const thClasses = "text-md font-medium text-gray-900 text-left";
  return (
    <Layout>
      <section className="px-4 pt-4">
        {showCreateProduct && (
          <CreateProduct
            showCreateProduct={showCreateProduct}
            setShowCreateProduct={setShowCreateProduct}
          />
        )}
        <div className="grid grid-rows-2 md:grid-cols-[4rem_20rem] justify-between  ">
          <h1 className="font-bold text-2xl">Products</h1>
          <div className=" grid grid-cols-[7rem_auto] gap-x-4">
            <button
              onClick={() => {
                setShowCreateProduct(true);
              }}
              className=" pl-8 focus:ring-[0.2rem] outline-none focus:ring-teal-200/30 focus:ring-offset-0 relative border h-full w-full bg-btnGreen text-[white] rounded-md px-4 text-sm sm:text-sm md:text-md overflow-hidden z-0 "
            >
              <AddIcon
                size="1.2rem"
                color="white"
                className=" absolute left-5"
              />
              New
            </button>
            <div className="relative">
              <input
                placeholder="Search"
                className="bg-bgGrey pl-10 w-full h-full rounded-md focus:ring-[0.2rem] border  outline-none focus:ring-teal-200/30 focus:ring-offset-0"
              ></input>
              <SearchIcon size="1.2rem" className="absolute top-2 left-2 " />
            </div>
          </div>
        </div>
        <div>
          <div className=" h-10 grid grid-cols-3 w-[20rem]">
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
        </div>
        {/* --------------TABLE------------- */}
        <div className="border mt-8 rounded-md ">
          <table className="grid">
            <thead className="h-14 pt-4  bg-bgGrey text-borderGrey">
              <tr className={`${tableRowClasses}`}>
                <th scope="col" className={thClasses}></th>
                <th scope="col" className={thClasses}>
                  Name
                </th>
                <th scope="col" className={thClasses}>
                  Category
                </th>
                <th scope="col" className={thClasses}>
                  Quantity
                </th>
                <th scope="col" className={thClasses}>
                  Price
                </th>
                <th scope="col" className={thClasses}>
                  Status
                </th>
                <th scope="col" className={thClasses}></th>
              </tr>
            </thead>
            <tbody className="h-14 pt-4">
              <tr className={`${tableRowClasses}`}>
                <td scope="col" className={tbClasses}></td>
                <td scope="col" className={tbClasses}>
                  Natural Beard Oil
                </td>
                <td scope="col" className={tbClasses}>
                  Nature and body essential
                </td>
                <td scope="col" className={tbClasses}>
                  50pcs
                </td>
                <td scope="col" className={tbClasses}>
                  $60
                </td>
                <td scope="col" className={tbClasses}>
                  Available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}

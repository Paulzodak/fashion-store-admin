import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import hero from "../../assets/shop/hero.jpg";
import Image from "next/image";
import { useState } from "react";
import { ProductList } from "@/components/molecules/product/ProductsList";
import { Search } from "@/components/atoms/Search";
import { useSelector } from "react-redux";
export interface IIndexProps {}

export default function Index(props: any) {
  const { utilitySearch } = useSelector((state: any) => state.utilities);
  const { products } = useSelector((state: any) => state.products);
  const { user } = useSelector((state: any) => state.user);
  console.log(user);
  console.log(products);

  const dummyFilters = [
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
  console.log(filter);
  return (
    <Layout>
      <section>Dashboard</section>
    </Layout>
  );
}

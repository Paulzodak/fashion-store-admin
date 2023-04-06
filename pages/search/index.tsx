import * as React from "react";
import { Layout } from "@/components/templates/Layout";
import { ProductList } from "@/components/molecules/product/ProductsList";
import deodorant from "../../assets/products/deodorant.jpeg";
import beardoil from "../../assets/products/nora_beard_oil.jpeg";
import beardoil2 from "../../assets/products/nora_beard_oil_2.jpeg";
import perfume from "../../assets/products/nora_perfume.jpeg";
import { useSelector } from "react-redux";
export interface ISearchProps {}

export default function Search(props: any) {
  const { utilitySearch } = useSelector((state: any) => state.utilities);
  const { products } = useSelector((state: any) => state.products);

  return (
    <Layout>
      <div className="my-10">
        <ProductList
          products={products.filter((item: any) =>
            item.name.toLowerCase().includes(utilitySearch.toLowerCase())
          )}
        />
      </div>
    </Layout>
  );
}

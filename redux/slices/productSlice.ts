import { createSlice } from "@reduxjs/toolkit";
import deodorant from "../../assets/products/deodorant.jpeg";
import beardoil from "../../assets/products/nora_beard_oil.jpeg";
import beardoil2 from "../../assets/products/nora_beard_oil_2.jpeg";
import perfume from "../../assets/products/nora_perfume.jpeg";
const initialState = {
  products: [
    {
      id: Math.random(),
      name: "Perfume",
      desc: "",
      discount: 10,
      tag: "Best-sellers",
      image: perfume,
      price: 32,
      category: "Face",
    },
    {
      id: Math.random(),
      name: "Perfume",
      desc: "",
      discount: 10,
      tag: "Best-sellers",
      image: perfume,
      price: 32,
      category: "Face",
    },
    {
      id: Math.random(),
      name: "Beard Oil",
      desc: "",
      price: 22,
      discount: 10,
      tag: "Best-sellers",
      image: beardoil,
      category: "Face",
    },
    {
      id: Math.random(),
      name: "Beard Oil",
      desc: "",
      price: 22,
      discount: 10,
      tag: "Best-sellers",
      image: beardoil,
      category: "Body",
    },
    {
      id: Math.random(),
      name: "Fast Beard Oil",
      desc: "",
      price: 18,
      discount: 10,
      tag: "New-products",
      image: beardoil2,
      category: "Face",
    },
    {
      id: Math.random(),
      name: "Fast Beard Oil",
      desc: "",
      price: 18,
      discount: 10,
      tag: "New-products",
      image: beardoil2,
      category: "Body",
    },
    {
      id: Math.random(),
      name: "Deodorant",
      desc: "",
      price: 48,
      discount: 10,
      tag: "New-products",
      image: deodorant,
      category: "Face",
    },
    {
      id: Math.random(),
      name: "Deodorant",
      desc: "",
      price: 48,
      discount: 10,
      tag: "New-products",
      image: deodorant,
      category: "Body",
    },
  ],
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: () => {},
  },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

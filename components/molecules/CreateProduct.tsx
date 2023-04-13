import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../atoms/Button";
import { useState } from "react";
export interface ICreateProductProps {
  showCreateProduct: boolean;
  setShowCreateProduct: Function;
  getProducts: Function;
}
import { InputField } from "../atoms/createProduct/InputField";
import axios from "axios";
import { Toast } from "@/utils/global";
import { BASEURL } from "@/utils/global";
export default function CreateProduct(props: ICreateProductProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [inputs, setInputs] = useState<any>({
    productName: "",
    productCategory: "",
    productBrand: "",
    productPrice: "",
    productPurpose: "",
    productDou: "",
    productIngredients: "",
  });
  const [inputIsValid, setInputIsValid] = useState<any>({
    productName: false,
    productCategory: false,
    productBrand: false,
    productPrice: false,
    productPurpose: false,
    productDou: false,
    productIngredients: false,
  });
  console.log(inputs);
  console.log(inputIsValid);
  const categoryOptions = [
    "Fragrances",
    "Skin care",
    "Hair care",
    "Personal Care products",
    "Face care",
  ];
  const brandOptions = [
    "Hourglass",
    "Kosas",
    "Credo Beauty",
    "Narscosmetics.com",
  ];

  // ------------VALIDATION------------

  const setInputsHandler = (name: string, value: any) => {
    setInputs((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const setInputIsValidHandler = (name: string, value: boolean) => {
    setInputIsValid((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const formSubmitHandler = () => {
    setLoading(true);
    axios
      .post(`${BASEURL}/product/createProduct`, {
        productName: inputs.productName,
        productCategory: inputs.productCategory,
        productBrand: inputs.productBrand,
        productPrice: inputs.productPrice,
        productPurpose: inputs.productPurpose,
        productDou: inputs.productDou,
        productIngredients: inputs.productIngredients,
      })
      .then((res) => {
        props.setShowCreateProduct(false);
        props.getProducts();
        // setInputs({
        //   productName: "",
        //   productCategory: "",
        //   productBrand: "",
        //   productPrice: "",
        //   productPurpose: "",
        //   productDou: "",
        //   productIngredients: "",
        // });
        // setInputIsValid({
        //   productName: false,
        //   productCategory: false,
        //   productBrand: false,
        //   productPrice: false,
        //   productPurpose: false,
        //   productDou: false,
        //   productIngredients: false,
        // });
        console.log(res);
        // if (res.data.user) {
        //   setToken(res.data.user);
        // }
        setLoading(false);
        Toast.fire({
          icon: "success",
          title: "Product created!",
        });
        // router.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        Toast.fire({
          icon: "error",
          title: "Error",
        });
        setLoading(false);
      });
  };

  const BtnRender = () => {
    return (
      <div className=" grid grid-cols-2 gap-x-1 h-8 sm:gap-x-4">
        <button
          onClick={() => {
            props.setShowCreateProduct(false);
          }}
          className=" focus:ring-[0.2rem] hover:ring-[0.2rem] outline-none ring-teal-200/30 ring-offset-0 relative  h-full w-full bg-lightBtnGreen text-btnGreen rounded-md  text-sm  md:text-md overflow-hidden z-0"
        >
          Cancel
        </button>
        <div onClick={formSubmitHandler}>
          <Button
            text="Create"
            loading={loading}
            animate={true}
            disable={false}
          />
        </div>
      </div>
    );
  };
  return (
    <div className="font-roboto fixed inset-0 flex items-center justify-center  bg-gray-900 bg-opacity-80 z-10 ">
      <AnimatePresence>
        {props.showCreateProduct && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            className="overflow-scroll w-[18rem]  sm:w-[35rem] md:w-[45rem] absolute bg-[white] shadow-md rounded-lg h-[80vh] mx-auto px-4  py-4 sm:px-8"
          >
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-[auto_10rem] justify-between">
              <h1 className="text-lg sm:text-lg md:text-xl mt-1 font-bold">
                Create Product
              </h1>
              <div className="hidden sm:block"> {BtnRender()}</div>
            </div>
            <form>
              <section className="grid mt-8 grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-8">
                <InputField
                  name="Product Name"
                  value={inputs.productName}
                  valid={inputIsValid.productName}
                  setValue={(input: string) => {
                    setInputsHandler("productName", input);
                    input.length > 2
                      ? setInputIsValidHandler("productName", true)
                      : setInputIsValidHandler("productName", false);
                  }}
                />
                <InputField
                  type="select"
                  selectOptions={categoryOptions}
                  name="Category"
                  value={inputs.productCategory}
                  valid={inputIsValid.productCategory}
                  setValue={(input: string) => {
                    setInputsHandler("productCategory", input);
                    input.length > 0
                      ? setInputIsValidHandler("productCategory", true)
                      : setInputIsValidHandler("productCategory", false);
                  }}
                />
                <InputField
                  type="select"
                  selectOptions={brandOptions}
                  name="Brand"
                  value={inputs.productBrand}
                  valid={inputIsValid.productBrand}
                  setValue={(input: string) => {
                    setInputsHandler("productBrand", input);
                    input.length > 0
                      ? setInputIsValidHandler("productBrand", true)
                      : setInputIsValidHandler("productBrand", false);
                  }}
                />
                <InputField
                  value={inputs.productPrice}
                  valid={inputIsValid.productPrice}
                  setValue={(input: number) => {
                    setInputsHandler("productPrice", input);
                    input.toString().length > 0
                      ? setInputIsValidHandler("productPrice", true)
                      : setInputIsValidHandler("productPrice", false);
                  }}
                  name="Price"
                  placeholder="$0.00"
                />
              </section>
              <div className="grid gap-y-4 mt-4">
                <InputField
                  type="textfield"
                  name="Purpose"
                  placeholder="Not less than 50 characters..."
                  value={inputs.productPurpose}
                  valid={inputIsValid.productPurpose}
                  setValue={(input: string) => {
                    setInputsHandler("productPurpose", input);
                    input.length > 50
                      ? setInputIsValidHandler("productPurpose", true)
                      : setInputIsValidHandler("productPurpose", false);
                  }}
                />
                <InputField
                  type="textfield"
                  name="Directions for use"
                  placeholder="Not less than 50 characters..."
                  value={inputs.productDou}
                  valid={inputIsValid.productDou}
                  setValue={(input: string) => {
                    setInputsHandler("productDou", input);
                    input.length > 50
                      ? setInputIsValidHandler("productDou", true)
                      : setInputIsValidHandler("productDou", false);
                  }}
                />
                <InputField
                  type="textfield"
                  name="Ingredients"
                  placeholder="Not less than 50 characters..."
                  value={inputs.productIngredients}
                  valid={inputIsValid.productIngredients}
                  setValue={(input: string) => {
                    setInputsHandler("productIngredients", input);
                    input.length > 50
                      ? setInputIsValidHandler("productIngredients", true)
                      : setInputIsValidHandler("productIngredients", false);
                  }}
                />
              </div>
            </form>
            <div className=" sm:hidden mt-8"> {BtnRender()}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

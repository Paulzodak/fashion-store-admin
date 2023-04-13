import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Product from "../models/product.js";
export const createProduct = async (req, res) => {
  const product = new Product({
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productBrand: req.body.productBrand,
    productPrice: req.body.productPrice,
    productPurpose: req.body.productPurpose,
    productDou: req.body.productDou,
    productIngredients: req.body.productIngredients,
  });
  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(409).json({
      error: error.message,
    });
  }
};
export const fetchAllProducts = async (req, res) => {
  const products = await Product.find({});
  if (products) {
    console.log(products);
    return res.json({ status: "ok", products: products });
  } else {
    res.json({ status: "error", user: false, body: "password incorrect" });
  }
  //   // const password = await bcrypt.hash(req.body.password, 10);
  //   console.log(req.body);
  //   const user = await User.findOne({
  //     email: req.body.email,
  //     // password: req.body.password,
  //   });
  //   if (user) {
  //     console.log(user);
  //     console.log(req.body.password);
  //     const passwordIsValid = await bcrypt.compare(
  //       req.body.password,
  //       user.password
  //     );
  //     if (passwordIsValid) {
  //       const token = jwt.sign(
  //         {
  //           fullname: user.fullname,
  //           password: passwordIsValid,
  //           email: user.email,
  //           imageUrl: user.imageUrl,
  //         },
  //         "secretadgjl13579"
  //       );
  //       console.log(token);

  //       return res.json({ status: "ok", user: token });
  //     }
  //   } else {
  //     res.json({ status: "error", user: false, body: "password incorrect" });
  //   }
};

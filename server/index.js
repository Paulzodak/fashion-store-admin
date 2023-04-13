import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";
import multer from "multer";
import productRoutes from "./routes/productRoutes.js";
const app = express();
dotenv.config();
app.use(express.json({ extended: true }));
app.use(express.json({ urlencoded: true }));
app.use(cors());
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.get("/api", (req, res) => {
  res.send("Welcome to server");
});
const PORT = 5000;
mongoose
  .connect(
    `mongodb+srv://zodak:asdfg12345@cluster1.xvcohk9.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() =>
    app.listen(PORT, () => {
      console.log("server started");
    })
  )
  .catch((err) => console.log(err));
// export const db1 = (mongoose.name = mongoose.createConnection(
//   "mongodb+srv://zodak:asdfg12345@cluster1.xvcohk9.mongodb.net/Name?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// ));
// export const db2 = (mongoose.Email = mongoose.createConnection(
//   "mongodb+srv://zodak:asdfg12345@cluster1.xvcohk9.mongodb.net/Email?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// ));

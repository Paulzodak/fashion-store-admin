import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import utilitySlice from "./slices/utilitySlice";
import productSlice from "./slices/productSlice";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import session from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root-fashion-admin-1234",
  storage,
};
const rootPersistConfig = {
  key: "root",
  session,
  whitelist: ["user"],
};
const rootReducer = combineReducers({
  user: userSlice,
  utilities: utilitySlice,
  products: productSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);
// export const store = configureStore({
//   reducer: {
//     user: userSlice,
//     utilities: utilitySlice,
//     products: productSlice,
//   },
// });

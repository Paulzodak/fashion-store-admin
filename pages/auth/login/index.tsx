import * as React from "react";
import Input from "@/components/atoms/auth/input";
import facebook from "../../../assets/auth/facebook.jpg";
import google from "../../../assets/auth/google.jpg";
import apple from "../../../assets/auth/apple.jpg";
import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/auth/InputField";
import Image from "next/image";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { BsFacebook as FacebookIcon } from "react-icons/bs";
import { BsApple as AppleIcon } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASEURL } from "@/utils/global";
import { useDispatch } from "react-redux";
import { Toast } from "@/utils/global";
import { useJwt } from "react-jwt";
import { setUser } from "@/redux/slices/userSlice";
import AuthLayout from "@/components/templates/AuthLayout";
export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  const router = useRouter();
  const iconSize = "1.1rem";
  const dispatch = useDispatch();
  const [token, setToken] = useState<any>();
  const { decodedToken, isExpired } = useJwt(token);
  useEffect(() => {
    dispatch(setUser(decodedToken));
    console.log("set User");
  }, [decodedToken]);
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState<any>({
    email: "",
    password: "",
  });
  console.log(inputs);
  const [inputIsValid, setInputIsValid] = useState<any>({
    email: false,
    password: false,
    formIsValid: false,
  });
  const otherLogin = [
    {
      image: google,
      icon: <GoogleIcon size={iconSize} className="mx-auto" />,
      bg: "bg-red-100",
    },
    {
      image: facebook,
      icon: <FacebookIcon size={iconSize} className="mx-auto" />,
      bg: "bg-sky-100",
    },
    {
      image: apple,
      icon: <AppleIcon size={iconSize} className="mx-auto" />,
      bg: "bg-neutral-100",
    },
  ];
  const setInputsHandler = (name: string, value: any) => {
    setInputs((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const setInputIsValidHandler = (name: string, value: any) => {
    setInputIsValid((prev: any) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };
  const emailHandler = (value: any) => {
    setInputsHandler("email", value);
    value.length > 4 && value.includes("@") && value.includes(".com")
      ? setInputIsValidHandler("email", true)
      : setInputIsValidHandler("email", false);
  };
  const passwordHandler = (value: any) => {
    setInputsHandler("password", value);
    value.length > 7
      ? setInputIsValidHandler("password", true)
      : setInputIsValidHandler("password", false);
  };
  const login = () => {
    if (inputIsValid.email && inputIsValid.password) {
      axios
        .post(`${BASEURL}/auth/admin/login`, {
          email: inputs.email,
          password: inputs.password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.user) {
            setToken(res.data.user);
          }
          setLoading(false);
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
          router.push("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          Toast.fire({
            icon: "error",
            title: "Error",
          });
          setLoading(false);
        });
    }
  };
  return (
    <section className="">
      <div className="text-sm text-right m-4">
        Don't have an account? &nbsp;
        <button
          onClick={() => {
            router.push("/auth/signup");
          }}
          className="text-btnGreen underline"
        >
          Sign up
        </button>
      </div>
      <AuthLayout>
        <div className="mx-auto w-[90%] bg-white h-[20rem]">
          <h1 className="text-center font-bold text-2xl mt-8">Sign in</h1>
          {/*  */}
          <div className={`mt-8 mx-auto h-[4rem] w-[18rem] `}>
            <InputField
              setInput={emailHandler}
              inputIsValid={inputIsValid.email}
              name="Email"
              placeholder="example@gmail.com"
            />
          </div>
          {/*  */}
          <div className={`mt-8 mx-auto h-[4rem] w-[18rem] `}>
            <InputField
              setInput={passwordHandler}
              inputIsValid={inputIsValid.password}
              name="Password"
              placeholder="Enter at least 8+ characters "
            />
          </div>
          {/*  */}
          <div className=" grid grid-cols-[auto_auto] justify-between w-[18rem] mx-auto text-xs mt-4">
            <div className="grid grid-cols-[auto_auto] gap-x-2 justify-between">
              <input
                type="checkbox"
                className=" checked:bg-btnGreen rounded-sm focus:ring-0 "
              />
              <p>Keep me logged in</p>
            </div>
            <div className="text-btnGreen">Forgot password?</div>
          </div>
          <div
            onClick={() => {
              login();
              setLoading(inputIsValid.email && inputIsValid.password && true);
            }}
            className="mt-8 rounded-md   mx-auto h-[3rem] text-md w-[18rem] shadow-lg"
          >
            <Button
              disable={
                inputIsValid.password && inputIsValid.email ? true : false
              }
              animate={true}
              loading={loading}
              text="Sign in"
            />
          </div>
        </div>
      </AuthLayout>
    </section>
  );
}

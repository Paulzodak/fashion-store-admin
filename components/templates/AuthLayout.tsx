import * as React from "react";
import bg from "../../assets/auth/bg.jpeg";
import Image from "next/image";
export interface IAuthLayoutProps {
  children: any;
}

export default function AuthLayout(props: IAuthLayoutProps) {
  return (
    <>
      <div className=" grid md:grid-cols-2 md:w-[50rem] mx-auto md:shadow-2xl md:rounded-lg md:h-[30rem] mt-10">
        <div className="py-4  md:overflow-y-scroll  ">{props.children}</div>
        <div className="relative hidden md:block">
          <Image src={bg} alt="bg" fill />
        </div>
      </div>
      <div className="hidden md:block text-textGrey text-xs mx-auto w-[15rem]  mt-20 ">
        By signing up, you agree with the{" "}
        <a className="underline decoration-solid" href="">
          Terms of Use
        </a>{" "}
        & <a className="underline decoration-solid">Privacy Policy</a>
      </div>
    </>
  );
}

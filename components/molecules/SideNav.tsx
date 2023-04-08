import * as React from "react";
import { TfiClose as CloseBtn } from "react-icons/tfi";
import { motion } from "framer-motion";
import Image from "next/image";
import userImage from "../../assets/navbar/user.png";
import { CiSettings as SettingsIcon } from "react-icons/ci";
import { useRouter } from "next/router";
import { Button } from "../atoms/Button";
import { useSelector } from "react-redux";
import useAutoCapitalize from "@/hooks/useAutoCapitalize";
export interface ISideNavProps {}

export function SideNav(props: any) {
  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);
  console.log;
  const username = useAutoCapitalize(user.fullname);
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const items = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2 } },
  };
  return (
    <>
      {!props.setShowNav && (
        <motion.div
          initial={{ rotate: -180 }}
          animate={{
            rotate: 0,
            transition: {
              duration: 1,
            },
          }}
          exit={{ rotate: -180 }}
          className="fixed float-right m-4  "
        >
          <CloseBtn
            onClick={() => props.setShowSideNav(false)}
            // className="relative float-right m-5"
            size="1.2rem"
          />
        </motion.div>
      )}
      {/* {!user.fullname && (
        <div
          onClick={() => router.push("/auth/login")}
          className="w-[25%] m-5 h-10"
        >
          <Button
            disable={false}
            animate={false}
            loading={false}
            text="Login/Sign"
          ></Button>
        </div>
      )} */}
      <motion.div
        // variants={container}
        initial="hidden"
        animate="show"
        className=" mt-20 ml-1 "
      >
        {props.navItems.map((item: any) => {
          return (
            <motion.div
              className={` hover:border-l-4 hover:border-btnGreen cursor-pointer duration-150 ease-out mb-8 grid grid-cols-[3rem_6rem] px-2 ${
                item.route === router.pathname &&
                "border-l-4 border-btnGreen text-btnGreen"
              }`}
              variants={items}
              onClick={() => {
                router.push({
                  pathname: item.route,
                });
              }}
            >
              {item.icon}
              <div className="text-md">{item.name}</div>
            </motion.div>
          );
        })}
      </motion.div>
      <div
        onClick={() => {
          router.push("/settings");
        }}
        className=" w-full absolute bottom-[7rem] py-2 grid grid-cols-[3.5rem_5rem] cursor-pointer "
      >
        <div className="w-10 h-10 relative ml-1  rounded-full shadow-md border border-[white]">
          <Image
            className="rounded-full"
            src={user.imageUrl ? user.imageUrl : userImage}
            alt={"user"}
            fill
          />
        </div>
        <div className="">
          <h1 className="text-lg font-bold">
            {user.fullname ? username : "User"}
          </h1>
          <h4 className="text-sm">View profile</h4>
        </div>
        {/* <SettingsIcon size="1.5rem" className="mx-auto mt-2" /> */}
      </div>
      <hr className="border absolute bottom-[4rem] w-[90%] mx-[5%]" />
    </>
  );
}

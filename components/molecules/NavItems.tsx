import * as React from "react";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
export function NavItems(props: any) {
  const router = useRouter();
  return (
    <div className="">
      <div className="hidden lg:grid grid-cols-[auto_auto_auto_auto_]  mt-[1rem] ">
        {props.navItems.map((item: any) => (
          <div
            onClick={() => {
              router.push({
                pathname: item.route,
              });
            }}
            className={`px-2 hover:border-l-4 hover:border-btnGreen cursor-pointer duration-150 ease-out text-md font-inter  ${
              item.route === router.pathname &&
              "border-l-4 border-btnGreen text-btnGreen"
            }`}
          >
            {item.name}
          </div>
        ))}
      </div>
      {!props.showSideNav && (
        <motion.div
          className={`lg:hidden`}
          onClick={() => props.setShowSideNav(true)}
        >
          <MenuIcon size="2rem" className="mt-4 ml-4" />
        </motion.div>
      )}
    </div>
  );
}

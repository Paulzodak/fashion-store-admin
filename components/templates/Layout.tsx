import * as React from "react";
import { NavItems } from "../molecules/NavItems";
import { NavUtility } from "../molecules/NavUtility";
import { CiMail as MailIcon } from "react-icons/ci";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SideNav } from "../molecules/SideNav";
import { AnimatePresence } from "framer-motion";
import { BsCart3 as ProductIcon } from "react-icons/bs";
import { RiSettingsLine as SettingsIcon } from "react-icons/ri";
import { FiUser as UserIcon } from "react-icons/fi";
import { MdOutlineDashboard as DashboardIcon } from "react-icons/md";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export interface ILayoutProps {}
export function Layout(props: any) {
  const router = useRouter();
  const { utilitySearch } = useSelector((state: any) => state.utilities);
  const [width, setWidth] = useState("4.5rem");
  const [showSideNav, setShowSideNav] = useState(false);
  const iconsize = "1.5rem";
  const navItems = [
    {
      name: "Dashboard",
      icon: <DashboardIcon size={iconsize} />,
      route: "/dashboard",
      query: "/dashboard",
    },
    {
      name: "Products",
      icon: <ProductIcon size={iconsize} color="inherit" />,
      route: "/products",
      query: "/products",
    },
    {
      name: "Orders",
      icon: <ProductIcon size={iconsize} />,
      route: "/orders",
      query: "/orders",
    },
    {
      name: "Clients",
      icon: <UserIcon size={iconsize} />,
      route: "/clients",
      query: "/clients",
    },
    {
      name: "Messages",
      icon: <SettingsIcon size={iconsize} />,
      route: "/messages",
      query: "/messages",
    },
  ];

  return (
    <div className="grid grid-cols-[5rem_auto]">
      <AnimatePresence>
        {
          <motion.div
            // initial={{ width: "3rem" }}
            onMouseEnter={() => setWidth("15rem")}
            onMouseLeave={() => setWidth("4.5rem")}
            animate={{
              // x: 0,
              width: width,
              // transition: { duration: 1 },
              transition: {
                type: "spring",
                // duration: 200,
                stiffness: 200,
                damping: 40,
                mass: 2,
              },
            }}
            exit={{
              x: -500,
              transition: {
                // duration: 200,
                type: "spring",
                stiffness: 1000,
                damping: 40,
                mass: 1,
              },
            }}
            className="relative  h-screen overflow-hidden bg-[white] z-10 border "
          >
            <SideNav navItems={navItems} />
          </motion.div>
        }
      </AnimatePresence>

      {props.children}
    </div>
  );
}

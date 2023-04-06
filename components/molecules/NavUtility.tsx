import * as React from "react";
import { Search } from "../atoms/Search";
import { MdOutlineShoppingCart as CartIcon } from "react-icons/md";
import { FaRegUser as UserIcon } from "react-icons/fa";
import userIcon from "../../assets/navbar/user.png";
import Image from "next/image";
import { Button } from "../atoms/Button";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export interface INavUtilityProps {}

export function NavUtility(props: any) {
  const { user } = useSelector((state: any) => state.user);
  console.log(user)
  const iconSize = "1.5rem";
  const router = useRouter();
  const searchRouteHandler = ({ show }: any) => {
    router.push("/search");
  };
  return (
    <div className=" grid grid-cols-[auto_auto] ">
      <div className=" w-[8rem] md:w-[15rem] mt-[0.6rem] ">
        <Search
          searchRouteHandler={searchRouteHandler}
          placeholder={"Search product..."}
        />
      </div>
      <div className=" grid grid-cols-[auto_auto_auto_auto] pt-[1rem]">
        <div className="relative">
          <CartIcon size={iconSize} />
          <button className="absolute top-3 left-3 text-xs bg-btnGreen px-[4px] rounded-full text-[white]">
            2
          </button>
        </div>
        <div>Cart</div>

        <div
          onClick={() => {
            router.push("/settings");
          }}
          className="w-7 h-7 relative mx-4  rounded-full shadow-md border border-[white] cursor-pointer"
        >
          <Image
            className="rounded-full"
            src={user.imageUrl ? user.imageUrl : userIcon}
            alt={"user"}
            fill
          />
        </div>
        {!user.fullname && (
          <div
            onClick={() => router.push("/auth/login")}
            className="hidden h-10 sm:block mt-[-0.3rem] "
          >
            <Button
              disable={false}
              animate={false}
              loading={false}
              text="Login/Signup"
            ></Button>
          </div>
        )}

        {/* <UserIcon size={iconSize} /> */}
      </div>
    </div>
  );
}

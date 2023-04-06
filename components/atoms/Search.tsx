import * as React from "react";
import { BiSearchAlt2 as SearchIcon } from "react-icons/bi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUtilitySearch } from "@/redux/slices/utilitySlice";
export interface ISearchProps {
  placeholder: string;
  searchRouteHandler: Function;
}

export function Search(props: ISearchProps) {
  const dispatch = useDispatch();
  const { utilitySearch } = useSelector((state: any) => state.utilities);
  const handler = (e: any) => {
    dispatch(setUtilitySearch(e.target.value));
  };
  return (
    <div className="relative">
      <input
        onChange={handler}
        onBlur={() => {
          props.searchRouteHandler(false);
        }}
        onFocus={() => {
          props.searchRouteHandler(true);
        }}
        className="border-borderGrey border-[2px] rounded-md h-10 w-full pl-8 sm:pl-10 placeholder:text-md truncate placeholder:text-textGrey text-textGrey "
        placeholder={props.placeholder}
      />
      <SearchIcon
        className="absolute top-[0.8rem] left-[0.5rem] font-inter"
        color="#BCC1CAFF"
        size="1rem"
      />
    </div>
  );
}

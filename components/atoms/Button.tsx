import * as React from "react";
import { motion } from "framer-motion";
export interface IButtonProps {
  text: String;
  animate: boolean;
  loading: boolean;
  disable: boolean;
}

export function Button(props: IButtonProps) {
  return (
    <button
      disabled={props.disable}
      className=" focus:ring-[0.3rem] hover:ring-[0.3rem] outline-none ring-teal-200/30 ring-offset-0 relative border h-full w-full bg-btnGreen text-[white] rounded-md px-2 sm:px-4 text-sm sm:text-sm md:text-md overflow-hidden z-0 "
    >
      <div className="relative z-[5]">{props.text}</div>
      {props.disable && (
        <div>
          {props.animate && (
            <motion.div
              initial={false}
              animate={{
                x: props.loading ? 0 : -400,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 100,
                  mass: 20,
                },
              }}
              // exit={{ x: 300 }}
              className="bg-[#8ae4c08e] h-[10rem] w-[25rem] absolute top-[-5rem] left-[-5rem] rounded-full z-[2]"
            ></motion.div>
          )}
        </div>
      )}
    </button>
  );
}

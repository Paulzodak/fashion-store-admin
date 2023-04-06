import * as React from "react";
import instagram1 from "../../../assets/home/instagram1.jpg";
import instagram2 from "../../../assets/home/instagram2.jpg";
import instagram3 from "../../../assets/home/instagram3.jpg";
import instagram4 from "../../../assets/home/instagram4.jpg";
import instagram5 from "../../../assets/home/instagram5.jpg";
import instagram6 from "../../../assets/home/instagram6.jpg";
import instagram7 from "../../../assets/home/instagram7.jpg";
import instagram8 from "../../../assets/home/instagram8.jpg";
import instagram9 from "../../../assets/home/instagram9.jpg";
import instagram10 from "../../../assets/home/instagram10.jpg";
import instagram11 from "../../../assets/home/instagram11.jpg";
import instagram12 from "../../../assets/home/instagram12.jpg";
import instagram13 from "../../../assets/home/instagram13.jpg";
import Image from "next/image";
export interface IInstagramProps {}

export function Instagram(props: IInstagramProps) {
  const pictures = [
    {
      src: instagram1,
    },
    {
      src: instagram2,
    },
    {
      src: instagram3,
    },
    {
      src: instagram4,
    },
    {
      src: instagram5,
    },
    {
      src: instagram6,
    },
    {
      src: instagram7,
    },
    {
      src: instagram8,
    },
    {
      src: instagram9,
    },
    {
      src: instagram10,
    },
    {
      src: instagram11,
    },
    {
      src: instagram12,
    },
  ];
  return (
    <div className="py-40">
      <h1 className="text-4xl text-center  font-bold">Instagram</h1>
      <div className="pt-8 grid grid-cols-[repeat(3,33%)] gap-y-1 gap-x-1 justify-between w-[20rem] mx-auto sm:grid-cols-[repeat(5,20%)] sm:w-[35rem] md:w-[40rem] md:grid-cols-[repeat(6,16%)] ">
        {pictures.map((item, index) => {
          return (
            <div className="w-[100%] relative border h-[5rem] sm:h-[6rem] md:h-[7rem]">
              <Image src={item.src} alt="" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
}

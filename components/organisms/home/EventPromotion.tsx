import * as React from "react";
import promotions1 from "../../../assets/home/promotions1.jpeg";
import promotions2 from "../../../assets/home/promotions2.jpeg";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
export interface IEventPromotionProps {}

export function EventPromotion(props: any) {
  const promotions = [
    {
      title: "Relaxing & Pampering",
      content: "",
      background: promotions1,
    },
    {
      title: "Smooth & Bright Skin",
      content: "",
      background: promotions2,
    },
  ];
  return (
    <div className=" py-10">
      <h1 className="text-4xl text-center  font-bold">Event promotion</h1>
      <div className="grid grid-cols-[repeat(1,95%)] gap-y-4 justify-between w-[20rem] mx-auto sm:grid-cols-[repeat(2,47%)] sm:w-[35rem] md:w-[40rem] ">
        {promotions.map((item: any, index: any) => {
          console.log(item.background);
          return (
            <div
              className={`py-10 px-4 h-[12rem] sm:h-[12rem] w-[100%] relative mt-8 `}
            >
              <Image
                src={item.background}
                alt=""
                fill
                className="rounded-lg absolute"
              />
              <div className="relative">
                <h1 className="text-xl font-bold w-[60%]">{item.title}</h1>
                <p className="text-sm w-[65%]">
                  Pariatur ad nisi ex tempor ea dolor
                </p>
                <div className="w-[6rem] h-[2rem]">
                  <Button
                    disable={false}
                    animate={false}
                    loading={false}
                    text="Explore"
                  ></Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

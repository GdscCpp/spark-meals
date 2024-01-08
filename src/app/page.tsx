"use client";

import Carousel from "@/lib/carousel/carousel";
import { CarouselCardProps } from "@/lib/carousel/carousel-card";
import Button, { BUTTON_VARIENTS } from "@/lib/input/button/button";

export default function Home() {
  const cards:CarouselCardProps[] = [
    {
      title: "Type",
      image: "https://placehold.co/330x440",
      buttonText: "Button",
    },
    {
      title: "Type",
      image: "https://placehold.co/330x440",
      buttonText: "Button",
    },
    {
      title: "Type",
      image: "https://placehold.co/330x440",
      buttonText: "Button",
    }
  ];
  return (
    <main className={`flex h-full bg-white`}>
      <div className={"w-full h-fit bg-secondary-100 flex flex-col"}>
        {/* in the future, we may want to change these to % of screen size for better accessability*/}
        <div className="w-full flex">
          <div className={"mt-[208px] ml-[100px] w-1/2"}>
            <h1 className={"text-primary-500 text-5xl mb-5 font-serif"}>Banner Title</h1>
            <p className={"text-primary-400 mb-10 font-sans"}>Banner description text.</p>
            <Button varient={BUTTON_VARIENTS.SECONDARY}>Button</Button>
          </div>
          <img
            src="https://placehold.co/700x700"
            alt="placeholder"
            width="700"
            height="700"
            className={"w-1/2"}
          />
        </div>
        <div className={"mt-[120px] w-full text-center h-screen"}>
          <h2 className={"text-primary-500 text-[40px] mb-[30px]"}>Our Meal Types</h2>
          <h3 className={"text-primary-400 text-[16px] font-sans mb-[41px]"}>Text for our meal types</h3>
          <Carousel cards={cards} />
        </div>
      </div>
    </main>
  );
}

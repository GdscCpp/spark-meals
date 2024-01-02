"use client";

import Button, { BUTTON_VARIENTS } from "@/lib/input/button";

export default function Home() {
  return (
    <main className={"flex min-h-screen bg-white"}>
      <div className={"w-full bg-secondary-100 mx-8 flex"}>
        {/* in the future, we may want to change these to % of screen size for better accessability*/}
        <div className={"mt-[208px] ml-[100px] w-1/2"}>
          <h1 className={"text-primary-500 text-5xl mb-5"}>Banner Title</h1>
          <p className={"text-primary-400 mb-10"}>Banner description text.</p>
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
    </main>
  );
}

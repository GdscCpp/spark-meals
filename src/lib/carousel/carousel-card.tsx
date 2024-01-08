import Button, { BUTTON_VARIENTS } from "../input/button/button";

export interface CarouselCardProps {
  title: string;
  image: string;
  buttonText: string;
}

export default function CarouselCard({
  title,
  image,
  buttonText,
}: CarouselCardProps) {
  return (
    <div className="flex flex-col relative justify-center overflow-hidden items-center mx-[30px]">
      <h1 className="absolute text-2xl z-10 bottom-[105px]">{title}</h1>
      <Button className="absolute text-2xl z-10 top-[355px]" varient={BUTTON_VARIENTS.SECONDARY}>{buttonText}</Button>
      <div>
        <img
          src={image}
          className="relative h-full bg-cover"
          alt="Tailwind Play"
        />
      </div>
    </div>
  );
}

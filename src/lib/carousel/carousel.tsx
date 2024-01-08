import { IconType } from "../assets/icons";
import IconButton from "../input/button/icon-button";
import CarouselCard, { CarouselCardProps } from "./carousel-card";

export interface CarouselProps {
  cards: CarouselCardProps[];
}

export default function Carousel({ cards }: CarouselProps) {
  return (
    <div className={"flex items-center justify-center"}>
      <IconButton icon={IconType.LeftChevron} />
      {cards.map((card, index) => {
        return (
          <CarouselCard
            key={index}
            title={card.title}
            image={card.image}
            buttonText={card.buttonText}
          />
        );
      })}
      <IconButton icon={IconType.RightChevron} />
    </div>
  );
}

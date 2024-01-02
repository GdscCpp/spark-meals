import { ReactSVG } from "react-svg";
import { IconType, iconsMap } from "./icons";

export interface IconProps {
  type: IconType;
  className?: string;
}

export default function Icon({ type, className }: IconProps) {
  return (
    <>
      <ReactSVG
        className={className}
        src={iconsMap[type]}
        width={"20px"}
        height={"20px"}
      />
    </>
  );
}

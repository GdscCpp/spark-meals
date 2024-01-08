import { ReactSVG } from "react-svg";
import { IconType, iconsMap } from "./icons";

export interface IconProps {
  type: IconType;
  className?: string;
  width?: string;
  height?: string;
}

export default function Icon({ type, className, width, height }: IconProps) {
  return (
    <>
      <ReactSVG
        className={className}
        src={iconsMap[type]}
        width={width || "20px"}
        height={height || "20px"}
      />
    </>
  );
}

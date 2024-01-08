import Icon from "@/lib/assets/icon";
import Button from "./button";
import { IconType } from "@/lib/assets/icons";

export interface IconButtonProps {
  icon: IconType;
  onClick?: () => void;
  className?: string;
  width?: string;
  height?: string;
}

export default function IconButton({
  icon,
  className,
  onClick,
  width,
  height,
}: IconButtonProps) {
  return (
    <Button className={className} onClick={onClick}>
      <Icon type={icon} width={width || "20px"} height={height || "20px"} />
    </Button>
  );
}

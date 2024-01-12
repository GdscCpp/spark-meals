import Icon from "./assets/icon";
import { IconType } from "./assets/icons";

export interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return <Icon className={className} type={IconType.Logo} />;
}

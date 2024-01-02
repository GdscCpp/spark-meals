import Icon from "./assets/icon";
import { IconType } from "./assets/icons";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className={"w-full p-[25px] flex"}>
      <div className={"flex justify-start ml-[90px]"}>
        <Icon type={IconType.Hambuger} />
      </div>
      {/** These percents are computed by taking the distance between each item and dividing it by the width of the resolution in figma */}
      <div className={"ml-[42%] flex justify-center mr-[29%]"}>
        <Logo />
      </div>
      <div className={"flex justify-end"}>
        {/** TODO: Add login/signup text if not logged in with firebase */}
        <Icon className={"mr-5"} type={IconType.Account} />
        <Icon type={IconType.Cart} />
      </div>
    </div>
  );
}

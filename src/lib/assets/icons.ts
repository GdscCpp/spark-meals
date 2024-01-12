import logo from "@public/logo.svg";
import hamburger from "@assets/hamburger.svg";
import account from "@assets/account.svg";
import cart from "@assets/cart.svg";
import leftChevron from "@assets/chevron-left.svg";
import rightChevron from "@assets/chevron-right.svg";

export const enum IconType {
  Logo,
  Hambuger,
  Account,
  Cart,
  LeftChevron,
  RightChevron,
}

export const iconsMap: Record<IconType, string> = {
  [IconType.Logo]: logo.src,
  [IconType.Hambuger]: hamburger.src,
  [IconType.Account]: account.src,
  [IconType.Cart]: cart.src,
  [IconType.LeftChevron]: leftChevron.src,
  [IconType.RightChevron]: rightChevron.src,
};

export interface ButtonProps {
  varient?: string;
  children?: React.ReactNode;
}

// we might need to move this into seperate functions for getting border, font, fill etc later but for now this is fine
export enum BUTTON_VARIENTS {
  SECONDARY = "bg-secondary-500 flex rounded-lg p-5 w-[160px] flex justify-center text-white",
}

export default function Button({ varient, children }: ButtonProps) {
  return (
    <>
      <button className={varient}>{children}</button>
    </>
  );
}

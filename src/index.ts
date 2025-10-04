export type TailwindUtility =
  | "flex"
  | "block"
  | "hidden"
  | "text-center"
  | "bg-blue-500"
  | string;

export const twClassName = (...inputs: TailwindUtility[]): string => {
  return inputs.join(" ");
};

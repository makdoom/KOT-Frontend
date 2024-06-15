import { HTMLInputTypeAttribute } from "react";

export type ControlsType = {
  id: string;
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  autoFocus: boolean;
  value: unknown;
  maxLength: number;
};

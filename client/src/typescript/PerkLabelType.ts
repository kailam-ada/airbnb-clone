import { ChangeEventHandler } from "react";

export type PerkLabelType = {
    name: string;
    icon: () => JSX.Element;
    checked: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    description: string;
  }
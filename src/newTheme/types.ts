import { tokens } from "./theme";

export type SchoolThemes = keyof typeof tokens;

export enum AvailableSchoolThemes {
  DEFAULT = "ade",
  ESD = "esd",
  ESP = "esp",
  ADE = "ade",
}

export type VariantComponent =
  | "contained"
  | "outlined"
  | "text"
  | "ghost"
  | "soft";

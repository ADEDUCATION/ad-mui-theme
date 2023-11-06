import { tokens } from "./theme";
import primitives from "../tokens/primitives.json";

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

export type AllSizes = keyof typeof primitives;

export type Sizes = Extract<AllSizes, "xs" | "sm" | "md" | "lg" | "xl">;

export type CompactSizes = Extract<AllSizes, "sm" | "md" | "lg">;

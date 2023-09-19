import { tokens } from "./theme";

export type AvailableSchoolTheme = keyof typeof tokens;

export enum SchoolTheme {
  DEFAULT = "DEFAULT",
}

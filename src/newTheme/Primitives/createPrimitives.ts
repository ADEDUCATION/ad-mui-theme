import { convertPxToRem } from "../utils";
import primitives from "../../tokens/primitives.json";

const createPrimitives = () => {
  let newPrimitives = {};

  Object.entries(primitives).map(([key, value]) => {
    newPrimitives = {
      ...newPrimitives,
      [key]: convertPxToRem(value.$value.toString()),
    };
  });

  return newPrimitives;
};

export default createPrimitives;

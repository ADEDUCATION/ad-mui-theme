export function convertPxToRem(pxValue: string, baseFontSize: number = 16): string {
  const px = parseFloat(pxValue);
  const rem = px / baseFontSize;
  return `${rem.toFixed(4)}rem`;
}

export const calculeF = (X: number, Y: number): number => {
  X = X ** 3;
  Y = Y ** 4;

  Y = 2 * Y;

  const result = Math.sqrt(X + Y);
  return result;
};

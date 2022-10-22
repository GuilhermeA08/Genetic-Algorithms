import { Pair } from "@src/types/Pair";
/**
 * Calcula a aptidão do gene
 * @param gene Gene que sera avaliado
 * @returns Resultado da avaliação
 */
export const calculeF = (gene: Pair): number => {
  let geneX, geneY;
  geneX = gene.X ** 3;
  geneY = gene.Y ** 4;

  geneY = 2 * geneY;

  const result = Math.sqrt(geneX + geneY);
  return result;
};

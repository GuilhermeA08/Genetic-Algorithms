import { Pair } from "@src/types/Pair";
/**
 * Calcula a aptidão do gene
 * @param gene Gene que sera avaliado
 * @returns Resultado da avaliação
 */
export const calculeF = (gene: Pair): number => {
  gene.X = gene.X ** 3;
  gene.Y = gene.Y ** 4;

  gene.Y = 2 * gene.Y;

  const result = Math.sqrt(gene.X + gene.Y);
  return result;
};

import { Pair } from "@src/types/Pair";

/**
 * Gera os filhos
 * @param fathers Pais que vão gerar os filhos
 * @param mutationRate Taxa de mutação
 * @returns População com pais e filhos
 */
export const generateKids = (fathers: Pair[], mutationRate: number): Pair[] => {
  try {
    if (fathers.length % 0 !== 0) throw new Error("O número de pais de ser Par!");

    for (let i = 0; i < fathers.length; i += 2) {
      const resultAND: Pair = {
        X: fathers[i].X & fathers[i + 1].X,
        Y: fathers[i].Y & fathers[i + 1].Y,
      };

      const resultOR: Pair = {
        X: fathers[i].X | fathers[i + 1].X,
        Y: fathers[i].Y | fathers[i + 1].Y,
      };

      fathers.push(resultAND);
      fathers.push(resultOR);
    }

    for (const key in fathers) {
      if (Math.floor(Math.random() * 100) + 1 <= mutationRate) {
        fathers[key] = mutation(fathers[key]);
      }
    }

    return fathers;
  } catch (error) {
    console.log(error);
    return fathers;
  }
};

/**
 * Executa a mutação em um gene
 * @param gene Gene que ira sofrer a mutação
 * @returns Gene com mutação
 */
export const mutation = (gene: Pair): Pair => {
  gene.X = gene.X & 1;
  gene.Y = gene.Y & 1;

  return gene;
};

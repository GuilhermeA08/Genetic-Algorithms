import { Pair } from "@src/types/Pair";

/**
 * Gera os filhos
 * @param fathers Pais que vão gerar os filhos
 * @param mutationRate Taxa de mutação
 * @returns População com pais e filhos
 */
export const generateKids = async (fathers: Pair[], mutationRate: number) => {
  try {
    if (fathers.length % 2 !== 0) throw new Error("O número de pais de ser Par!");

    const length = fathers.length;

    for (let i = 0; i < length; i += 2) {
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
        await mutation(fathers[key]);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

/**
 * Executa a mutação em um gene
 * @param gene Gene que ira sofrer a mutação
 * @returns Gene com mutação
 */
export const mutation = (gene: Pair) => {
  gene.X = gene.X & Math.floor(Math.random() * 8);
  gene.Y = gene.Y & Math.floor(Math.random() * 8);

};

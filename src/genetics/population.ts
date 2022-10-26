import { Pair } from "@src/types/Pair";
import { calculeF } from "../utils/math";

/**
 * Gera população inicial
 * @param numberPopulation Quantidade de indivíduos na População inicial
 * @returns População - array de Pair
 */
export const generatePopulation = async (numberPopulation: number): Promise<Pair[]> => {
  const pairs: Pair[] = [];

  for (let index = 0; index < numberPopulation; index++) {
    pairs[index] = {
      X: Math.floor(Math.random() * 8),
      Y: Math.floor(Math.random() * 8),
    };
  }

  return pairs;
};

export const populationRating = async (population: Pair[]) => {
  //Calculando a aptidão de cada gene
  population.forEach((gene) => {
    gene.aptitude = calculeF(gene);
  });

  //Calculando a probabilidade de cada gene

  //Divisor
  let divider = 0;
  for (let i = 0; i < population.length; i++) {
    if (population[i].aptitude !== 0) divider += 1 / population[i].aptitude!;
  }

  population.forEach((gene) => {
    if (gene.aptitude !== 0) gene.probability = 1 / gene.aptitude! / divider;
    else gene.probability = 0;
  });
};

export const selectGenes = async (genes: Pair[]) => {
  sortPopulation(genes);

  let length = genes.length / 2;
  let newPopulation: Pair[] = [];

  for (let index = 0; index < length; index++) {
    const probability = Math.floor(Math.random() * 101);
    for (let gene of genes) {
      if (probability < gene.probability!) {
        newPopulation.push(gene);
        break;
      }
    }
  }

  genes = newPopulation;
};

export const sortPopulation = (population: Pair[]) => {
  population.sort((a, b) => b.probability! - a.probability!);
};

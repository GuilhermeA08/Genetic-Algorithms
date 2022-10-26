import { generateKids } from "./genetics/kids";
import { generatePopulation, populationRating, selectGenes } from "./genetics/population";
// import { Pair } from "./types/Pair";
// import { calculeF } from "./utils/math";

(async () => {
  let population = await generatePopulation(4);


let breakCondition = false;


  await populationRating(population);
  console.log("População Inicial");
  console.log(population);


while (breakCondition == false) {
  selectGenes(population);
  console.log("Genes Selecionados");
  console.log(population);

  console.log("Filhos Gerados");
  generateKids(population, 25);
  populationRating(population);
  console.log(population);

  for (let i = 0; i < population.length; i++) {
    if (population[i].X == 0 && population[i].Y == 0) {
      breakCondition = true;
    }
  }

  if (breakCondition == false) {
    console.log("\nRetorne para a seleção de indivíduos.\n");
  }
}

console.log("\nO indivíduo satisfaz os requerimentos de parada.\n");

// let population = generatePopulation(4);

// populationRating(population);
// console.log("População Inicial");
// console.log(population);

// selectGenes(population);

// console.log("Genes Selecionados");
// console.log(population);

// console.log("Filhos Gerados");
// generateKids(population, 25);
// populationRating(population);
// console.log(population);



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

  while(breakCondition == false) {
    for(let i = 0; i < 4; i++) {
      if(population[i].X == 0 && population[i].Y == 0) {
        breakCondition = true;
      }
    }
    if(breakCondition == false) {
      await selectGenes(population);
      console.log("Genes Selecionados");
      console.log(population);
      
      console.log("Filhos Gerados");
      await generateKids(population, 10);
      await populationRating(population);
      console.log(population);
      
      console.log("O indivíduo satisfaz os requerimentos de desempenho.");
    } else {
      console.log("Retorne para a seleção de indivíduos.")
    }
  }
})();

// let teste: Pair = { X: 0, Y: 0 };
// for (let i = 0; i < 8; i++) {
//   teste.X = i;
//   for (let j = 0; j < 8; j++) {
//     teste.Y = j;

//     console.log(`F[${i}][${j}] = ` + calculeF(teste));
//   }
// }

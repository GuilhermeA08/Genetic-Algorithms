import { generateKids } from "./genetics/kids";
import { generatePopulation, populationRating, selectGenes } from "./genetics/population";

let population = generatePopulation(4);

console.clear();

populationRating(population);
console.log("População Inicial");
console.log(population);

selectGenes(population);
console.log("Genes Selecionados");
console.log(population);

console.log("Filhos Gerados");
generateKids(population, 10);
populationRating(population);
console.log(population);

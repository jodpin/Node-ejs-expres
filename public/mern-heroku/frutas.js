const frutas = ["banana", "banana", "pera", "banana"];
const dinero = 1000;
// cuando necesitamos exportar mas de una
// funcion o variable lo hacemos con un objeto
module.exports = {
  frutas,
  dinero,
};

// otra opcion
// module.exports = {
//   frutas: frutas,
// dinero: dinero
// }

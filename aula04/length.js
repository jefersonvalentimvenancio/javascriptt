//o length mostra o tamanho ou a quantidade de elementos de um array


const myArray = Array.from(
  { length: Math.floor(Math.random() * 500) },
  (_, i) => i
);
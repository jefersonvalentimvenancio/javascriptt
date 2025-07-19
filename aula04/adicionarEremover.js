let frutas = ['maça', 'pera', 'uva'];
console.log('Meu array inicial: ', frutas);

// PUSH - Adiciona um elemento no final do array
frutas.push('laranja');
console.log('Array após o push: ', frutas);

// POP - remover um elemento do final do array
let ultimaFruta = frutas.pop();
console.log('Array após o pop: ', frutas);
console.log('Fruta Removida: ', ultimaFruta);

// UNSHIFT - Adiciona um elemento no ininio do array
frutas.unshift('morango');
console.log('Array após o unshift: ', frutas);

// SHIFT - remover um elemento do inicio do array
let primeiraFruta = frutas.shift();
console.log('Array após o shift: ', frutas);
console.log('Fruta Removida: ', primeiraFruta);



// 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsListt = [32, 54, 21, 64, 75, 43];

const puntosDeLista = [...pointsListt];
console.log(puntosDeLista);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toy4 = {...toy1};
console.log(toy4);

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const juntos = [...pointsList, pointsLis2];
console.log(juntos);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const toyFinal = {...toy, ...toyUpdate};
console.log(toyFinal);

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const variosColores = [...colors];
variosColores.splice(1,1);
console.log(colors);
console.log(variosColores);
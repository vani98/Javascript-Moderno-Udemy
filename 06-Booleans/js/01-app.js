const boolean1 = true;
const boolean2 = false;
// colocarlos en los strings no asigna un valor similar
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

console.log(boolean1 == boolean2);
console.log(boolean1 === boolean2);

const boolean4 = new Boolean(true);
console.log(typeof(boolean4));
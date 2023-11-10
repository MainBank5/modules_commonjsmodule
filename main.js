//when importing to your main file ensure the varaible name const is similar to the name of 
//what you're importing

/*const message = require('./utili');

//console.log(message);
console.log(message.text);*/

//const capitilizeWords = require('./utili')

//console.log(capitilizeWords('eliud world'))

//when importing multiples you can destrcuture 
const {capitilizeWords, addDollarSign} = require ('./utili');

console.log(capitilizeWords('eliud world'));

console.log(addDollarSign(100));

//exporting/importing a class
const Person = require('./person')

const person1 = new Person("John", 20);
person1.greet();


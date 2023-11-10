/*const message = {
    id: 1,
    text: 'Hello World',
};

module.exports = message;*/

function capitilizeWords (str) {
    return str
    .toLowerCase()
    .split(' ')//split method returns a string
    .map((word)=> word[0].toUpperCase() + word.slice(1)) //you can use .substring() in place of splice
    .join(' ')
}

function addDollarSign (amount) {
    return `$${amount}`
}

//module.exports = capitilizeWords; //dont execute the function just yet ()

//the above is used to export just one function. to expoer multiple function we use{}

module.exports = {capitilizeWords, addDollarSign,};
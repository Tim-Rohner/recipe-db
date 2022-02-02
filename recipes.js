/*const foodArray = ['Pizza', 'Burger', 'Salad', 'Doener', 'Pasta', 'Halloumi'];

const randomFood = () => {
    console.log(foodArray[Math.floor(Math.random()*6)])
}

randomFood()
*/
const fs = require('./db-recipes.json') //needed to read JSON with node, assigns it to fs

var randomProperty = function (fs) {
    var keys = Object.keys(fs);
    return fs[keys[keys.length * Math.random() << 0]].name;
};

console.log('Your recipe for tonight is:\n \n'+ randomProperty(fs) +"\n\nalternatively, we offer \n \n"+ randomProperty(fs)+"\n \n")


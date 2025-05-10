console.log('Hello World!');

let variable = 15;
variable = 'str';
variable = false;

const console = 15;

const randomNum = Math.random();

const userName = 'Feri';

if (userName){
    console.log('Felhasználónév:', userName );
}else{
    console.log('Nincs felhasználónév')
}

const values = ['red','blue', 0 , false, {}, null];

for(let i=0; i < values.length; i++){
    console.log(values[i]);
}

for (const index in values){
    if (index % 2 == 1) {
        console.log(values[index]);
    }
}

for (const value of values){
    console.log(value);
}
//tranzakcios metodusok: nap, filter
const exchangeRates = [ 235, 435, 324, 465, 322, 432, 234];

//egyes honapokban hanz eurot er 1500Ft?
const euros = exchangeRates.map((rate)=> 1500 / rate);
console.log(euros);

//milyen 400Ft alatti arfolyamok voltak?
const below400 = exchangeRates.filter((rate) => rate < 400);
console.log(below400);

//fuggveny
function greet(name){
    console.log('Hello', name);
}

greet('Béla');

function square(num){
    return num * num;
}

console.log(square(2));

const person = {
    name : 'Jhon',
    age: 22,
    active: true,
    dogs: ['Morzsi', 'Feri'],
    greet: function(){
        console.log('Hello', this.name)
    }
}

person.greet();

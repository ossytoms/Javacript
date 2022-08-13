//DESCTRUCTING AN ARRAY

const alphabet = ['a','b','c','d','e']
const numbers = ['1','2','3','4','5','6','7','8','9']

const newArray = [...alphabet, ...numbers]


//Desctruct variables from a function

function sumAndMultiply(a,b,division){
    return [a+b, a*b, a/b]
}

const [sum, multiply, division = 'no division'] = sumAndMultiply(2,3)

console.log(sum)
console.log(multiply)
console.log(division)

//Destructing an object

const personOne = {
    name: 'John',
    age: 34,
    address:{
        city: 'Washington',
        state: 'DC'
    }
}

const personTwo = {
    age: 30,
}

const { name: firstName = 'Tom', age, favouriteFood = 'Rice', address: { state }, ...rest } = personOne

console.log(firstName, age, favouriteFood, state, rest)


//Combining two objects: If there is a value for a property this will replace the previous property
const personThree = { ...personOne, ...personTwo }
console.log(personThree)


//Destructing an object with a function 

printUser(personOne)

function printUser({ name, age, favouriteFood = 'Watermelon' }) {
    console.log(`Name  is: ${name}. Age is: ${age}. Food is ${favouriteFood }`)
}

//Lebeling loops 

loop1: for(var i = 0; i < 4; i++){
    loop2: for(var j = 0; j < 2; j++){
        if(i === 1){
            continue loop1;
        }
    }
}

//Make an objects properties unchangeable

const object = Object.freeze ({
    firstName: 'John',
    age: 34,
    address: Object.freeze({
        street: 'John Street',
        number: 24
    })
})

//Map an object 

const CURRENCY_MAP = new Map([
    ['United States', 'USD'],
    ['India', 'Rupee']
])

CURRENCY_MAP.set('Sweden', 'SEK')

console.log(CURRENCY_MAP.get('Sweden'))

//Create a set of an array

const uniqueNumbers = [1, 23, 23, 345]
const set = new Set(uniqueNumbers)
set.delete(1)
console.log(set.has(1))
console.log(set)


//Measure the time for a loop to run

console.time('Timer')
for(var i = 0; i < 10000; i++){

}
console.timeEnd('Timer')


//Console assert, instead of checking with a statement, we check within the Console
var x = 1
console.assert(x === 0, 'X is not 0')

//Log out a table from an object (Only works in browser)

console.table(object)
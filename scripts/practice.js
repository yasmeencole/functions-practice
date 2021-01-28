// // This is for practicing functions

// // Practice: Age in Dog Years, persons age divided by 7

// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7

//     return ageInDogYears
// }
// const dogAge = calculateAgeInDogYears(22)
// console.log(dogAge)

// // Practice: Best in Show

// const dogBreed = (favoriteBreedOfDog) => {
//     const myFavoriteDog = favoriteBreedOfDog

//     if (myFavoriteDog === "schnauzer")
//     return `My favorite dog breed is ${favoriteBreedOfDog}.`

//     if (myFavoriteDog === "meow")
//     return `I like cats.`

//     else
//     return `When it comes to pets, my favorite dog breed is a ${favoriteBreedOfDog}.`
// }

// const myFavoriteDog = dogBreed("meow")
// console.log(myFavoriteDog);

// // Practice: Addition

// const add = (num1, num2, num3) => {
//     const numsAddedTogether = num1 + num2 + num3

//     return numsAddedTogether
// }

// const sumOfNumbers = add(17, 4, 11)
// console.log(sumOfNumbers)

// // Practice: Self-Driving Cars

// const go = (direction, speed) => {
//     if (speed >75) {
//         console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`)
//     }
//     else
//     console.log(`The car is moving ${direction} at ${speed} mph.`)
// }

// go("forwards", 45);
// go("backwards", 8);
// go("moving in circles", 12);
// go("forwards", 105);

// // Practice: Evens or Odds

// let arrayOfNums = [8, 7, 14, 29, 74, 49]

// const evenOrOdd = (number) => {
//         if (number % 2 === 0)
//             return `Even`

//         else
//             return `Odd`
// }
// const isItEvenOrOdd = evenOrOdd(0)
// console.log(isItEvenOrOdd)

// // for (const numObj of arrayOfNums) {
// //         console.log(arrayOfNums.slice())
// // }

// // Practice: Double Functions
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
const startsWithK = (letter) => {
    const allKWords = letter

    if (letter === "k")
    return words.startsWith()
}

console.log(allKWords)
/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */


/*
    Invoke the filtering function and store its return value
 */


/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


console.log("You're doing great!");
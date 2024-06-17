// // Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }



// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);



// const names = []
// const eventNames = []

// function writeCards(names,eventNames) {
//     const cards = [];
//     for (let i = 0; i < names.length; i++) {
//         cards = [...names, `Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`]
//     }
//     return cards;
// }
// const result = writeCards(names,eventNames);
// console.log(result);




//assignment 1
const names = []
const eventNames = []

function writeCards(names,eventNames) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${eventNames} gift!`)
    }
    return cards;
}
const result = writeCards(names,eventNames);
console.log(result);

//assignment 2
function countDown(posInt) {
    while (posInt >= 0) {
        console.log(posInt);
        posInt--;
    }
}
// //1
// for(let i = 1; i < 11; i++) {
//     console.log(i);
// }
// //2
// for(let i = 1; i < 11; i++) {

//     if(i % 2 === 0) {
//     console.log(`${i}- парне`)
// }

// else {
//        console.log(`${i}- Heпарне`)
// }
// }
//3
// for(let i = 20; i < 29; i++) {
// console.log(i);
// }
// //4

       

let charactername = '';

do {
    charactername = prompt('Ваш улюблений герой', '');
console.log('Ваш улюблений герой :', charactername);
} while (charactername.length < 6);

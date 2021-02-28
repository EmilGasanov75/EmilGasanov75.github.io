// //1

// function hello1(a) {
//     console.log(a);
// } 

// hello1('Hello Js');

// //2

// function hello2(_name) {
//     console.log(`Hello, ${_name}`);
// } 

// hello2(`Vasya`);

// //3

// function mul(_n, _m) {
//     console.log(`Сума ${_m} і ${_n} - ${_m + _n}`);
//     console.log(`Різниця ${_m} і ${_n} - ${_m - _n}`);
//     console.log(`Добуток ${_m} і ${_n} - ${_m * _n}`);
// } 

// mul(12, 12);

// //4

// const myNewArrowFunction = (..._rest) => {
//       console.log(_rest)
// }

// myNewArrowFunction(1, 2, 3);
// // myNewArrowFunction(100, 200, 300, 400, 500);
// // myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

//5

    const myAverageScoreMassive = [100, 75, 81, 96] 

for(const _element of myAverageScoreMassive) {
const total = myAverageScoreMassive[0] + myAverageScoreMassive[1] + myAverageScoreMassive[2] +myAverageScoreMassive[3];
console.log(total / myAverageScoreMassive.length)
}

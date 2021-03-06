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



 function MyAverageScore() {



     for (const _i of array) {
         const total = array[0] + array[1] + array[2] + array[3]
         const MyScore = total / array.length;
         if (MyScore >= 91 && MyScore <= 100) {
             console.log('Your Average score is A')
         }

         if (MyScore > 80 && MyScore <= 90) {
             console.log('Your Average score is B')
         }

         if (MyScore >= 71 && MyScore <= 80) {
             console.log('Your Average score is C')
         }

         if (MyScore <= 70) {
             console.log('Your Average score is D')
         }

     }

 }
 MyAverageScore(array = [100, 96, 81, 75])
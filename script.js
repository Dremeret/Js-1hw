

// let age = 13;
// console.log(age);



// var name = 'Dimooon';
// console.log(name);


// var isStudent = false;
// console.log(isStudent);


// var myString =
//   'Найкраща помста — величезний успіх. Френк Сінатра';
// console.log(myString);


// let myNumber = 767;
// myNumber += 10;

// console.log(myNumber);



// var myNull = null;
// console.log(myNull);



// var yourName = prompt('Введіть своє імя:');

// alert('Привіт, ' + yourName + '!');



// var confirm = confirm('Підтвердіть:');

// if (confirm == true) {
//   alert('Дякую за підтвердження!');
// } else {
//   alert('Дію відмінено!');
// }

 

// alert('Дія небезпечна!');
// var confirm = confirm('Підтвердіть:');

// if (confirm == true) {
//   alert('Дякую за підтвердження!');
// } else {
//   alert('Дію відмінено!');
// }


//  Home work2

// let celsius = 10;
// let farenheit = celsius * 1.8 + 32 ;
// console.log(farenheit);


// let monthDays = 31;
// let  hoursMonth = monthDays *24 ;
// let minuteMonth = hoursMonth*60 ;
// console.log( hoursMonth);
// console.log(minuteMonth);


// let healt =100 ;
// let energy = 100;

// console.log(healt-23);
// console.log(energy-38);


// let sum = 1000;
// let discount = sum *10 /100 ;
// console.log(sum);


// let number = 31.916;
// console.log(Math.floor(number));


// let num = "3.8";
// console.log(parseFloat(num));


// let string = "15";
// console.log(parseInt(string));


// let numberTwo = 46 ;
// console.log(Math.sqrt(numberTwo));


// HOME work 3



// let result = 5 + 5 + "5";
// console.log(result);
// console.log (typeof result);


// let email =  "dream.er03062006@gmail.com";
// console.log(email.includes("@"));
// console.log(email.length);


// let word1 = "My";
// let word2 = "name";
// let word3 = "is";
// let fullName = ` ${word1}  ${word2}   ${word3} Viktor `;
// console.log(fullName);






// hw4

// let input = document.querySelector("input").getAttribute("placeholder");
// let btn = document.querySelector("#btn") 
// btn.textContent = input ;


// let img = document.querySelector(".img")
// img.setAttribute("src"," https://images.pexels.com/photos/17683083/pexels-photo-17683083.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load")


// let a = document.querySelector(".a");
// let foto = document.querySelector(".foto");
// a.setAttribute("href","https://uk.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D1%96%D0%B2");
// foto.setAttribute("alt","LvivisUkraine");


// let list = document.querySelector("li");
// list.textContent= "Ukraine";



// hw5


// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function( ){
//  let input = document.querySelector(".input1").value;
//  let input2 = document.querySelector(".input2").value;

// if( input && input2){
//     console.log("Обидва поля заповнені");

// }
// else{
//     console.log(" Не всі поля заповнені");
// }

// });


  

// let btn2 = document.querySelector(".btn2");


// btn2.addEventListener("click",function(){
//     let input3 = document.querySelector(".input3")
//     let input4 = document.querySelector(".input4")
    
//     let input3Value = parseFloat(input3.value);
//     let input4Value = parseFloat(input4.value);

//     if(input3Value + input4Value > 10){
//      console.log(" Сума більше за 10")
//     }
//     else{ console.log(" Сума менше за 10")}
// })




// let btn3 = document.querySelector(".btn3");

// btn3.addEventListener("click", function(){
//     let perevirka = document.querySelector(".perevirka");
    
//     if(perevirka.ariaValueMax.includes("JavaScript")){
//       console.log("Текст містить слово JavaScript")
//     }
//     else{ console.log("Текст не містить слово JavaScript")}
// })



// let btn4 = document.querySelector(".btn4");
// btn4.addEventListener("click",function(){
//     let input5 = document.querySelector(".input5");
//     console.log("input5");
//     if(input5 > 10 && input5 < 20){
//         console.log("Число входить в діапазон від 10 до 20")
//     }
//     else{  console.log("Число не входить в діапазон від 10 до 20")};
// } )




// hw6


// let numbers = 0;



// let i = 1
//  while( i <=10){
//     console.log(i);
//     i++;
//  }



// for ( let i = 2 ;i <= 20; i++){
    

// if(i % 2 ){
// continue
// }


// console.log(i);



// };



// let num ;

// for(let i = 1 ; i <= 10; i++){
//   num = 7 * i ;
//   console.log(num);

// };




// let number = [1,2,3,4,5];
// let i = 0;
// while(i < number.length){
//    console.log(number[i]);
//    i++;
// }


// let array = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < array.length;i++){

//   console.log(array[i]);

// if(array[i] === 7){
//     break
//   }
// };



// hw7


// let arr = [1,2,3];
// arr.splice(1,1,10);
// console.log(arr);
// alert(arr);


// let fruits = ["Apple", "Orange", "Plum"];
// fruits[3] = "Lemon";
// console.log(fruits);

// let array = [1,2,3];
// for(let i = 0; i < arr2.length; i++){
   
// }



// let arr2 = [1,2,3,4,5];

// for(let i = 0; i < arr2.length; i++){
//    console.log(arr2[i])
// };


// let arr3 = ["12","142","362891","22","10"];
// for(let i = 0; i < arr3.length; i++){
//    if(arr3[i].length > 5){
//      console.log(arr3[i]);
     
//    }
// };


// let arr4 = [1,34,72,4,95,84,2,8,9,16];
 






// hw9

// const btn = document.querySelector(".btn") ;

// btn,addEventListener("click",   ()  => {
//     alert("Hello World")
// });

//  task2

// const inputValue = document.querySelector("#guessField");

// const pText = document.querySelector("#guessResult");

// const checkGuess =  () => {
//   let rndNumber = Math.floor(Math.random() * 99 + 1);
//   if(rndNumber ===  +inputValue.value){
//    pText.textContent = " Ви вгадали";
//   }
//   else{
//     pText.textContent = " Ви  не  вгадали";
//   }
// };


// task3
// let counter = 0

// document.addEventListener("click",()=>{
//   counter++;
//   console.log(`На сторінку натиснули ${counter}`)
// });

// task4

// const applyCallbackToEachElement = (arr,callback) => {
//  const arrayNumber = [];
//  for(const number of arr){
//     arrayNumber.push(callback(number));
//  }

// return arrayNumber;

// };

// const arr = [1,2,3,4,5];
// const squareCallback = (number) => {
//     return number ** 2
// };

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result);




// task5



const calculateDiscountedPrice = (price,discount,callback) => {
let discountPrice = price -  price /  discount ;
 callback(discountPrice);
};

const showDiscountedPrice = (discount) => {
    console.log( ` ваш товар коштує ${discount}  грн `)
} 


calculateDiscountedPrice(100,10,showDiscountedPrice);









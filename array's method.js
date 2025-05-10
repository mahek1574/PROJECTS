// array's all mothods

// pop method 

let array = ["mango", "banana", "lichi", "kiwi", "apple"];

console.log("array - " + array)

array.pop()

console.log("pop method  - "  + array);

// push method

array.push("graps")

console.log( "push method - "+array);

// shift method

array.shift();

console.log( "shift method - "+array);

// unshift method

array.unshift( "watermelon");

console.log ( "unshift method  - "+array);

// splice

array.splice(2,1,"kaju")
console.log( "splice method-  "+array);

// slice

let slice = array.slice(2,4)
console.log( "slice method - "+slice);

// new date()

let date = new Date().toLocaleTimeString();
console.log(date);

// math.floor()

let num = 7.9;
console.log(Math.floor(num));

// math.ceil()

let num1 = 7.9;
console.log(Math.ceil(num1));

// math.round

let num2 = 7.9
console.log(Math.round( num2 ));

// math.random ()

console.log(Math.floor(Math.random() * 5));

// nornal function()
function demo(){
    console.log("hello")
}
demo();

// arrow function()

 const para = () =>{
    console.log("hello how are you")
}
para()

// includes

let fruits = ["mango", "banana", "lichi", "kiwi"];

let includes = fruits.includes("mango");
let include1 = fruits.includes("dregon fruit");

console.log(fruits);
console.log(includes);
console.log(include1);

// sort()
let fruits1 = ["mango", "banana", "lichi", "kiwi", "apple"];
console.log( "array-" +fruits1)

fruits1.sort();
console.log("short method - " + fruits1);

// reverse

fruits1.reverse();
console.log( "reverse method -"+fruits1);

// reduce

let num3 = [90,78,89,67,56,34,67];
let demo1 = num3.reduce((a,b)=>a+b);

console.log(demo1);

// forEach() -- loop

let arr2 = ["apple","banana","kiwi"];
arr2.forEach((data, index) => console.log(index + 1 + " " + data));

// map method

let arrObj1 = [
  { movie: "KGF2", year: 2024 },
  { movie: "pushpa 2", year: 2019 },
  { movie: "bahubali", year:2013 },
  { movie: "krish", year: 2016 },
];

arrObj1.map((data, dataindex) => console.log(data.movie, data.year));


// filter()

let numbers  = [9,28,21,25,27,89,90];
let AA = numbers.filter((n, i) => n % 3 === 0);
console.log(AA);

// findindex()
let BB = [34,56,78,89,98,78,87,90,"56"];

let BB1 = BB.findIndex((ele, index) => ele > 70);

console.log(BB1);

// lenth

let employees = [
  {
    name: "Alice Smith",
    email: "alice@example.com",
    post: "Manager",
    salary: 75000,
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    post: "Developer",
    salary: 60000,
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    post: "Designer",
    salary: 50000,
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    post: "Analyst",
    salary: 65000,
  },
  {
    name: "Ethan Hunt",
    email: "ethan@example.com",
    post: "Director",
    salary: 90000,
  },
];  

console.log(employees.length);

// every

let num4 =[3,6,9,12,15];
let num5 = num4.every((ele,index)=> ele % 3===0);
console.log(num5);

// some

let num6 = [3,11,14,17,19];
let num7 = num6.some((ele,index)=>ele % 3 ===0);
console.log(num7);



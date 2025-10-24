const arr = [10,20,30,40];
let[a,b,c] = arr;
console.log(a);
console.log(c);


//swapping values
const arr2 = [100,30]


const student={
  name: "aryan",
  age: 19, 
  subjects:{
    sub1: "React",
    sub2: "Node"
  }
}

const {name, age, subjects} = student;
 
console.log(age);
console.log(name);
console.log(subjects.sub1)


//Spred opertaor: Its expands a iterable into individual values, generally used for copying array and merging or passing elemrnts to function
let arr3 = [1,2,3,4,5,6,7,8,9,10];

let arr4 = [1,2,22,...arr3];
console.log(arr4);





//rest operator : it collects multiple elemrnts into single elements

function add(...num){
  return num.reduce((a,b)=>a+b);

}

console.log(add(1,2,3,4,5,6,7,8));

function info(a, ...rest){
  console.log(a);
  console.log(...rest);
}

info("Hello", "Ankit", "Aryan");


//9835385670


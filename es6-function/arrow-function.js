// Statement syntax for the arrow function
var test = (x) => {
 return x * x;
};
console.log(test(10));

// Expression syntax of arrow function
var test = (x) => x*x;
 console.log(test(5));

 var user = {
   name: "Test name", 
   sayHi: () => {
     console.log(`Hi! I am ${this.name}`); // Will not work
   },
   sayHiAlt() {
    console.log(`Hi! I am ${this.name}`); 
   }
 };

 // Arrow function don'r bind the this keyword
 user.sayHi();
 user.sayHiAlt();

//1-
function callMe(){
    console.log("Hello This is ME!!")
}
callMe();
//2-
function ABC(a,b){
    var a=3;
    var b=4;
    var c=a+b;
    console.log(" sum of "+ a +" and "+ b +" is "+ c)
}
ABC();
//3-
var sum=(a,b)=>{
    var a=4;
    var b=5;
    var c=a+b;
    console.log(" sum of "+ a +" and "+ b +" is "+ c)

}
sum();
//4-
var x = 21;
        var girl = function () {
            console.log(x);
            var x = 20;
        };
        girl ();


  //5-
var x = 21;
girl ();
console.log(x)
function girl() {
console.log(x);
var x = 20;
};

//6-
var x = 21;
a();
b();
function a() {
x = 20;
console.log(x);
};
function b() {
x = 40;
console.log(x);
};
//7-
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  var number = 5;
  var result = factorial(number);
  console.log(result);

  //Day2-
  //1-
  

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));





  //2-
//   Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

//3-


var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//4-

const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")
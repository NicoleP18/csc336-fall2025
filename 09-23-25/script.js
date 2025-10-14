class Person{ 
    constructor(){
        this.name = this.name;
    }

    sayHello(howManyTimes){
        for (let i = 0; i < howManyTimes; i++){
            console.log("Hello, my name is" +this.name);
        }
        
    }


}
//instantiating an object from a class 
let nicole = new Person("Nicole");
nicole.sayHello(119);



let stringVersionOfNicole = JSON.stringify(nicole);
console.log(stringVersionOfNicole);

let nicoleObject = JSON.parse(stringVersionOfNicole);
console.group(nicoleObject.name);

console.log(localStorage.getitem("user- or whatever"));
localStorage.setItem("user - or whatever", "mike!", + Math.random)



//function buttonClicked(){
//    console.log("BUTTON CLICKED");
//  console.log(e);
// }

let myButton= document.querySelector("#myButton");
//myButton.addEventListener("click, buttonClicked")

myButton.addEventListener("click", (e)=> {
    console.log("BUTTONCLICKED");
    console.log(e);
})








const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
    

    //draw a filed rectangle
ctx.fillStyle = "#0d1816cc";
ctx.fillRect(50, 50, 100, 75);




console.log("day 04");
/*
if (condition) {
    // code to be executed if condition is ture
}else {
   // code to be executed if condition is false 
}
*/
//#1
let catchingBus=true;
if (catchingBus) {
    console.log("I will reach home on time");
}else {
    console.log("I will be late to reach home");
}
//#2
let age=5;
if(age>=18){
    console.log("You are Elegible to vote");
}else{
    console.log("You are not Elegible to vote");
}

//#3 //dependent else if
let score= 33;
if(score>=80){
    console.log("Grade A+");
}else if(score>=70){
    console.log("Grade A");
}else if(score>=60){
    console.log("Grade A-");
}else if(score>=50){
    console.log("Grade B");
}
else if(score>=40){
    console.log("Grade C");
}
else if(score<40){
    console.log("Grade Fail");
}

//4 :independent if 
let x = 0;
if(x===0){
    console.log(0)
}
if(x>=0){
    console.log("GRETER THAN ZERO")
}
if(x<=0){
    console.log("LESS THAN ZERO")
}

//5 : EARLY EXIT ,RECOMENDERD
let x = 0;
if(x===0){
    console.log(0)
}
else if(x>=0){
    console.log("GRETER THAN ZERO")
}
else if(x<=0){
    console.log("LESS THAN ZERO")
}

// 6 
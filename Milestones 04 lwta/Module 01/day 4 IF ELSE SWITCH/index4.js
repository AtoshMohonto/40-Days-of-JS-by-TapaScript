console.log("day 04");
/*
if (condition) {
    // code to be executed if condition is ture
}else {
   // code to be executed if condition is false 
}
*/
//tuirnary operator
let cBuz=false;
cBuz ? console.log("I will"):console.log("i won't")

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
let a = 0;
if(a===0){
    console.log(0)
}
if(a>=0){
    console.log("GRETER THAN ZERO")
}
if(a<=0){
    console.log("LESS THAN ZERO")
}

//5 : EARLY EXIT ,RECOMENDERD      if else
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

// 6 nested if else

if (true){
    console.log("6outer if")
    if(true){
        console.log("6inner if")
    }else{
        console.log("6inner else")
    }
}else{
    console.log("6outer else")
}

// 7 nested if else with variales
const condition = false
const innercondition = true
if (condition){
    console.log("7outer if")
    if(innercondition){
        console.log("7inner if")
    }else{
        console.log("7inner else")
    }
}else{
    console.log("7outer else")
}

///switch and case 27min
//multiple condition babsed on single value 

let position =10;
switch(position){
    case 1:
        console.log("print 1");
    break;
    case 2:
        console.log("print 2");
    break;
    case 3:
        console.log("print 3");
    break;
    case 4:
        console.log("print 4");
    break;
    default:
        console.log("nothing matched")
}

let day= 14;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
//switch jumps ,for too much condition  use switch 
let name = "John";//""
switch(name){
    case "John":
        console.log("Hello John");
        break;
    case "Jane":
        console.log("Hello Jane");
        break;
    case "Doe":
        console.log("Hello Doe");
        break;
    default:
        console.log("Hello Guest");
}

const city = "nilphamari";
switch(city) {
    case "nilphamari":
    case "dhaka":
    case "rj":
    console.log("bangladesh");
    break;
    case "delli":
        default:
            console.log("india");
}
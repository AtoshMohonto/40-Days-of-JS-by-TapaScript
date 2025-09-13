//Active Recall
// document.write("Atosh Mohonto");
// alart("Hello");
// console.log("Console");

// var x =5;
// let y=6;
// const z=7;
//console.log(x);

//new topic !
// let x=5; //number type= int
// let y=5.5;//mumber type = float
// let z="Atosh"; //String type
// let a=true; //Boolean type
// let n=null; //Null Type
// let u=undefined; //Undifined Type
// console.log(x,y,z,a,n,u,o);
/*
//symbol
let o=Symbol("Atosh");//Symbol type
console.log(o);//"symbol(Atosh)" dakabe console a
console.log(o.description); //Shudhu "Atosh" Value ta dakhabe
*/
//Undinfined
//let o; //Declared but not assigned /Undinfined
// console.log(o);
//alert(o);

/*
//let var const
 var x=3;
var x=4;//re-declare and reupdate
let u= 10;
u=20;//not re-declare but re-updated
const z=7;//not re-declare and not re-update 
*/
//Arthmatic Operators

// let count=1;
// count+=2;//count=count+2;
// console.log(count); //1+2=3 //Addition

// let sub=10;
// sub-=5;//sub=sub-5;
// console.log(sub); //10-5=5 //Subtraction 

// let mul=5;
// mul*=2;//mul=mul*2;
// console.log(mul); //5*2=10 //Multiplication

// let div=10;
// div/=2;//div=div/2;
// console.log(div); //10/2=5 //Division

// //conditional operator
// //{}->ke bole scope
// let b=10;
// if(b==20){
//     console.log("Hello");
// }
// else{
//     console.log("Galo");
// }

// let s="Halum";
// if(s=="Hnalum"){
//     console.log(s);
// }
// else{
//     console.log("else part");
// }
/*

//ambiguity[confused]
let n=20;
if(n==10){
    console.log(n+10);
}
else if(n==20){
    console.log("n is 20");  //ambiguity[confused] =upor er ta nay
}
else if(n== 20){
    console.log("n is 30");
}
else{
    console.log("Else part");
}
*/
/*
//Conparison Operators: == > < <= >=  
let num=100;
if(num > 10){
console.log("Grater than 10");
}
else if(num < 10){
    console.log("less than 10");
}
else{
    console.log("This is Else part!");
}
*/
/*
let n=10;
if(n>=50){
    console.log("N>=50"); //prothom takai nibe //ambiguity
}
else if(n<50){
    console.log("N<50");
}
else if(n>100){
    console.log("N>100");
}
else{
console.log("This is else part!");}
*/
/*
let 0=40;
if(o<=40){
    let a=5;
    let b=3;
    let result=a+b;
    console.log("The Result is"+result);
}
else if(o!=50){
    console.log("Not Equal");
}
else{
    console.log("Else");
}
*/

//logical Operator = And,Or,Not
let x=1;
let y=12;

if(x==10 && y==5){ //And
console.log("Nice!");
}
else{
    console.log("Bad!");
}
console.log ("day 5");
//for loop
// for(initialization; condition; increment/decrement){
//     //code block to be executed
// }
//example
for (let count=1; count <=5; count++ ) {
    console.log("count ", count);
}
///adding even numbers between 1 to 100
let sum=0;
for(let i=1; i<=100; i++){
        if(i%2==0){
            console.log("i",i);
            sum=sum+i;
            sum+=i;
        }
}
console.log("sum of even numbers between 1 to 100 is ", sum);
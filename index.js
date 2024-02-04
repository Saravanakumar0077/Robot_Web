a = "99.99";
a = parseFloat(a);
console.log(a,typeof a); //String to number convertion

//const age = 12; //Ternary operator
//const result = age>=18 ? "Eligible for voting" : "Not Eligible for voting";
//console.log(result);


//Arrow function
const greeting = ()=>{  //Variable used as a Function
    return "Hello Everyone!";
}
console.log(greeting());


//Method 1 (Ternary operator)
const myAvg = 90;
const result1 = myAvg>=90 ? "Grade A" : myAvg>=80 ? "Grade B" : "Grade C" 
console.log(result1);


//Method 2 (Loop)
const avg = 90;
if(avg>=90 && avg<=100){
    console.log("Grade A");
} else if(avg>=80 && avg<90){
    console.log("Grade B");
} else if(avg<80){
    console.log("Grade C");
} else{
    console.log("Enter your correct Marks");
}
console.log(avg);


let i =1;
while(i<=10){  //While loop
    console.log(i);
    i++;
}

let arr = []; //Array used for loop
for(let i=0;i<100;i++){
    arr.push(i);
}
console.log(arr);


//Tables
const n =6;
for(let i=1;i<=16;i++){
    const c =n*i;
    console.log(n + " * " + i + " = " + c);
}

//LCM Values
const no1 = 3;
const no2 = 6;
let max = no1>no2 ? no1 : no2; 

while(true){
    if(max%no1==0 && max%no2==0){
        let LCM = max;
        console.log(LCM);
        break;
    }
    max++;
    console.log(LCM); 
}

//HCF Value
const num1 = 30;
const num2 = 22;
let min = num1<num2 ? num1 : num2;
while(min>=2){
    if(num1%min==0 && num2%min==0){
        let HCF =min;
        console.log(HCF)
    }
    min--;
}


//Assesment - 5
const M = 12345;
const N = 65432;

if(Y===x || Y===X){
    let Result = M+N;
    console.log(Result);
}


























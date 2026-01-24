function checkEvenOdd(num){
    if(num%2==0) return "even";
    else return "odd";
}

console.log(checkEvenOdd(5))
console.log(checkEvenOdd(2))

const largeNumber=(a,b)=>{
    return a>b?a:b;
}
console.log("larger of 2 nos:",largeNumber(2,5))

const a=checkNumber(5);
console.log("check if num is +ve,-ve,0:",a)

function checkNumber(num){
    if(num>0) return "positive";
    else if(num===0) return "zero";
    else return "negative";
}

const sum=sumIfPositive(5,5)
console.log("sum of 2 +ve nos:", sum)
function sumIfPositive(a,b){
    if(a>0&&b>0){
        return a+b
    }
    return 0;
}


const isDivisible=num=>num%3===0 && num%5===0;
const isDivisibleNo=isDivisible(15);
console.log("isDivisible by 3 and 5 is:",isDivisibleNo)

const sumToNos=sumToN(2)
console.log("sum to n nos:",sumToNos)
function sumToN(n){
    return (n*(n + 1)) / 2;
}

function factorial(num){
    let result=1;
    for(let i=1;i<=num;i++){
        result*=i;
    }
    return result;
}

console.log("factorial is:",factorial(5))

console.log("count digits is:",countDigits(555))
function countDigits(num){
    let count=0;
    if(num===0) return 1;
    while(num>0){
        count++;
        num=Math.floor(num/10);
    }
    return count;
}

function reverseNo(num){
    let reverse=0;

    while(num>0){
        let lastDigit=num%10;
        reverse=reverse*10+lastDigit;
        num=Math.floor(num/10);
    }
    return reverse;
}

console.log("reverse no is:",reverseNo(12345))


const isPrime=checkPrime();
console.log("check if prime is:",isPrime(7))
function checkPrime(){
    let count=0;
    return function(n){
        count++;
        if(n<=1) return false;

        for(let i=2;i<n;i++) {
            if(n%i===0) return false;
        }

        console.log("prime checks done:", count);
        return true;
    }
}


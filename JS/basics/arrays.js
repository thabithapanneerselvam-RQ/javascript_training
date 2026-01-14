const arr=[1,2,3,4,5]

console.log("original array:",arr)
console.log("array length:",arr.length)
console.log("array indexof 5 is:",arr.indexOf(5))
console.log("array includes 2:",arr.includes(2))


console.log(arr.push(6))
console.log("push array:",arr)
console.log(arr.pop())
console.log("pop array:",arr)

console.log(arr.shift())
console.log("shift array:",arr)
console.log(arr.unshift(1))
console.log("unshift array:",arr)
console.log("array slice is:",arr.slice(2,4))
console.log("array:",arr)

console.log("array splice is:",arr.splice(2,4))
console.log("array:",arr)

arr.forEach(n=>console.log("using foreach:",n))
console.log("using map:",arr.map(n=>n+2))
console.log("using filter:",arr.filter(n=>n%2===0))
console.log("now the array is:",arr)
console.log("using reduce:",arr.reduce((acc, currentValue)=>acc+currentValue,0))



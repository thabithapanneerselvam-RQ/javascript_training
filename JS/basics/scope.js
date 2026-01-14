let x=10;

function add(x){
    //global scope
    console.log("add:", x+10);
    if(true){
        let names="thabitha";
        const subj="english"
        console.log(names)
        console.log(subj)
    }
}
//function scope example
console.log(x)

// block scope examples
// console.log(names)
// console.log(subj)

add(x)


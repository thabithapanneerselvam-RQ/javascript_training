const student={
    firstname: "thabitha",
    rollno: 57,
    subj: "english"
};

const values=Object.values(student);
const keys=Object.keys(student)

console.log("object keys:",keys);
console.log("object values:",values);

console.log("object entries:\n");
for(let [name, value] of Object.entries(student)){
    finalResult= name+" "+value;
    console.log(finalResult);
}

console.log("property access:",student.firstname, student["firstname"])

console.log("own property:", student.hasOwnProperty("rollno"))
console.log("own property:", student.hasOwnProperty("roll"))

Object.prototype.inheritedProp="i am inherited"

console.log(student.inheritedProp); 
console.log("inheritedProp:", "inheritedProp" in student)
console.log("inheritedProp in student using obj prototype:", student.hasOwnProperty("inheritedProp"));

const numbers=[1,2,3]

const newNumbers=[...numbers,4,5]
console.log(numbers);
console.log(newNumbers);
const [first,...restNnmbers]=[1,2,3,4,5]
console.log(first);
console.log(restNnmbers);   

const{name,...otherDetails}={name:"Tharaka",age:22,branch:"CSE"}
console.log(name);
console.log(otherDetails);

// const person={
//     name:"Tharaka",
//     age:22,
//     branch:"CSE"
// }

// const newperson={...person,dob:"03/11/2005"}
// console.log(person);
// console.log(newperson);
const key="email"
const email="tharak@gmail.com"

const person={
    [key]:email
}
console.log(person)
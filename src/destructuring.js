  let name1 = [undefined, "roach" , "pig" , "bike" ,"red"]


// const [a,b] = name
// const [a= "testing" ,b, , c] = name1;

const [a= "testing" ,b, , ...c] = name1;


console.log(a)
console.log(b)

console.log(c)



const person={

    name:{
        firstname:"vignesh",
        lastname:"s"
    },
    age:27,
    address:"bnksk"
}


// console.log(person)
// console.log(person.name)
// console.log(person.name.firstname)


const {name} = person
const {name:{firstname}} = person


console.log(firstname)


let z=10;
let q=20;

 [z,q] = [q,z]
console.log(z)
console.log(q)




const person1={

 firstname:"vignesh",
  lastname:"s",
    
    age:27,
    address:"bnksk"
}


// just we can pass the whole object but we can jsut destructe the valyues we need form it
function des({age , firstname}){


    return age + firstname;
}


des(person1)

console.log(des(person1))


const employee=[
    {name : "vicky", age:30},
{name : "s", age:68}

];


// [,{age}]=employee

[{age:name1},{age:name2}]=employee


console.log(name1)
console.log(name2)
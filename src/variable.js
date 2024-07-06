console.log("variables")

//Declaration

let age;

console.log(age)//undefined
 
//initialization

age=10;

console.log(age)//10


//Decalre and initialization 

let age1 = 40;
console.log(age1)


age1=90;
console.log(age1)


//let var const
//var not used 

let a = 10;
a=90;

const b =12 ;

//b=2;//cannot be changed const
// const b;// cannot be only decalred 


//Scope
  //same for let and const
    

let value = 10;
let test = 10;

if(true){
    test = 20;
    let value="inside block"
    console.log(value , test)
}

console.log(value , test)
/*let a =50;
 {
let a =90;
    block variable declared inside can be use only inside block
    now the same name for a varibale will not throw errror
}*/

//naming variables

//all are different since case sensitive
let lower = 3;
let LOWER = 3;
let Lower = 3;

//numbers at start cannot be used

// cannot be used at start let 5a = 7
let a5a =7
let a5 =7
let _test =5
let te_ts =5


//cannot use reserved keywords

// let if =9


//camel casing  -  abc , abcDef ,employeeFirstName - used yet other places

//snake casing -abc , abc_def , employee_first_name

//pascal case - Abc , AbcDef , EmployeeFirstName - used for classes 


/*primitive datatypes - string number boolean */


let av =20;
let name="vignesh" 
 let frstname = 'vignesh'
let isstudent = true  



/*reference datatypes - array object */

let student =["frst", "last"];
let empl = {name:'prince',sec:'4th'} 

// null undefined primitive values


let agee3; //undefined
let age4 = null;

//js is dynamic type 

let tre = 20;
tre ='20'
tre='test'
tre=true
// can be changed to anything that is know as dynamic type

console.log(tre)

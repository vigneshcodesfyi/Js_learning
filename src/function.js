//declaring a fucntion or method

const person ={name:'vignesh', age:27}
function name( /*parameter*/){

console.log(person.name)
console.log(person.age )

}

name();//call this function 


  //with parameter - variable
function test(name){

    console.log(name)

    console.log(person.age)
    
}
test(undefined);
test('vicky'); //call with argument



test(person);// can pass full object inside function

test({name:'vignesh', age:27})

//default value paramater


function defaultna (name = 'testind'){

    console.log(name)

    console.log(person.age)
    
}
defaultna();



//Rest parameter cant find how many parametrers we can pss

function Args(...arg){


    console.log(arg)
}

Args('a',5,"trsr")



// Return in a function

function printName(first,second){

const full = first+' '+second;
console.log("before return")

    return full;

    console.log("after retrurn") // this code cannot be run since it has been returned
}


let full = printName('vicky','vimal'); // store in a varibale since it is returning something 

console.log(full) 


// everything can be returned


function returnob(firstname, lastname){


   // return{firstname:firstname, lastname:lastname};

    // since the parameter and the keyu are of same  we can just simply use 
    return{firstname, lastname};


}

const testingreturn =returnob('vimal ', 'ganesh')

console.log(testingreturn)
console.log(testingreturn.firstname)
console.log(testingreturn.lastname)


//anonymous function


const getFllName= function(firstname, lastname){

   return firstname+' '+ lastname;
 
 
 }
 let full_name=getFllName('SHALINI', 'vignesh')

 console.log(full_name)


 //arrow function 

 const arrow= (firstname, lastname) =>{

    return firstname+' '+ lastname;
  
  
  }


 //if single line no return it will automatically return
 

 const arrownore= (firstname, lastname) =>

     firstname+' '+ lastname;
  
  


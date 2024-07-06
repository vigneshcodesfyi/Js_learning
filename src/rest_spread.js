student =["a","b"]

students =["c","d"]

//Spread operator 
fullstu = [...student,...students,"e"]


console.log(fullstu)



person={
    name:'vivky',
    age:20
}

contact={
    phno:7851,
    add:"nanganllur"
}


total = {...person,...contact,status:"married"}


console.log(total)



// remove the characters separate 

test= "vignesh"
hello=[...test]
console.log(hello)



//rest parameter


function add(...value){

    for (let i = 0; i < value.length; i++) {

        const element = value[i]+1;
        console.log(element);

    }


}


add(1,2) // we can pass any no of arguments
add(1,2,4,5,6,7)
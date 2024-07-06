let number=["vignesh", 'shalini', 'gaanesh']

for (let i = 0; i < number.length; i++) {
    const element = number[i];

    console.log(element)
    
}

// for (let i = 0; i <= 10; i++) {
// console.log(i)    
// }




// Nested for loops


 /* students = [
    {id :1 , name:"vicky"},
    {id :2 , name:"wekey"},

    {id :3 , name:"vikki"},

    {id :4 , name:"vickys"},

    {id :5 , name:"vignesh"},

]

studentA=[1,3,4]
studentB=[2,5]


function studentfinder(studentA , students) {

for (let i = 0; i < studentA.length; i++) {
    const element = studentA[i];
    
    console.log(element)

for (let i = 0; i < students.length; i++) {
    
    

    if( students[i].id == element){



        console.log( students[i].name)
    }



    
}
}
    
}

studentfinder(studentA , students)

*/


// While and Do while


let i =0;

while(i<11){   // condition 

    console.log(i)

    i++;  // increment

}


let nameslop = ["rohit", "gnaesh" , "testing purpose"];

let k =0
while( k < nameslop.length){

    console.log(nameslop[k])

    k++;
}

let k1 =0

// do while 

do{

    console.log(nameslop[k1])
    k1++;
}
while( k1 < nameslop.length);{


    console.log("test")
}



// Break and Continue - continue will skip that value if it meets corresponding condityion break will break out of the frst loop

let int1 = 10;

for (let i = 0; i <= int1; i++) {

    
    if(i === 5){

console.log("hellow ")
        break;
    }

    console.log("for loop"+ i)
}


for (let i = 0; i <= int1; i++) {

    
    if(i === 5){

console.log("skip for  "+ i)
        continue;
        console.log("skip for  "+ i)

    }

    console.log("for"+ i)
}


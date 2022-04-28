// // Destructor
// // object 
// const person = {

//     fullName : "Louis Cesar",
//     age : 24,
//     gender: "Male",
//     favcolor: "Black",


// }
// const { fullName, age} = person;

// console.log(fullName, age);


//arrow function

// const Mathfunction = (a,b) => {
//     return{ 
//     sum: a + b,
//     diff: a - b,
//     product: a * b,
//     }

// }
// const {sum, diff, product} = Mathfunction(10,5);
// console.log(sum, diff, product);




// //template string

// const name = "Louis Cesar";
// const topic = "js helper";


// const template = `my name is ${name} my topic today is ${topic}`;

// console.log(template)




// //Map and  Filter

// const Students = [

//     {Name: "louis cesar", Gender: "Male"},
//     {Name: "miko cesar", Gender: "Male"},
//     {Name: "kerstine cesar", Gender: "Female"},
//     {Name: "mark cesar", Gender: "Male"},
// ]

// // filter method

// const template_filter = Students.filter((student)=> {
//     return student.Gender == "Male"


// })
// const names = Students.map((student) =>{

// return student.Name;

// })
// console.log(names)



// // console.log(template_filter)
// // console.log(Students)



//Spread operator
// const Students = [

//     {Name: "louis cesar", Gender: "Male"},
//     {Name: "miko cesar", Gender: "Male"},
//     {Name: "kerstine cesar", Gender: "Female"},
//     {Name: "mark cesar", Gender: "Male"},
// ]

// const new_student = {Name : "kare" , Gender : "Female"}

// //original

// const new_student1 = {...new_student, Course: "Infomation technology"}

// const new_students = Students.map((student)=>{

// return {...student, Course : "Seama"}

// })

// console.log(new_students, new_student1)



// //import and export

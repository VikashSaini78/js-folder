// function myfn(a,b){
//     c = a*b
//     console.log(c)
// }
// myfn(50,55)



// let  myfn = function(a,b){
//     c = a+b;
   
// }
// myfn(54,4)
// console.log(c)


// let myfn = (a,b)=>{
//     c=a*b
//     console.log(c)
// }
// myfn(4,5)


// let myfn = (a,b)=>{
//     console.log(a*b)
// }
// myfn(5,7)





// for loop





// for(i=1; i<=5;i++){
// console.log(i)
// }

// let prompt = require("prompt-sync")()
// let input = prompt("Enter your number :-")

// if(input<=50){
//     for(let i=0; i<=input; i++)
//     console.log("hi :- "+i)
// }
// else if(input<=100){
//     for(let i=0; i<=input; i++)
//     console.log("by :- "+i)
// }





// let program=prompt("Enter your number :-")
//     if(program<=100){
       
// for(i=0;i<=program;i++)
// console.log("vicky jaitpuriya - "+i)
//     }
//     else if(program>=100){
//         console.log("invaled input")
//     }


//////l



// let myarray = ["vicky","aman","raj","ram","shyam","kirshana",55,44,88,]

// for(i=0;i<myarray.length;i++){

//    let value = myarray[i]
//    console.log(` value = ${value}  lenght = ${i} `)
// }




let prompt=require("prompt-sync")()

// let value=prompt("Enter your number :-")


// for(let i=0;i<=value;i++){
//     console.log(i)
// }





///// array.forEach



// let myarray = ["vicky","aman","raj","ram","shyam","kirshn",55,44,88,]

// myarray.forEach((value,index)=>{

//     console.log(value+ "   "+index)
// })





// let myarray = ["vicky","aman","raj","ram","shyam","kirshana",55,44,88,]

// function myfn(value,index){
//     console.log(`valuse ${value}       index     ${index}`)
// }
// myarray.forEach(myfn)





// filter




// let myarray = [7,44,48,15,52,18,35,49,15,43,95,]
// let valus=myarray.filter((valuse)=>{
//     return valuse %2==0
// })
// console.log(valus)



// function myfilter(value){
//     return value>50

// }

// let myvalue=myarray.filter(myfilter)
// console.log(myvalue)


// //

// let myfilter=myarray.filter((value)=>{
//     return value%2==0
// })
// console.log(myfilter)



// let myarray = ["vicky","raj","ram","shtam","ganehs","vicky","ram"]
// let myvalue=myarray.filter((value)=>{
//          return value=="vicky"
// })
// console.log(myvalue)



// let myarray = [7,44,48,15,52,18,35,49,15,43,95,]
// let myvalue=myarray.filter((value)=>{
//               return value%3==0
//             })
//             console.log(myvalue)




// // let myarray = [4,75,4,5,9,8,5,5,5,66,]
// let myarray = ["vicky","vicky","jaitpuriya","saini"]

// let myvalue = myarray.filter((value)=>{
//     return value=="vicky"

// })
// console.log(myvalue)




// ////reduce///   values ko + karne ke liye use kiya jata hia





// let myarray = [1,2,3,4,5,6,7,8,9]

// let myvalue=myarray.reduce((value,index)=>{
//          return value+index
// })
// console.log(myvalue)





// let myarray = [44,5,8,2,9,1,3,4,2]

// let myvalue=myarray.reduce((value,vicky)=>{

//     console.log(`value  ${value} index ${vicky}  :- ${index}`)

//          return value + vicky
// })

// console.log(myvalue)




// let myarray=[1,2,56,3,65,2,6,5,3,2]

// let myvalue=myarray.reduce((value,vicky)=>{
//     return value+vicky

// })
// console.log(myvalue)





// is nan






// let a = "vicy"

// console.log(isNaN(a))










// tostring







// let number = 47859

// let typof = number.typeof()
// console.log(`my number ${typof}`)


// let myvalue=number.toString()
// console.log(myvalue)


// let a = 47859

// console.log (String(a))



// let b="55955"
// console.log(parseInt(b))


// let a = "44246532.4596"
// console.log(parseFloat(a))




// for loop task



// let student = ["vicky","ram","shyam","anny","manny"]

//  for(let i=0; i<student.length;i++){
//     studentname=student[i]
//     console.log(studentname)
//  }







 
// let student = ["vicky","ram","shyam","anny","manny"]


// let marks = [4,55,4,4,5]



// let studentname = ""
// let studentmarks = ""

//     for(let i=0; i<student.length; i++ ){
//         studentname=student[i]



//         for(let j=0; j<=i; j++ ){
//          studentmarks=marks[j]
  

// }
//     console.log(`${studentname} = ${studentmarks}`)

    
//     }

// let  studentname = ""
// let studentmarks = ""




// let student = ["vicky","ram","shyam","anny","manny"]


// let marks = [4,55,4,4,5]



// for(i=0; i<student.length; i++){
//     studentname = student[i]

//     for(j=0; j<=i; j++){
//         studentmarks=marks[j]
//     }
//     console.log(`${studentname} = ${studentmarks}`)
// }
   





// // /////////////Object


// const myobj = {
//     name: "vicky",
//     age: 55,
//     class:"11",
//     address:{
//         pincode:"303305",
//         city:"jaipur",


//     },
//     Email:"vikashbanskhih@gmail.com"
// }
// console.log(myobj)

// const{city}=myobj.address

// console.log(city)










// const myobj = {
//     name: "vicky",
//     age: 55,
//     class:"11",
//     address:{
//         pincode:"303305",
//         city:"jaipur",


//     },
//     Email:"vikashbanskhih@gmail.com",


    
// alldetails: function (){
//     console.log(this.age)
// }


// }

// myobj.alldetails()





///////////// tranary opertor


// let age= 44

//   age==18 ? console.log("vote for india")
//  : age<=18 ? console.log("vote for pk")
//  : console.log("inavlde input")

// let prompt = require("prompt-sync")()
// let name = prompt("Enter your name :-")

// let name ="dav"

// name =="vicky" ? console.log("vikash")

// :name =="dav"? console.log("devanshu")

// :console.log("invaled input")








// curentdate timing







// let curentdate = new Date()

// console.log(curentdate)




// let curentdate = new Date()
// let todaydate = curentdate.getDate()
// let allmanth = ["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]

// let months  = curentdate.getMonth()
// let mymonth = allmanth[months]


// console.log(mymonth)



// let curentdate = new Date()
// let todaydate = curentdate.getDate()

// let todaymonth = ["jan","feb","march","april","may","jun","july","aug","sep","oct","nov","dec"]

// let thismonth = curentdate.getMonth()
// let allmanth = todaymonth[thismonth]

// let FullYear = curentdate.getFullYear()

// let thistime = curentdate.getHours()
// let thisminit = curentdate.getMinutes()
// let thissec = curentdate.getSeconds()


// console.log(`${ todaydate}-${allmanth}-${FullYear}     ${thistime}:${thisminit}:${thissec}`)











///// Boolean



// let a=10;
// let b="10";
// z = a===b
// console.log(z)




// ////for in loop



// let myarray = ["vicky","hass",55,45]

// for(let x of myarray){
//  let z = myarray[x]
//  console.log(z)
// }





// while



// let i=0;
// while (i<=10){
//     console.log(i)
//     i++
// }




// let i=0;
// while (i<=10){
//     if(i===5){
//         break
//     }
//     console.log(i)
//     i++
// }






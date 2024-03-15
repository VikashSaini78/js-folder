

// length

const { values } = require("lodash")



// let mayarray = ["vicky ","saini ", 78, 54, "aman "]
//  let myArray =["hello,vicky,jaitpuriya,boy,"]
// let length =mayarray.length
// console.log(length)



// Pop


// let convartstring = mayarray.toString()
// console.log("convart arry to sting :-"+convartstring +"datatype :-" +typeof(convartstring))


// let mayarray = ["vicky ","saini ", 78, 54, "aman "]
// let removevalue=mayarray.pop()

// console.log("remove value :-"+removevalue)

// console.log(mayarray)





// push




// let mayarray = ["vicky ","saini ", 78, 54, "aman "]

// mayarray.push("manish","ramehs","rakesh")



// console.log(mayarray)

// let arry = mayarray[7]
// console.log("to string :-"+arry)



// join mathodes




// let mayarray = ["vicky ","saini ", 78, 54, "aman "]

// let arry = mayarray.join("+")

// console.log(arry)



// toString




// let mayarray = ["vicky ","saini ", 78, 54, "aman "]

// let may = mayarray.toString()
// console.log(may+"data type :-"+typeof(may))



// shift



// let mayarray = ["vicky ","saini ", 78, 54, "aman "]

// let value = mayarray.shift()

// console.log(mayarray)
// console.log(`remove itom :- ${value}`)
// console.log("remove itom :- "+ value)


// unshift



// let mayarray = ["vicky ","saini ", 78, 54, "aman "]

// let arry = mayarray.unshift("shyam","ram","hanuman")

// console.log(mayarray)



// delete




// let mayarray = ["vicky ","saini ", 78, 54, "aman "]

// delete mayarray[3]
// console.log(mayarray)



// concat


// let mayarray = ["vicky ","saini ", 78, 54, "aman "]
// let secondarry = ["ram","shyam","rohit","rakesh",54,54]

// let arry=mayarray.concat(secondarry)
// console.log(arry)


// let myvalue=arry["my value :-"+4]
// console.log(myvalue)




// splice



// let mayarray = ["vicky ","saini ", 78, 54, "aman","chinki","minki","ram","shyam"]


// let arry = mayarray.splice(3,5,)

// console.log(mayarray)




// sort


// let mayarray = ["vicky ","saini ", 78, 54, "aman","chinki","minki","ram","shyam"]


// mayarray.sort()

// console.log(mayarray)



// let value={
// name: "vicky jaitpuariya",
// age: 22,
// cgpa: 5.5,

// }

// for(let key in value){
//    console.log(key+ " = " +value[key]);
// }

// for(let i=0; i<=100;i++){
//     if(i % 2==0){
//         console.log(i)
//     }
// }


// let myobj = {
//     firstName: "Vicky",
//     lastName: "jaitpuriya",
//     age: 21,
//     Color: "pink"
//   };
//  console.log(myobj)

// let myArray = ["oddi", "Bugatti", "BMW","Mercedes","Lamborghini"];
// let length =myArray.length
// console.log(length,myArray)

// let aarry=[25,2,6,1,2,2,]
// let b=aarry.slice(5)
// console.log(b)

// let  numbers = [5, 2, 9, 1, 7];
// let a=numbers.sort()
// console.log(numbers);
//  // Output: [1, 2, 5, 7, 9]


//  let a = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
//  console.log(a)
   
   
// includes

  
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result)


// let myNum = [6,8,9,67,98,34,55,89,100]
// myNum.reduce((total,value)=>{
// return total +value
// })
// Console.log(result)




// filter


// let arry = [1,2,3,4,5,6,7,8,9]
// let evenrry=arry.filter((val)=>{
//     return val % 2===0;

// });
// console.log(evenrry);


// let arry = [1,2,3,4,5,6,7,8,9]
// let evenrry=arry.filter((val)=>{
//     return val % 2!==0;

// });
// console.log(evenrry);



let arry = [1,2,3,4,5,6,7,8,9]
let evenrry=arry.filter((val)=>{
    return val <3;

});
console.log(evenrry);
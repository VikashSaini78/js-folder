// let mypomices=new Promise((resole,Promise)=>{
//     setTimeout(()=>{
//        console.log("any task complete")


//        let task = false

//        if(task){
//         resole({
//             id:142,
//             name:"vicky",
//             age:"25",
//             pass:12545266,
    
//            })
//        }
//      else{
//         reject("errer")
//      }
    
//     },3000)
// })

// mypomices.then((name)=>{
// console.log(name)
// }).catch((yt)=>{
// console.log(yt)
// })



// fatch("http://dummyduniya.js").then().catch().finally()









// new Promise((resole,reject)=>{
// setTimeout(()=>{
// console.log("db contected")

// let type=false
// if(type){

//     resole({
//         name:"vicky",
//         age:25,
//         id:"jaitpuriya"
//     })
// }
// else{
//     reject("errer db not conect....")
// }


// },2000)
// })

// .then((data)=>{
// console.log(data)
// }).catch((hello)=>{
//     console.log(hello)
// }).finally(()=>{
//     console.log("finlly lway run....")
// })





    

// let mypomices=new Promise((resole,reject)=>{
//     setTimeout(()=>{
//     console.log("db contected")
    
//     let type= true
//     if(type){
    
//         resole({
//             name:"vicky",
//             age:25,
//             id:"jaitpuriya"
//         })
//     }
//     else{
//         reject("errer db not conect....")
//     }
    
    
//     },2000)
//     })


//     async function myfn(){
     
//         try {
//             let resole = await mypomices
//             console.log(resole)
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     myfn()









let mypomices=new Promise((resole,reject)=>{
    setTimeout(()=>{
    console.log("db contected")
    
    let type= true
    if(type){
    
        resole({
            name:"vicky",
            age:25,
            id:"jaitpuriya"
        })
    }
    else{
        reject("errer db not conect....")
    }
    
    
    },2000)
    })


    async function myfn(){
       let resole = await mypomices
       console.log(resole)
    }

    myfn()




// fetch('https://dummyjson.com/products/1').then((data)=>{
//     return data.json()
// }).then((result)=>{
    
// })
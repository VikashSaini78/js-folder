



// let myObj={
//     product:"laptop",
//     id:25423,
//     rating:"4.9",
//     price:"$6441",
//     address:{
//         city:"jaipur",
//         pincode:"303305"
//     }

// }

// let seccondobj=Object.assign({},myObj)
// let seccondobj={...myObj}

// myObj.address.city="kota"

// myObj.price="$5125"
// myObj.rating="2.6"
// seccondobj.price="25rupes"
// seccondobj.product="tv"

// let a = JSON.parse( JSON.stringify(myObj))
// console.log(a)


// console.log(myObj)
// console.log(seccondobj)









// deepcoppy



let myObj={
    product:"laptop",
    id:25423,
    rating:"4.9",
    price:"$6441",
    address:{
        city:"jaipur",
        pincode:"303305"
    }

}
// sedocoppy
// let secondobj={...myObj}

// myObj.price="20 rupes"
// secondobj.price="1000 rmupes"
// // console.log(myObj)
// console.log(secondobj)

// dep coppy
let coppyproduct=JSON.parse(JSON.stringify(myObj))     
console.log(coppyproduct)

coppyproduct.address.city="kota"

console.log(myObj)
console.log(coppyproduct)

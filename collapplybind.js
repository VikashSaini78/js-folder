
let myobj = {
     name:"vicky",
     lastname:"jaitpuriya",
     class:12,
     id:5874,
     allDetails:function(city,pincode){
        console.log("name:-"+this.name,"lastname:-"+this.lastname,"clss:-"+this.class,"id :-" + this.id, "city :-"+city,"pincode:-"+pincode)
     }
}



let seccondobj={
    name:"manny",
    lastname:"soni",
    class:"polytechnic",
    id: "45244515",
    
}



let therdobj={
    name:"manny",
    lastname:"soni",
    class:"polytechnic",
    id: "45244515",
    
}



// myobj.allDetails.call(seccondobj,"jaipur","303305")
// myobj.allDetails.call(therdobj,"jaipur","303305")


 
// myobj.allDetails.apply(myobj,["jaipur","303305"])
// myobj.allDetails.apply(seccondobj,["ajmer","47856"])
// myobj.allDetails.apply(therdobj,["kota","12345"])


let a=myobj.allDetails.bind(seccondobj,"jaipur","303305")
console.log(a)
a()
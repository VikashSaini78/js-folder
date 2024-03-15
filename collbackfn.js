function mycoll(){
    console.log("namste vicky🙏🙏")
}



function mysecondfn(x,y){
    console.log("chalo chale jaipur 🤔.......!")
}


function therdobj(a,b){
    console.log("jaitpuriya................!")
}



function myfn(a,b,collback){
    let c = a*b
    console.log(c)
     collback()
}



myfn(2,9,mycoll)
myfn(9,5,mysecondfn)
myfn(2,8,therdobj)
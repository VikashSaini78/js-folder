
function myfn(lenght){

    let characteres = "1234567890"


   let  id = ""

   for(let i=1;i<=lenght;i++){
    let randamnum = Math.floor(Math.random()*characteres.length)
    id += characteres.charAt(randamnum)
   }


   console.log(id)
}

myfn(15)





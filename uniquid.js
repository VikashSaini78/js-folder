function uniquid(lenght){
    let characteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
     
    
   let id = ""


    for(let i=1;i<=lenght;i++){
        let randomnum = Math.floor(Math.random()*characteres.length)
        let myid = characteres.charAt(randomnum)
        
        id =id+myid

    }
    console.log(id)
}


uniquid(5)





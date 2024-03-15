
    
    
async function myfn(){
    let result = await fetch ('https://dummyjson.com/')
     let data = await result.json()
     console.log(data)
     }
  myfn()



    
    



// async function myfn(){
//     const url = 'https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f951064f9bmsh3e2eb884234a6fcp17c9f2jsn603b8d7c81de',
// 		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// }
//     myfn()


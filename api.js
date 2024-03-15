// async function myfn(){
//     const url = 'https://imdb-movies-web-series-etc-search.p.rapidapi.com/thegodfather.json';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f951064f9bmsh3e2eb884234a6fcp17c9f2jsn603b8d7c81de',
// 		'X-RapidAPI-Host': 'imdb-movies-web-series-etc-search.p.rapidapi.com'
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
// myfn()





async function myfn(){
	const url = 'https://imdb-top-100-movies.p.rapidapi.com/top32';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd26d2ef4dbmsh4de959baaf14c97p154497jsn2469ee470cd0',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
}
myfn()

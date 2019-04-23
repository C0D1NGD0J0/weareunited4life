const unirest = require('unirest');
const gamesData = [];
let count = 0;

do{
	unirest.get("https://api-football-v1.p.rapidapi.com/fixtures/team/33")
	.header("X-RapidAPI-Host", "api-football-v1.p.rapidapi.com")
	.header("X-RapidAPI-Key", process.env.RAPID_API_KEY)
	.end(function (result) {
	  const { fixtures } = result.body.api;
	  
	  for(let item in fixtures){
	  	//filter current season matches from retuned data
	  	if(fixtures[item].league_id === '2'){
	  		// filter unplayed matches
	  		if(fixtures[item].status === 'Not Started'){
	  			gamesData.push(fixtures[item]);
	  		}
	  	}
	  };
	});

	count++;
} while (count < 1)


module.exports = gamesData;
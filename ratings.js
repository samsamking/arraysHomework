var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];
/*sam's first solution*/
/*ratings.forEach(function(item, index){
	var leftAges=ages.filter(function(minAge){
		return minAge>=minAgeForRating[index];
	}).toString();
	console.log(ratings[index]+ '\n' +leftAges);
});*/
/*sam's second solution*/
ages.forEach(function(age, index){
  var leftRatings= ratings.filter(function(rating, index){
	  return age>=minAgeForRating[index];
  });  
	console.log("Age "+age +" is allowed to see: "+leftRatings.toString());
	  
});
/*jess's solution*/
/*var ratingsAllowed=ages.map(function(age){
	return ratings.filter(function(rating, index){
		return age>= minAgeForRating[index];
	});
});

ages.forEach(function(age, index){
	console.log("Age "+age+" is allowed to se: "+ratingsAllowed[index].toString());
});*/



/*half of martin's solution*/
/*var allowed=ages.forEach(function(num){
	function ratingsFilter(value,i){
		return num>minAgeForRating[i];
	}
})
*/
/*var allowed=ages.forEach(function(age){
	function ratingsFilter(rating,index){
		return age>minAgeForRating[index];
	}
})*/


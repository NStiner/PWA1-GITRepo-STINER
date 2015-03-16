/*  Nicole Stiner
    03/11/15
    Search Engine Debug
*/
// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
		//**Creates var resultsDIV and sets it to doc.get
		//**Creates var searchInput and sets it to doc.forms
		//**creates variable for current search
		
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
		//**Creates var validate and sets function to call query
	var validate = function(query){
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){
			query = query.substring(1, query.length);
		}
		while(query.charAt(query.length-1) === "") {
			query = query.substring(0, query.length - 1);
		}
		// Check search length, must have 3 characters
			//*if length is smaller than 3, you will be alerted
		if(query.length < 3){
			alert("Your search query is too small, try again.");
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		}
		
		search(query);
	};
	
	// Finds search matches
		//**creates var search and sets it to function call 
	var search = function(query){
		
		// split the user's search query string into an array
			//**Create var queryArray and set it to query.join
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
			//**creates var results and stores data in array
		var results = [];

		// loop through each index of db array
			//**creates a for loop and sets variables
		for(var i=0, j=db.length; i<j; i++) {

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			//** create var dbTitleEnd and set index
			//** create var dbitem and substring

			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].toLowerCase.substring(0, dbTitleEnd);

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			//** creates for loop and sets variable

			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
				var dbitem = queryArray[ii].toLowerCase();

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array

				var compare = dbitem.indexOf(qitem);
				if (compare !== -1) {
					results.push(db[i]);
				}
			}
		}

		
		results.sort();
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();
		}else{
			showMatches(results);
		}
	}
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
		//** creates var showMatches equals to function results and prints out results
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
			//** creates for loop and sets variable
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
		var query = searchInput.value;
		validate(query);

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	};
})();
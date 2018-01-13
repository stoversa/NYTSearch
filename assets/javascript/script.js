function callAPI(term, number, start, end){
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "32adc87bd5c947cd96ced3c75b161322",
	  'q': term,
	  'page': 0,
	  'begin_date': start,
	  'end_date': end
	});
	
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  var results = result.response.docs;
	  console.log(results);
	  
	  for (var x = 0; x < number; x++){
			var headline = results[x].headline.main;
			console.log(headline);
			var newDiv = $('<div>');
			newDiv.addClass('well');
			var num = x + 1;
			newDiv.text('#' + num + ' Article: ' + headline);
			$('#resultsHere').append(newDiv);
	  };
	})
};

$('#search').click(function(event) {
	event.preventDefault();
	var term = $('#searchTerm').val().trim();
	var number = $('#numberRecords').val();
	var start = 16000101;
	var end = 25001231;
	var tempStart = $('#startYear').val();
	if (tempStart.length === 4){
		start = tempStart + '0101';
	}
	var tempEnd = $('#endYear').val();
	if (tempEnd.length === 4){
		end = tempEnd + '1231';
	}
	$('#resultsHere').empty();
	
	callAPI (term, number, start, end);
})

$("#clear").on("click", function() {
	$('#resultsHere').empty();
});
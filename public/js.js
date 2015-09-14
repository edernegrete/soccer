var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.espn.com.mx%2Ffutbol%2Ffixtures%3Fleague%3DMEX.1'%20and%20xpath%3D'%2F%2Fdiv%5B%40class%3D%22mod-container%20mod-table%20mod-no-header-footer%22%5D'&format=json&diagnostics=true&callback=?"
var isTouchDevice = 'ontouchstart' in document.documentElement;
var test;
if(isTouchDevice){
	$('.Footer-arrow').show()
}
$.getJSON(url).done(function (data) {
	var date = data.query.results.div[0].div.table.tbody.tr[0].td.content
	var teamList = data.query.results.div[0].div.table.tbody.tr;
	for(var i = 2; i<teamList.length;i++){
		var it = 1;
		var matchResults = teamList[i].td[2].a.content
		test = matchResults
		$('#localList').append('<li>' + teamList[i].td[it].a.content + '</li>')
		$('#visitList').append('<li>' + teamList[i].td[3].a.content + '</li>')
		if(isNaN(matchResults)){
			$('#resultsList').append('<li> - </li>')
		}else{
			$('#resultsList').append('<li>' + matchResults) + '</li>'
		}
		if(typeof(teamList[i].td[0]) != 'object'){
			$('#scheduleList').append('<li>' + teamList[i].td[0] +'</li>')
		}else{
			$('#scheduleList').append('<li>' + teamList[i].td[0].span.content +'</li>')
		}
		it++;
	}
	$('.Layout-loading').css('display', 'none')
	$('.Wrapper').css('display', 'block')
	$('#calendarDay').text(date)
})


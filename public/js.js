var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.foxsports.com%2Fsoccer%2Fschedule'%20and%20xpath%3D'%2F%2Fsection%5Bcontains(%40class%2C%22wisfb_scrollableContentX%22)%5D'&format=json&diagnostics=true&callback=?"
var url2 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fwww.foxsports.com%2Fsoccer%2Fschedule'%20and%20xpath%3D'%2F%2Fdiv%5Bcontains(%40class%2C%22wisfb_scheduleGame%22)%5D%2F%2Fspan'&format=json&diagnostics=true&callback=?"
$.getJSON(url2).done(function (data) {
	var teamData = data.query.results.span
	console.log(teamData)
	for(var i = 0; i<6, teamData[i].indexOf('(') < 0; i++){
		if(i % 2 == 0){
			$('.Calendar-local-list').append('<li>'+teamData[i]+'</li>')
		}else{
			$('.Calendar-visit-list').append('<li>'+teamData[i]+'</li>')
		}
	}
	$('.Layout-loading').css('display', 'none')
	$('.Wrapper').css('display', 'block')
})
$.getJSON(url).done(function (data) {
	var matchDate = data.query.results.section.div.div[0].content
	$('#calendarDay').text(matchDate)
})
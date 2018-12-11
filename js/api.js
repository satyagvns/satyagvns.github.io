function getGITData(){
    $.get("https://api.github.com/users/satyagvns/repos", function(data) {
    	console.log(data);
    	
    	$.each(data, function (key, value){
    		$(".insertCard")
           .append('<div class = "col-md-4"><div class="card gitCard" style = "margin:5%;"><div class="card-body"><h5 class="card-title">'+value.name+'</h5><p class="card-text">'+value.language+'</p><a href="'+value.url+'" target = "_blank" class="btn btn-info">Show me Repo</a></div></div></div>');
    	});
        
    }, "json");
}

function cardDesign(){
	return '';
}

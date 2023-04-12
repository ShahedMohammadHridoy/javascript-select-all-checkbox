function check(source){
	var checkboxes = document.getElementsByClassName('select_all');
	for(var i in checkboxes){
		checkboxes[i].checked = source.checked;
	}
}

function selectedCheck(){
	var selected = document.getElementsByName('movie_genre');
	
	var lang= [];
	
	for(var i in selected){
		if(selected[i].checked){
			lang.push(selected[i].value);
		}
	}
	
	var list=lang.join(', ');
	
	
	alert("You selected "+list+"");
}
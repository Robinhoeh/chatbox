$('form').on('submit', function() {//on click of submit button
	var text = $('#message').val();//get value of input
	alert(text);// alert input message
	return false;//cancel form submission 
});
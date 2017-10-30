 var socket = io();//reference socket library

$('form').on('submit', function() {//on click of submit button
	socket.emit('message', text);//sends the message to the server
	$('#message').val('');//clears the input once submitted - SETS empty
	return false;//cancel form submission 
});

socket.on('message', function (){//when a message received from real time web sockets
	$('<li>').text(msg).appendTo('#history');//create new li, append msg to the <ol>
});
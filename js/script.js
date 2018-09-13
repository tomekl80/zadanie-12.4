'use scrict';

// URL to joke
var url = 'http://api.icndb.com/jokes/random';

// Search button
var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
	getJoke();
})

// Paragraph
var paragraph = document.getElementById('joke');

// Function
function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function() {
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	})
	xhr.send();
}
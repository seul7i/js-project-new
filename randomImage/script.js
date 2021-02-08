var form = document.getElementById('form');

form.addEventListener('submit', function (e) {
	e.preventDefault(); // prevent auto submition
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;
	var img = document.getElementById('img');
	var url = `https://placedog.net/${width}/${height}?random`;
	img.src = url;
})
//Movement Animation to happen

const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items

const title = document.querySelector('.title');
const sneakers = document.querySelector('.sneakers img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');

//Moving Animation Event
container.addEventListener("mousemove", (e) =>{
	let xAxis = ( window.innerWidth / 2 - e.pageX) / 25;
	let yAxis = ( window.innerWidth / 2 - e.pageY) / 25;
	card.style.transform = `rotateX( ${yAxis}deg ) rotateY( ${xAxis}deg )`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
	card.style.transition = "none";
	
	//popout
	title.style.transform = "translateZ(150px)";
	sneakers.style.transform = "translateZ(200px) rotateZ(-45deg)";
	description.style.transform = "translateZ(150px)";
});
	
	

//Animate Out
container.addEventListener("mouseleave", (e) => {
	card.style.transition = "all 0.5s ease";
	card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
// popback
	title.style.transform = "translateZ(0px)";
	sneakers.style.transform = "translateZ(0px) rotateZ(0deg)";

});


//Purchase button function
function purchaseFunction(){
		alert("Thanks");
}

//user choose size funtion
var header = document.getElementById("info");
var buttons = header.getElementByClassName("btn");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

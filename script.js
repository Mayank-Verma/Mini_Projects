var circle = document.getElementById("outercircle");
var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var box = document.getElementById("box");

// button[0].addEventListener("click", function () {
//   var colour = ["yellow", "blue", "green", "blueviolet", "red"];
//   var index = Math.round((Math.random() * 10) % 4);
//   circle[0].classList.add(colour[index]);
// });

button.addEventListener("click", function () {
  var index = Math.floor(Math.random() * 10 ** 6);
  var colours = "#" + index;
  circle.style.background = colours;
  console.log(colours);
});

button2.addEventListener("click", function () {
  var shape = ["square", "triangle", "rectangle", "circle"];
  shape.forEach((element) => {
    if (box.classList == element) {
      box.classList.remove(element);
    }
  });
  var index = Math.floor(Math.random() * 10) % 4;
  box.classList.add(shape[index]);
});

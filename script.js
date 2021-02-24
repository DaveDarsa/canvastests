// window.onload = (e) => {
//   //get the canvas
//   var canvas = document.querySelector("#test");
//   var parent = document.querySelector(".container");

//   //resize to fit the parent
//   function sizeToParent(canvas, parent) {
//     canvas.style.height = "100%";
//     canvas.style.width = "100%";
//     canvas.width = parent.offsetWidth;
//     canvas.height = parent.offsetHeight;
//   }
//   sizeToParent(canvas, parent);

//   var ctx = canvas.getContext("2d");
//   ctx.beginPath();
//   ctx.fillStyle = "rgba(22,22,22,.1)";
//   ctx.strokeStyle = "gold";
//   ctx.lineWidth = 1;
//   ctx.strokeRect(20, 20, 80, 100);
//   ctx.fillRect(50, 50, 100, 100);
// };
window.onload = () => {
  var purr = document.querySelector("#purrframe");
  console.log(purr);
};

import { Starcanvas } from "./canvasscripts/starcanvasFinal.js";
import { Fireflies } from "./canvasscripts/fireflies.js";
import { Raincanvas } from "./canvasscripts/raincanvasFinal.js";

window.onload = () => {
  console.log("working");

  Starcanvas.init();
  Starcanvas.animate();
  //init on resize
  Fireflies.start();

  Raincanvas.init();
  Raincanvas.animate();
};

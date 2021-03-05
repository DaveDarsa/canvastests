import { Starcanvas } from "./starcanvasFinal.js";
import { Fireflies } from "./fireflies.js";
import { Raincanvas } from "./raincanvasFinal.js";

window.onload = () => {
  console.log("working");

  Starcanvas.init();
  Starcanvas.animate();
  //init on resize
  Fireflies.start();

  Raincanvas.init();
  Raincanvas.animate();
};

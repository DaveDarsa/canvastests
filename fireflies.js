(function firefliescanvas() {
  var canvas = document.getElementById("fireflies");
  var ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let day = false;
  let fireflies = [];
  function randomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function firefly() {
    this.x = randomFromRange(canvas.width / 10, (canvas.width * 9) / 10);
    this.y = randomFromRange(canvas.height / 1.25, canvas.height);
    this.radius = randomFromRange(2, 4);
    this.rspeed = 0.02;
    this.speed = {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
    };
    this.max = {
      xbound: this.x + 10,
      ybound: canvas.height / 2,
      maxRadius: this.radius + 3,
    };
    this.min = {
      xbound: this.x - 10,
      ybound: this.y - 100,
      minRadius: this.radius,
    };

    firefly.prototype.draw = function () {
      ctx.fillStyle = "rgb(124,253,254)";
      ctx.shadowColor = "rgb(95,201,33)";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    };
    firefly.prototype.update = function () {
      if (this.x < this.max.xbound || this.x <= this.min.xbound) {
        this.x += this.speed.x;
      } else {
        this.x -= this.speed.x;
      }
      if (this.y < this.max.ybound || this.y <= this.min.ybound) {
        this.y += this.speed.y;
      } else {
        this.y -= this.speed.y;
      }
      if (this.radius < this.max.maxRadius) {
        this.radius -= 0.0099;
      }
      if (this.radius < this.min.minRadius) {
        this.radius += 0.5;
      }
      this.draw();
    };
  }

  function init() {
    for (let i = 0; i < 50; i++) {
      fireflies.push(new firefly());
    }
    console.log(fireflies);
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgb(2,17,28)";
    ctx.shadowBlur = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireflies.forEach((firefly) => {
      firefly.update();
    });
  }
  setTimeout(() => {
    init();
    animate();
  }, 1000);
})();

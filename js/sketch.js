var s = function (p) {
  let time = 0;
  let vel = NaN; // TWO_PI / 300 assigned in setup()
  let hori_count = 12;
  let vert_count = 4;
  let colors = [
    "#F94144",
    "#F65A38",
    "#F3722C",
    "#F68425",
    "#F8961E",
    "#F9AF37",
    "#F9C74F",
    "#C5C35E",
    "#90BE6D",
    "#6AB47C",
    "#43AA8B",
    "#4D908E",
    "#52838F",
    "#577590",
  ];
  p.setup = function () {
    p.createCanvas(170, 170);
    // canvas1.parent("sketch-container");
    p.noFill();
    p.strokeWeight(3);
    p.blendMode(p.SCREEN);
    vel = p.TWO_PI / 300;
  };

  p.draw = function () {
    p.clear();
    p.background(25, 25, 25);
    for (let y = 0; y < vert_count; y++) {
      for (let t = 0; t < hori_count; t++) {
        y_pos = p.map(p.sin(time + t / 6 + y / 2), -1, 1, 50, p.width - 50);
        x_pos = p.map(y, 0, vert_count - 1, 30, p.height - 30);
        p.stroke(colors[t]);
        p.circle(x_pos, y_pos, 35);
      }
    }
    time += vel;
  };
};

var cirlcles = new p5(s, "footer-sketch");

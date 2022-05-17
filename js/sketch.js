let time = 0;
let vel = NaN; // TWO_PI / 300 assigned in setup()
let hori_count = 12;
let vert_count = 7;
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

function setup() {
  let canvas = createCanvas(200, 200);
  canvas.parent("sketch-container");
  noFill();
  strokeWeight(3);
  blendMode(SCREEN);
  vel = TWO_PI / 300;
}

function draw() {
  clear();
  background(25, 25, 25);
  for (let y = 0; y < vert_count; y++) {
    for (let t = 0; t < hori_count; t++) {
      y_pos = map(sin(time + t / 6 + y / 2), -1, 1, 75, width - 75);
      x_pos = map(y, 0, vert_count - 1, 50, height - 50);
      stroke(colors[t]);
      circle(x_pos, y_pos, 35);
    }
  }
  time += vel;
}

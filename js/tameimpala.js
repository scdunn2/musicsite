// function setup() {
//     createCanvas(1300, 300)
//     frameRate(30)
//     background(0)
//     colorMode(HSB, 5, 5, 5)
//     fill()
//     stroke(127)
//     createLoop({
//         gif: {fileName: "noiseLoop1d.gif" },
//         noiseRadius: 0.3
//     })
// }
//
// function draw() {
//     background(0)
//     translate(0, height / 2)
//     const distributionFrequency = 0.005
//     for (let x = 0; x < width; x++) {
//         const y = animLoop.noise1D(x * distributionFrequency) * height / 2
//         ellipse(x, y, 5)
//     }
// }


const burst = new mojs.Burst({
  radius: { 0: 100 },
  count: 20,
  children : {
    shape: 'cross',
    stroke: '#815ea8',
    strokeWidth: { 6: 0},
    angle: { 360: 0},
    radius: { 30 : 5 },
    duration: 3000
  }
});

const burst2 = new mojs.Burst({
  radius: { 0: 200 },
  count: 12,
  children : {
    shape: 'zigzag',
    points: 7,
    stroke: {'#ff8605' : 'pink'},
    fill: 'none',
    strokeWidth: { 6: 0},
    angle: { '-360': 0},
    radius: { 30 : 5 },
    opacity: { 1: 0},
    duration: 3000
  }
});

const burst3 = new mojs.Burst({
  radius: { 0: 200 },
  count: 5,
  children : {
    color: '#ff0363',
    points: 7,
    angle: { '-360': 0},
    radius: { 10 : 5 },
    opacity: { 1: 0},
    duration: 3000
  }
});

const circ_opt = {
  radius: {0: 200},
  fill: 'none',
  stroke: '#ff3363',
  opacity: {1: 0},
  duration: 3500
};

const circ = new mojs.Shape({
  ...circ_opt
});

const circ2 = new mojs.Shape({
  ...circ_opt,
  delay: 500
});

const timeline = new mojs.Timeline({
  repeat: 999
})
  .add(burst, burst2, burst3, circ, circ2)
  .play();

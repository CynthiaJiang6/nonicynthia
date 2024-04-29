let mic, fft;

function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic); 
  textSize(24);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  let spectrum = fft.analyze();
  let lowFreq = fft.getEnergy(20, 100);   // Low frequencies range
  let midFreq = fft.getEnergy(101, 200); // Mid frequencies range
  let highFreq = fft.getEnergy(201, 5000); // High frequencies range

  // Determine the dominant frequency band and display it
  if (lowFreq > midFreq && lowFreq > highFreq) {
    text(`Low Frequency: ${lowFreq}`, width / 2, height / 2);
  } else if (midFreq > lowFreq && midFreq > highFreq) {
    text(`Middle Frequency: ${midFreq}`, width / 2, height / 2);
  } else if (highFreq > lowFreq && highFreq > midFreq) {
    text(`High Frequency: ${highFreq}`, width / 2, height / 2);
  }
}

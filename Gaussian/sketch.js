function setup() {
  createCanvas(1920, 1080);
  background(220);
}

function draw() {
	noStroke();
	fill(0,10);
	let i = 0;
	while(i <= height)
	{
		standard_deviation = 160;
		mean = width/2;
		l = randomGaussian(mean,standard_deviation);
		ellipse(l,i,40,40);
		i = i + 40;
	}
}
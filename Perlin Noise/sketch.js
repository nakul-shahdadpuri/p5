function setup() {
  createCanvas(1900, 1080);
 background(220);
}
let t = 0,t2 = 0,t3 = 0;
function draw() 
{
  x = noise(t);
  y = noise(t2);
  z = noise(t3);
  t = t + 0.005;
  t2 = t2 + 0.025;
  t3 = t3 + 0.037;
  x = map(x,0,1,0,225);
  y = map(y,0,1,0,225);
  z = map(z,0,1,0,225);
  let i = 0 
  fill(x,y,z);
  noStroke();
  ellipse(mouseX,mouseY,100,100);
  
}
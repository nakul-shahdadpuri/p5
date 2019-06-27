class planet
{
	constructor(x,y,vx,vy,m = 1)
	{
		this.position = createVector(x,y);
		this.velocity = createVector(vx,vy);
		this.force = createVector(0,0);
		this.mass = m;
	}

	display()
	{
		ellipse(this.position.x,this.position.y,25*this.mass,25*this.mass);
	}
	move()
	{
		this.velocity.add(this.force)
		this.position.add(this.velocity);
	}
	attract()
	{
		let center = createVector(width/2,height/2);
		center.sub(this.position);
		let r = dist(this.position.x,this.position.y,width/2,height/2);
		center.setMag(this.mass*100000/(r*r));
		this.force = center;
	}
}
function setup() {
  createCanvas(1920, 1080);
  a  = new planet(600,600,0,17);
  b  = new planet(500,600,0,10);
  c  = new planet(600,500,0,13);
  d  = new planet(500,500,0,7);
  e = new planet(800,800,10,0,0.5);
}

function draw() {
	noStroke();
  background(220,220,220);
  fill(225,225,0);
  ellipse(width/2,height/2,50,50);
  fill(23,123,32);
  a.attract();
  a.move();
  a.display();
  b.attract();
  b.move();
  b.display();
  c.attract();
  c.move();
  c.display();
  d.attract();
  d.move();
  d.display();
  e.attract();
  e.move();
  e.display();
}

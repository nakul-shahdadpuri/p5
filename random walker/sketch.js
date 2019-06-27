class walker
{
	constructor(a,b,v)
	{
		this.x = a;
		this.y = b;
		this.v = v;
	}
	move()
	{
		this.x = this.x + random(-this.v,this.v)
		this.y = this.y + random(-this.v,this.v)
	}
	display()
	{
		strokeWeight(2);
		point(this.x,this.y)
	}
};
function setup() {
  createCanvas(1920, 1080);
  background(220);
  a = new walker(width/2,height/2,5);
  b = new walker(width/2,height/2,5)
}

function draw() {
	a.display();
	a.move();
	b.display();
	b.move();
}
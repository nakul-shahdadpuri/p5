class dna{
	constructor(x,y,s,r = 0,g = 0,b = 0)
	{
		this.positionx = x;
		this.positiony = y;
		this.size = s;
		this.red = r;
		this.green = g;
		this.blue = b;
	}
	display()
	{
	noStroke();
	fill(this.red,this.green,this.blue);
	ellipse(this.positionx,this.positiony,this.size,this.size);
	}
	fitness()
	{
		let fitness = map(this.red,0,255,0,1);
		return fitness;
	}
	crossover(partner)
	{
		let child = new dna(this.positionx,this.positiony)
		child.size = (this.size + partner.size)/2;
		child.red = (this.red + partner.red)/2;
		child.blue = (this.blue + partner.blue)/2;
		child.green = (this.green + partner.green)/2;
		return child;
	}
	mutation(mutation_index = 0.01)
	{
		if(random(1)<mutation_index)
		{
			this.size = random(this.size-1,this.size+1);
		}
		if(random(1)<mutation_index)
		{
			this.red = random(this.red-5,this.red+5);
		}
		if(random(1)<mutation_index)
		{
			this.blue = random(this.blue-5,this.blue+5);
		}
		if(random(1)<mutation_index)
		{
			this.green = random(this.green-5,this.green+5);
		}
	}
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
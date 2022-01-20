var box1,box2,box3

function setup() 
{
  createCanvas(400, 400);
  box1=new Box();
  box2=new Box();
  box3=new Box();

}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box3.show();
  box1.setspeed(4);
  box2.setspeed(8);
  box3.setspeed(6);
}


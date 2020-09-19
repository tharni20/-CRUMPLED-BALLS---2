class Ball {
    constructor(x, y,radius) {
      var options = {
          'isStatic': false,
          'restitution':0,
          'friction':6.5,
          'density':1.5
      }
      
      this.image = loadImage ("paper.png");
      this.body = Bodies.circle(x,y,radius/2,options)
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate(angle);
      //ellipseMode(RADIUS);
      //strokeWeight(4);
      //stroke("pink");
      //fill("purple");
      imageMode(CENTER)
      image (this.image, 0,0 ,this.radius, this.radius)
      pop();
    }
  };
  
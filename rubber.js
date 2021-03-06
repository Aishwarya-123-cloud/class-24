class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius / 2, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      ellipse(0, 0, this.radius);
      pop();
    }
  };
  
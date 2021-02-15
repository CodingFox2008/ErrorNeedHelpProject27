class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
       
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options =  {

            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
            // stiffness: 0.06,
            // length: 10


        }


        this.rope = Constraint.create(options);

        World.add(world,this.rope);

        

    }


    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;

        strokeWeight(2);

        // var Anchor1X = pointA.x;
        // var Anchor1Y = pointA.y;

        // var Anchor2X = pointB.x+this.offsetX;
        // var Anchor2Y = pointB.y+this.offsetY;
     
        // line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

        push();
        strokeWeight(4);
        stroke("yellow")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }



}
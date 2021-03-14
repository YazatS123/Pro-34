class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.bodyA = bodyA;
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
}
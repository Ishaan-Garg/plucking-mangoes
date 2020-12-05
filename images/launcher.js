class Launcher{
    constructor(bodyA, pointB){
    
    var options={
    bodyA : bodyA,
    pointB: pointB,
    length:15     
    }    

    this.body= Constraint.create(options)
    World.add(world.this.body)

    }
display(){

}    
}
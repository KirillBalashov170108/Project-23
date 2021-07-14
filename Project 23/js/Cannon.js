class Cannon{
 
    constructor(x,y,w,h,angle){
      this.width=w
      this.heigth=h
      this.x=x
      this.y=y
    }

display(){
push()
translate(this.x,this.y)
rotate(this.angle)
fill("black")
rect(-10,-20,this.width,this.height)
arc(this.x,this.y,80,180,PI,TWO_PI)
pop()

}

}
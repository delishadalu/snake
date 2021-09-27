class Food {
    constructor(x,y){
   this.body= createSprite(x,y)
  this.image=loadImage("apple.png")
  this.body.addImage(this.image)
  this.body.scale=0.2
    }
}

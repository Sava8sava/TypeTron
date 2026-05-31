export interface PlayerConfig{
  xcord : number;
  ycord : number;
  color : string;
}

interface Point{
  x : number;
  y : number;
}

export class Player{
    public xcord: number;
    public ycord: number;
    public tracer : Point[] = [];
    public color : string;
    private speed : number = 10;
    public traceColor = 'green';

    constructor(config : PlayerConfig){
      this.xcord = config.xcord
      this.ycord = config.ycord
      this.color = config.color
      this.saveTrace();
    }
    
    private saveTrace(){
      this.tracer.push({x : this.xcord, y : this.ycord});
      
      if(this.tracer.length > 50){
        this.tracer.shift();
      }
    }

    movePlayer(key : string){
      if(key === "ArrowRight") this.xcord += this.speed;
      if(key === "ArrowLeft") this.xcord -= this.speed;
      if(key === "ArrowUp") this.ycord -= this.speed;
      if(key === "ArrowDown") this.ycord += this.speed;
      this.saveTrace();
    }
}

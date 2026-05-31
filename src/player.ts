export interface PlayerConfig{
  xcord : number;
  ycord : number;
  color : string;
}

interface Point{
  x : number;
  y : number;
}

const enum PlayerPossibleDirection{Up,Down,Left,Right};

export class Player{
    public xcord: number;
    public ycord: number;
    private playerDirection : number = PlayerPossibleDirection.Down;
    public tracer : Point[] = [];
    public color : string;
    private speed : number = 3;
    public traceColor = 'red';

    constructor(config : PlayerConfig){
      this.xcord = config.xcord
      this.ycord = config.ycord
      this.color = config.color
      this.saveTrace();
    }
    
    private saveTrace(){
      this.tracer.push({x : this.xcord, y : this.ycord}); 
    }

    changePlayerDirection(key : string){
      if(key === "ArrowRight" && this.playerDirection != PlayerPossibleDirection.Left) this.playerDirection = PlayerPossibleDirection.Right;
      if(key === "ArrowLeft" && this.playerDirection != PlayerPossibleDirection.Right) this.playerDirection = PlayerPossibleDirection.Left;
      if(key === "ArrowUp" && this.playerDirection != PlayerPossibleDirection.Down) this.playerDirection = PlayerPossibleDirection.Up;
      if(key === "ArrowDown" && this.playerDirection != PlayerPossibleDirection.Up) this.playerDirection = PlayerPossibleDirection.Down;
    }

    updatePosition() {
      switch (this.playerDirection) {
          case PlayerPossibleDirection.Right: this.xcord += this.speed; break;
          case PlayerPossibleDirection.Left:  this.xcord -= this.speed; break;
          case PlayerPossibleDirection.Up:    this.ycord -= this.speed; break;
          case PlayerPossibleDirection.Down:  this.ycord += this.speed; break;
      }
      this.saveTrace(); // Salva o rastro enquanto ele anda sozinho
    }
  }

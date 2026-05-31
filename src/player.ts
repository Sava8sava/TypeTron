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
    public color : string;
    private speed : number = 1;
    public traceColor = 'red';
    public isPlayerDead = false;

    constructor(config : PlayerConfig){
      this.xcord = config.xcord
      this.ycord = config.ycord
      this.color = config.color

    }
       
    //checa se o player bateu numa parede ou no proprio tracer
    public isPlayerCrash(boardWidth : number, boardHeight : number) : boolean{
      if (this.xcord < 0 || this.xcord > boardWidth || this.ycord < 0 || this.ycord > boardHeight) {
          this.isPlayerDead = true;
          return true;
      }
      return false;
    }

    changePlayerDirection(keys : {[key :string] : boolean}){
      if(keys["ArrowRight"] && this.playerDirection != PlayerPossibleDirection.Left) this.playerDirection = PlayerPossibleDirection.Right;
      if(keys["ArrowLeft"] && this.playerDirection != PlayerPossibleDirection.Right) this.playerDirection = PlayerPossibleDirection.Left;
      if(keys["ArrowUp"] && this.playerDirection != PlayerPossibleDirection.Down) this.playerDirection = PlayerPossibleDirection.Up;
      if(keys["ArrowDown"] && this.playerDirection != PlayerPossibleDirection.Up) this.playerDirection = PlayerPossibleDirection.Down;
    }

    updatePosition() {
      switch (this.playerDirection) {
          case PlayerPossibleDirection.Right: this.xcord += this.speed; break;
          case PlayerPossibleDirection.Left:  this.xcord -= this.speed; break;
          case PlayerPossibleDirection.Up:    this.ycord -= this.speed; break;
          case PlayerPossibleDirection.Down:  this.ycord += this.speed; break;
      }
    }
  }

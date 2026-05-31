import { Player } from './player';
import { Board } from './board';
import { Renderer } from './renderer';

const BOARDCOLOR = 'gray';

export class Game {
    private board: Board;
    private player1: Player;
    private renderer: Renderer;
    private keyPressed: { [key: string]: boolean} = {};

    private lastUpdateTime: number = 0;
    private updateTimeInterval: number = 100;

    constructor(ctx: CanvasRenderingContext2D) {
        this.board = new Board({ width: 800, height: 600, color: BOARDCOLOR });
        this.player1 = new Player({ xcord: 40, ycord: 30, color: 'blue' });
        this.renderer = new Renderer(ctx);

        this.initInput();
        this.spawnPlayer();
    }
    
    private spawnPlayer() {
        this.board.grid[this.player1.xcord][this.player1.ycord] = 1;
    }

    // Configura os ouvintes de teclado vinculados a este jogo
    private initInput() {
        window.addEventListener('keydown', (e) => {
            this.keyPressed[e.key] = true;
        });

        window.addEventListener('keyup', (e) =>{
          this.keyPressed[e.key] = false;
        });
    }
    
    private handleInput() {
        this.player1.changePlayerDirection(this.keyPressed);
    }

    // O loop do jogo transformado em um método da classe
    public start = (timestamp : number = 0) => {
        this.handleInput();
        const deltaTime = timestamp - this.lastUpdateTime;
        
      if (!this.player1.isPlayerDead && deltaTime >= this.updateTimeInterval) {
          this.player1.updatePosition();          
          if(this.board.isOccupied(this.player1.xcord, this.player1.ycord)){
            console.log("bateu!");
            this.player1.isPlayerDead = true;
          }else{
            this.board.grid[this.player1.xcord][this.player1.ycord] = 1; 
          }
          this.lastUpdateTime = timestamp;
      }
          this.renderer.render(this.board, this.player1);
          requestAnimationFrame(this.start);
    }
  }


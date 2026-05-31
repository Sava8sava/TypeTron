import { Player } from './player';
import { Board } from './board';
import { Renderer } from './renderer';

const BOARDCOLOR = 'gray';

export class Game {
    private board: Board;
    private player1: Player;
    private renderer: Renderer;
    private keyPressed: { [key: string]: boolean} = {};

    constructor(ctx: CanvasRenderingContext2D) {
        this.board = new Board({ width: 800, height: 600, color: BOARDCOLOR });
        this.player1 = new Player({ xcord: 100, ycord: 100, color: 'blue' });
        this.renderer = new Renderer(ctx);

        this.initInput();
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
    public start = () => {
        if(!this.player1.isPlayerDead){
          this.handleInput();
          this.player1.updatePosition();
          if(this.player1.isPlayerCrash(800,600)){
            console.log("bateu!");
          }
        
          this.renderer.render(this.board, this.player1);
          requestAnimationFrame(this.start);
    }
  }
}

import { Player } from './player';
import { Board } from './board';

export class Renderer {
  private ctx: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.ctx = context;
  }

  // O método principal que limpa e desenha tudo
  render(board: Board, player: Player) {
    this.clear(); 
    this.drawBoard(board);
    this.drawTrace(player);
    this.drawPlayer(player);
  }

  private clear() {
    // Limpa todo o canvas antes de desenhar o próximo frame
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  private drawBoard(board: Board) {
    this.ctx.fillStyle = board.color;
    this.ctx.fillRect(0, 0, board.width, board.height);
  }

  private drawPlayer(player: Player) {
    this.ctx.fillStyle = player.color; // Ou player.color
    this.ctx.fillRect(player.xcord, player.ycord, 10, 10);
  }

  private drawTrace(player : Player) {
    this.ctx.fillStyle = player.traceColor;
    player.tracer.forEach(point =>{
      this.ctx.fillRect(point.x,point.y,10,10);
    });
  }
}

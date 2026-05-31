import { Player } from './player';
import { Board } from './board';

export class Renderer {
  private ctx: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.ctx = context;
  }

  render(board: Board, player: Player) {
    this.clear(); 
    this.drawBoard(board);
    this.drawGridContents(board, player)
    this.drawPlayer(player, board.gridSize);
  }

  private clear() {
    // Limpa todo o canvas antes de desenhar o próximo frame
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
 
  private drawBoard(board: Board) {
    this.ctx.fillStyle = board.color;
    this.ctx.fillRect(0, 0, board.width, board.height);
  }
  
  private drawGridContents(board: Board, player: Player) {
    for (let x = 0; x < board.cols; x++) {
      for (let y = 0; y < board.rows; y++) {
        const cellValue = board.grid[x][y];

        if (cellValue === 3) {
          // É uma borda verde
          this.ctx.fillStyle = "green";
          this.ctx.fillRect(x * board.gridSize, y * board.gridSize, board.gridSize, board.gridSize);
        } else if (cellValue === 1) {
          // É o rastro do Player 1
          this.ctx.fillStyle = player.traceColor;
          this.ctx.fillRect(x * board.gridSize, y * board.gridSize, board.gridSize, board.gridSize);
        }
        // Se colocar um Player 2 no futuro: else if (cellValue === 2) { ... }
      }
    }
  }
 
  private drawPlayer(player: Player, gridSize : number) {
    if (player.isPlayerDead) return;
    this.ctx.fillStyle = player.color;
    this.ctx.fillRect(player.xcord * gridSize, player.ycord * gridSize, gridSize, gridSize);
  }
}

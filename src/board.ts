
export interface BoardInterface{
  width : number;
  height : number;
  color : string;  
}

export class Board{
  readonly width : number;
  readonly height : number;
  readonly color : string;
  readonly gridSize : number = 10; 
  readonly cols: number;
  readonly rows: number;
  
  public grid : number[][] = [];

  constructor(config : BoardInterface){
    this.width = config.width;
    this.height = config.height;
    this.color = config.color;
    
    this.cols = this.width / this.gridSize;
    this.rows = this.height / this.gridSize;
    this.initGrid()
  }

  private initGrid() {
      for (let x = 0; x < this.cols; x++) {
        this.grid[x] = [];
        for (let y = 0; y < this.rows; y++) {
          // Opcional: Você pode marcar as bordas (edges) diretamente na matriz como parede (ex: valor 3)
          if (x === 0 || x === this.cols - 1 || y === 0 || y === this.rows - 1) {
              this.grid[x][y] = 3; // 3 representa a borda/parede
          } else {
              this.grid[x][y] = 0; // 0 representa espaço vazio
          }
        }
      }
    }

    // Método utilitário para checar se uma posição está ocupada
    public isOccupied(gridX: number, gridY: number): boolean {
      // Se saiu dos limites da matriz, considera ocupado (colisão)
      if (gridX < 0 || gridX >= this.cols || gridY < 0 || gridY >= this.rows) {
          return true;
      }
      // Se o valor for diferente de 0, tem um rastro ou parede ali
      return this.grid[gridX][gridY] !== 0;
    }
}

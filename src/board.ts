export interface BoardInterface{
  width : number;
  height : number;
  color : string;
}

export class Board{
  readonly width : number;
  readonly height : number;
  readonly color : string;
  
  constructor(config : BoardInterface){
    this.width = config.width;
    this.height = config.height;
    this.color = config.color;
  }
}

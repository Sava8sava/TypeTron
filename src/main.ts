import { Player } from './player';
import { Board } from './board';
import { Renderer } from './renderer';

// pega o elemento canvas do HTML
const canvas = document.getElementById("tela") as HTMLCanvasElement
canvas.width = 800;
canvas.height = 600;
// pega o "contexto" — é por ele que você desenha
const ctx = canvas.getContext("2d")!

const board = new Board({width : 800, height : 600, color : 'gray'});
const player1 = new Player({xcord : 100, ycord : 100, color : 'blue'});
const renderer = new Renderer(ctx);

function loop(){
    renderer.render(board,player1);
    requestAnimationFrame(loop);
    player1.updatePosition();
}

window.addEventListener('keydown', (e) =>{
  player1.changePlayerDirection(e.key);
});

loop();


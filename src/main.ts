import { Game } from './game';

const canvas = document.getElementById("tela") as HTMLCanvasElement;
canvas.width = 800;
canvas.height = 600;

// Pega o "contexto" de renderização
const ctx = canvas.getContext("2d")!;

// Instancia a classe Game passando o contexto e inicia o loop
const game = new Game(ctx);
game.start();

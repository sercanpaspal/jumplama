import Game from './Game';
import Node from './Node';

export default class Interface extends Node {
    constructor(){
        super(0, 0);
        this.isPhysics = false;
        this.collidable = false;
    }
    draw(){
        Game.ctx.fillStyle = "#5E308C"
        Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.height);

        if(Game.bonusMode){
            Game.ctx.fillStyle = "#8C3FBF"
            Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.height - (Game.bonusTimer * (Game.canvas.height / Game.bonusTimeLimit)));
        }

        Game.ctx.font = "120px Arial";
        Game.ctx.fillStyle = "#fff";
        Game.ctx.globalAlpha = 0.1 ;
        Game.ctx.textAlign = "center"; 
        Game.ctx.textBaseline = "middle";
        Game.ctx.fillText(Game.score, Game.canvas.width / 2, Game.canvas.height / 2);
        Game.ctx.globalAlpha = 1;

    }
}
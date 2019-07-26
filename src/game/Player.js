import Game from './Game';
import Sprite from './Sprite';
import Input from './Input';
import Block from './Block';
import Bonus from './Bonus';

export default class Player extends Sprite {
    constructor(){
        super(0, Game.canvas.height / 2, 39, 39, 90, {w: -1, h: 1});

        this.image = Game.image("lama");

        this.weight = 2.5;

        this.towards = false;

        this.ticksPerFrame = 4;
        this.numberOfFrames = 6;

        this.background = "#F25244";
    }
    update(){
        super.update();

        if(Input.GetKeyDown(" ") || Input.GetMouseButtonDown(0)) this.onMove();

        this.towards = this.x > (Game.canvas.width / 2) ? true : false;

        this.scale.h = this.towards ? -1 : 1;

        if(this.x + this.w > Game.canvas.width){
            this.x = Game.canvas.width - this.w;
            this.onWall();
        }else if(this.x < 0){
            this.x = 0;
            this.onWall();
        }

        if(this.y > Game.canvas.height) Game.over();
    }
    onMove(){
        this.vY = -4
        this.vX = 10 * (this.towards ? -1 : 1); 
    }

    onWall(){
        this.vX = 0;

        Game.score += 1;
    }
    onCollision(node){
        if(node instanceof Block && Game.bonusMode){
            Game.score += 3;
            node.destroy();
        }else if(node instanceof Block){
            Game.over();
        }else if(node instanceof Bonus){
            node.destroy();
            Game.bonus();
        }
    }
}
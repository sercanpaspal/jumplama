import Game from './Game';

export default class Node {
    constructor(x, y, w, h, angle, scale){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle || 0;
        this.scale = scale || {w:1, h:1};
        this.vY = 0;
        this.vX = 0;
        this.speed = 1;
        this.isPhysics = true;
        this.collidable = true;
        this.weight = 1;

        this.id = Date.now();
    }
    update(){
        this.x += this.vX * this.speed;
        this.y += this.vY * this.speed;

        if(this.isPhysics) this.physics();
    }
    draw(){
        Game.ctx.save();
        Game.ctx.translate(this.x + (this.w * 0.5), this.y + (this.h * 0.5));
        Game.ctx.rotate(this.angle*Math.PI/180);
        Game.ctx.scale(this.scale.w, this.scale.h);
        Game.ctx.translate(-(this.x + (this.w * 0.5)), - (this.y + (this.h * 0.5)));
        Game.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        Game.ctx.restore();
    }
    onCollision(node){
        
    }
    onCollisionExit(node){

    }
    destroy(){
        Game.nodes = Game.nodes.filter((node) => node.id!==this.id);
    }
    physics(){
        if(this.vX > 0)
            this.vX -= Game.xN;
        else if(this.vX < 0)
            this.vX += Game.xN;
        else
            this.vX = 0;
        
        if(this.vY < Game.g)
            this.vY += Game.vN * this.weight;
        else
            this.vY = Game.g;
    }
}
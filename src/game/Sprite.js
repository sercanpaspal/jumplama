import Game from './Game';
import Node from './Node';

export default class Sprite extends Node {
    update(){
        super.update();

        this.tickCount = (this.tickCount || 0) + 1;
        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;

            this.frameIndex = this.frameIndex < this.numberOfFrames - 1 ? this.frameIndex + 1 : 0;
        }
    }

    draw(){
        Game.ctx.save();
        Game.ctx.translate(this.x + (this.w * 0.5), this.y + (this.h * 0.5));
        Game.ctx.rotate(this.angle*Math.PI/180);
        Game.ctx.scale(this.scale.w, this.scale.h);
        Game.ctx.translate(-(this.x + (this.w * 0.5)), - (this.y + (this.h * 0.5)));
        Game.ctx.drawImage(
            this.image,
            this.frameIndex * this.w,
            0,
            this.w,
            this.h,
            this.x,
            this.y,
            this.w,
            this.h
        );
        Game.ctx.restore();
    }
}
import Game from './Game';
import Sprite from './Sprite';

export default class Bonus extends Sprite {
    constructor(x, y){
        super(x, y, 32, 32);

        this.image = Game.image("redBonus");

        this.ticksPerFrame = 4;
        this.numberOfFrames = 6;

        this.y = -this.h;
        this.speed = 4;
    }
}
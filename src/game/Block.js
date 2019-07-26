import Game from './Game';
import Node from './Node';

export default class Block extends Node {
    constructor(x, y){
        super(x, y, 50, 50);

        this.image = Game.image("block");
        this.y = -this.h;
        this.speed = 2;
    }
}
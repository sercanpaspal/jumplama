import Timer from './Timer';

import Player from './Player';
import Block from './Block';
import Bonus from './Bonus';
import Interface from './Interface';

import block from './assets/block.png';
import redBonus from './assets/red-bonus.png';
import lama from './assets/lama.png';

export default class Game {
    static canvas;
    static ctx;
    static loopRef;
    static bonusMode = false;
    static bonusTimer = 0;
    static bonusTimeLimit = 600;
    static score = 0;
    static nodes = [];
    static images = {};
    static timers = {};
    static timer = 0;
    static g = 1;
    static xN = 0.1;
    static vN = 0.1;
    constructor(canvas, scoreListener){
        Game.scoreListener = scoreListener;
        Game.canvas = canvas;
        Game.ctx = Game.canvas.getContext("2d");
        Game.canvas.width = 300;
        Game.canvas.height = 500;
    }
    start(){
        cancelAnimationFrame(Game.loopRef);
        Game.isOver = false;
        Game.score = 0;
        Game.nodes = [];

        Game.timers.BlockSpawner = new Timer(() => Game.nodes.push( new Block(Game.rnd(0, Game.canvas.width - 50)) ), 100);
        Game.timers.BonusSpawner = new Timer(() => Game.nodes.push( new Bonus(Game.rnd(0, Game.canvas.width - 32)) ), 500);

        this.loadimages().then(() => this.init());
    }
    static over(){
        Game.scoreListener(Game.score);
        Game.score = 0;
        Game.isOver = true;
    }
    static rnd = (min,max) => Math.floor(Math.random()*(max-min+1)+min );
    static bonus(){
        Game.bonusTimer = 0;
        Game.bonusMode = true;
        Game.timers.BonusSpawner.stop();
    }
    static stopBonus(){
        Game.bonusMode = false;
        Game.timers.BonusSpawner.start();
    }
    static image = (name) => Game.images.hasOwnProperty(name) ? Game.images[name] : new Image();
    async loadimage(name, src){
        return new Promise(resolve => {
            let img = new Image();
            img.onload = resolve(img);
            img.src = src;
            Game.images[name] = img;
        });
    }
    loadimages(){
        return Promise.all([
            this.loadimage('block', block),
            this.loadimage('redBonus', redBonus),
            this.loadimage('lama', lama),
        ]);
    }
    init(){
        Game.nodes.push(new Interface());
        Game.nodes.push(new Player());

        Game.loopRef = requestAnimationFrame(this.loop.bind(this));
    }
    loop(){
        if(Game.isOver) return false;
        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

        Game.bonusTimer++;
        if(Game.bonusTimer>Game.bonusTimeLimit){
            Game.stopBonus();
            Game.bonusTimer = 0;
        }

        for (var key in Game.timers) Game.timers[key].update();

        for(let i = 0;i < Game.nodes.length; i++){
            let node = Game.nodes[i];
            node.update();
            if(node.collidable) this.coll(node)
            node.draw();
        }

        Game.loopRef = requestAnimationFrame(this.loop.bind(this));
    }
    coll(node){
        for(let i = 0;i < Game.nodes.length;i++){
            let otherNode = Game.nodes[i];
            if(node!==otherNode && otherNode.collidable){
                this.boxColl(node, otherNode) ? node.onCollision(otherNode) : node.onCollisionExit(otherNode);
            }
        }
    }
    boxColl(n1, n2){
        var l1 = n1.x;
        var t1 = n1.y;
        var r1 = l1 + n1.w;
        var b1 = t1 + n1.h;

        var l2 = n2.x;
        var t2 = n2.y;
        var r2 = l2 + n2.w;
        var b2 = t2 + n2.h;

        if (b1 < t2 || t1 > b2 || r1 < l2 || l1 > r2)
            return false;
        return true;
    }
}
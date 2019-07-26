import React, { useEffect } from 'react';
import Game from './Game';

export default function({handleScore, handleGame}){
    const canvasRef = React.useRef(null);

    useEffect(() => {
        const game = new Game( canvasRef.current, handleScore );
        game.start();

        handleGame(game);
    }, []);

    

    return <canvas ref={canvasRef} />
}

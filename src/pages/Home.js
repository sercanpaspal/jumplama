import React, { useState, useEffect } from 'react';
import Game from '../game';
import Modal from '../components/Modal';
import SaveScore from '../components/SaveScore';

export default function Home(){
	const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);
    const [game, setGame] = useState(null);

    useEffect(() => {
        document.title = "Jumplama - Play";
    }, []);

    function onScore(score){
        setShowModal(true);
        setScore(score);
    }

    const closeHandler = () => {
        setShowModal(false);
        game.start();
    }
    
    return (
        <div>
            <Modal closeHandler={closeHandler} show={showModal}>
                <SaveScore closeHandler={closeHandler} score={score} />
            </Modal>
            <Game handleGame={(game) => setGame(game)} handleScore={onScore} />
        </div>
    )
}
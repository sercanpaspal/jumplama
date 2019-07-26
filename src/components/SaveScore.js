import React, { useState, useEffect } from 'react';
import {addCollection} from '../agent';

export default function SaveScore({score, closeHandler}){
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        
    }, []);

    const saveScore = () => {
        setLoading(true);
        addCollection('scoreboard', {
            score: score,
            username: username
        }).then(() => {
            setSaved(true);
            setLoading(false);
        });
    }

    return (
        <div id="save-score">
            <h2>{score} <small>PTS</small></h2>
            {
                saved ? (
                    <div>Saved!</div>
                ) : (
                    <div>
                        <input value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        <button onClick={saveScore} disabled={loading}>Save Score</button>
                    </div>
                )
            }
            <div>
                <button onClick={closeHandler}>Play Again</button>
            </div>
        </div>
    );
}
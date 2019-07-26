import React, {useState, useEffect} from 'react';
import {getCollections} from '../agent';

export default function ScoreBoard(){
    const [scoreList, setScoreList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Jumplama - Scoreboard";

        getCollections("scoreboard").then(list => {
            const rows = list.docs.map(doc => doc.data());
            setScoreList(rows);
            setLoading(false);
        })
    }, []);

    return loading ? (
        <div>Loading...</div>
    ) : (
        <table id="scoreboard">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {
                    scoreList.map((user, _i) => {
                        return (
                            <tr key={_i}>
                                <td>{user.username}</td>
                                <td>{user.score} <small>PTS</small></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
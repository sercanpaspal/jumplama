import React from 'react';
import { Link } from "react-router-dom";

export default class App extends React.Component {
    render(){
        return (
            <div id="header">
                <Link to="/">Game</Link>
                <Link to="/scoreboard">Score Board</Link>
            </div>
        )
    }
}

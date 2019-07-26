import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from './Header';
import {Home, ScoreBoard} from '../pages';

const containerStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column"
	
}

export default function App(){
	return (
		<div>
			<div style={containerStyle}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/scoreboard" component={ScoreBoard} />
					<Route path="*" component={Home}></Route>
				</Switch>
			</div>
		</div>
	)
}
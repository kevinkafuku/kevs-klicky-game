import React from 'react';
import './ScoreBar.css';

const ScoreBar = props => (
	<nav className="container-fluid">
		<p>Score: {props.score}</p>
        <h2>Top Score: {props.topScore}</h2>
        <br/>
        <p>{props.progressMessage}</p>
	</nav>
);
export default ScoreBar;
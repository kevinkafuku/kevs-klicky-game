import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
	<header className ="Jumbotron">
		<h1>Super Mario Memory.</h1>
        <p className="jumboHeading">Let's Play !</p>
        <p className='jumboHeading'> Click on any Mario Character Below, But Beware, Don't click on the same Character twice or you Lose !</p>	
    <nav className="container-fluid progressBar">
		<h3>Score: {props.score}</h3>
        <h3>Top Score: {props.topScore}</h3>
        <br/>
        <p>{props.progressMessage}</p>
	</nav>
    </header>
);

export default Jumbotron;
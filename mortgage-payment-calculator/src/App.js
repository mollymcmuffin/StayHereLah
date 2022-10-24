import React from 'react';
import {Calculator} from './components/Calculator';
import './App.css';
import ReactGA from 'react-ga-gtm';

ReactGA.initialize('UA-179516420-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
	return (
    	<div className="App">
      		<header>
        		<h1>Mortgage Payment Calculator</h1>
      		</header>
      		<Calculator />
    	</div>
  	);
}

export default App;

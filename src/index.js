import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/** Hello World - begin */
ReactDOM.render(
	<h1>Hello, world!</h1>,
	document.getElementById('root')
);
/** Hello World - end */

/** Introducing JSX - begin */
let element = <h1>Hello, world!</h1>;  // using JSX here

function formatName(name) {
	const parts = name.split(' ');
	if (parts.length !== 2) {
		return name;
	}
	const [first, last] = parts;
	return `${last}, ${first}`;
}

function greetUser(name) {
	if (name) {
		const elem = <h1>Hello, {formatName(name)}!</h1>;
		console.log(elem);
		return elem;
	}
	return element;
}

const name = 'Md Rafi Akhtar';
element = <h1>Hello, {name}</h1>;
ReactDOM.render(
	greetUser('Rafi'),
	document.querySelector('#root')
);
/** Introducing JSX - end */

/** Rendering Elements - begin */

/** Create an element that says hello world and shows the time, and render it to the DOM */
function tick() {
	const element = (
		<div>
			<h1>Hello, World!</h1>
			<h2>It is {new Date().toLocaleTimeString()} right now.</h2>
		</div>
	);
	ReactDOM.render(element, document.querySelector('#root'));
	// the above line will create the element and render it
	// once the element is created, it cannot be changed - elements are immutable in React
	// so to update it, the only way is to create a new element, and rerender it in the same location, like below.	
}

setInterval(tick, 1000);
/** Rendering Elements - end */

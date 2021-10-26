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

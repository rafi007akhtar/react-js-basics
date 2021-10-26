import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* === Hello World - begin === */
ReactDOM.render(
	<h1>Hello, world!</h1>,
	document.getElementById('root')
);
/* === Hello World - end === */

/* === Introducing JSX - begin === */
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
/* === Introducing JSX - end === */

/* === Rendering Elements - begin === */
/** Create an element that says hello world and shows the time, and render it to the DOM */
let tick = () => {
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

// setInterval(tick, 1000);  // commenting out, because calling via another way below
/* === Rendering Elements - end === */

/* === Components and Props - begin === */
function WelcomeH1(props) {
	// props are read-only, so the following line would produce an error
	// props.name = 'error: change in prop';

	return (
		<div>
			<h1>Hello, {props.name}</h1>
			{/* Components can be composed of other components, as below: */}
			<WelcomeH2 message="This text will now go away, and the time will show" />
		</div>
	)
	// here, `WelcomeH1` is a "function component"
}

class WelcomeH2 extends React.Component {
	render() {
		return <h2>BTW: {this.props.message}</h2>
		// here, `WelcomeH2` is a "class component"
	}
}

const root = document.querySelector('#root');

// one way to render the component is this:
// element = <WelcomeH1 name='Rafi'></WelcomeH1>;
// ReactDOM.render(element, root);
// another way is this:
ReactDOM.render(<WelcomeH1 name='Rafi' />, root);

// NOTE: here's a challenege to a general convention:
// component names MUST always begin with a capital letter - EVEN when they're functions!
// otherwise, React would mistake them as HTML tags
/* === Components and Props - end === */

/* === State and Lifecycle - begin === */
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, {this.props.user}</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}
ReactDOM.render(<Clock />, root);
/* === State and Lifecycle - end === */

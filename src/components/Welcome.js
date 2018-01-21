import React, { Component } from 'react';

const welcome = 'Welcome to React';

class Welcome extends Component {
	render() {
		return <h1 className="App-title">{this.props.text}</h1>;
	}
}

export default Welcome;

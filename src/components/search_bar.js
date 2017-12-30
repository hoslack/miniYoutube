import React, { Component } from 'react';

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	render() {
		return (
			<div className="search-bar" placeholder="Search">
				<input onChange={event => this.setState({ term: event.target.value })} />
			</div>
		);
	}
}

export default Searchbar;

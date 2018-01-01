import React, { Component } from 'react';

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	render() {
		return (
			<div className="search-bar" placeholder="Search">
				<input onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default Searchbar;

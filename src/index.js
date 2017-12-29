import React, { Component } from 'react';
import reactDom from 'react-dom';
import Searchbar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCSqxoBMTdeHnqDEKoGBYng5uGwzPmI8-A';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		YTSearch({ key: API_KEY, term: 'sufboards' }, videos => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				<Searchbar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

reactDom.render(<App />, document.querySelector('#container'));

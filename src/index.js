import React, { Component } from 'react';
import _ from 'lodash';
import reactDom from 'react-dom';
import Searchbar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyCSqxoBMTdeHnqDEKoGBYng5uGwzPmI8-A';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, videos => {
			this.setState({ videos: videos, selectedVideo: videos[0] });
		});
	}

	render() {
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 500);
		return (
			<div>
				<Searchbar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => {
						this.setState({ selectedVideo });
					}}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

reactDom.render(<App />, document.querySelector('#container'));

import React, { Component } from 'react';
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
		YTSearch({ key: API_KEY, term: 'sufboards' }, videos => {
			this.setState({ videos: videos, selectedVideo: videos[0] });
		});
	}

	render() {
		return (
			<div>
				<Searchbar />
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

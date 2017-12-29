import React, { Component } from 'react';
import reactDom from 'react-dom';
import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyCSqxoBMTdeHnqDEKoGBYng5uGwzPmI8-A';

const App = () => (
	<div>
		<Searchbar />
	</div>
);

reactDom.render(<App />, document.querySelector('#container'));

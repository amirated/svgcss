import React, { Component } from 'react';
import Svg1 from './Svg1';


class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			error: null,
			isLoaded: false
	    }
	}

	componentDidMount() {
		
		// dispatch({ type: AGENT_LIST_FETCHED })
	}

	render () {
		return (
				<div>
					<Svg1 />
				</div>
			)
	}
}

export default App;
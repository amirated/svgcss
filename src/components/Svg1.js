import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Table } from 'antd';


class Svg1 extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      error: null,
	      isLoaded: false
	    };
	  }

	componentDidMount() {
		// dispatch({ type: AGENT_LIST_FETCHED })
	}

	// onChange = (pagination, filters, sorter) => {
	//     console.log('params', pagination, filters, sorter);
	// };

	render () {
		return (
				<div className="container">
					<h1>9 svg example with animation</h1>
					<svg viewBox="0 0 10 10" className="svg-1">
						<path d="M2,2 L8,8" />
					</svg>
					<svg viewBox="0 0 10 10" className="svg-2">
						<path d="M2,8 L5,2 L8,8" />
					</svg>

					<svg viewBox="0 0 10 10" class="svg-3">
						<path d="M2,2 Q8,2 8,8" />
					</svg>

					<svg viewBox="0 0 10 10" class="svg-4">
						<path d="M2,5 C2,8 8,8 8,5" />
					</svg>

					<svg viewBox="0 0 10 10" class="svg-5">
						<path d="M2,2 L8,2 L2,5 L8,5 L2,8 L8,8" />
					</svg>

					<svg viewBox="0 0 10 10" class="svg-6">
						<path d="M2,5 A 5 25 0 0 1 8 8" />
					</svg>

					<svg viewBox="0 0 10 10" class="svg-7">
						<path d="M2,5 S2,-2 4,5 S7,8 8,4" />
					</svg>

					<svg viewBox="0 0 10 10" class="svg-8">
						<path d="M5,2 Q 2,5 5,8" />
					</svg>

					<svg viewBox="0 0 10 10" class="svg-9">
						<path d="M2,2 Q5,2 5,5 T8,8" />
					</svg>
				</div>
			)
	}
}
// export default connect()(Svg1);
export default Svg1;
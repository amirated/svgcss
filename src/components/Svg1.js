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
					<svg class="rect-spiral" viewBox="0 0 100 100">
						<path fill="none" stroke="#000000" strokeWidth="3" 
						d="M50,50
						l0,5
						l5,0
						l0,-10
						l-10,0
						l0,15
						l15,0
						l0,-20
						l-20,0
						l0,25
						l25,0
						l0,-30
						l-30,0
						l0,35
						l35,0
						l0,-40
						l-40,0
						l0,45
						l45,0
						l0,-50
						l-50,0
						l0,55
						l55,0
						l0,-60
						l-60,0
						l0,65
						l65,0
						l0,-70
						l-70,0	
						"/>
					</svg>
					<svg id="moon" viewBox="0 0 100 100">
						<path fill="none" stroke="#000000" strokeWidth="3" strokeMiterlimit="10" 
						d="M50,50
						c0,1,2,4,4,4
						c2,-2,4,-4,0,-8
						c-2,-2,-10,-6,-10,8
						c4,8,12,10,18,2
						"/>
					</svg>
					<svg viewBox="0 0 10 10" className="svg-1">
						<path d="M2,2 L8,8" />
					</svg>
					<svg viewBox="0 0 10 10" className="svg-2">
						<path d="M2,8 L5,2 L8,8" />
					</svg>

					<svg viewBox="0 0 10 10" className="svg-3">
						<path d="M2,2 Q8,2 8,8" />
					</svg>

					<svg viewBox="0 0 10 10" className="svg-4">
						<path d="M2,5 C2,8 8,8 8,5" />
					</svg>

					<svg viewBox="0 0 10 10" className="svg-5">
						<path d="M2,2 L8,2 L2,5 L8,5 L2,8 L8,8" />
					</svg>

					<svg viewBox="0 0 10 10" className="svg-6">
						<path d="M2,5 A 5 25 0 0 1 8 8" />
					</svg>

					<svg viewBox="0 0 10 10" className="svg-7">
						<path d="M2,5 S2,-2 4,5 S7,8 8,4" />
					</svg>

					<svg viewBox="0 0 10 10" className="svg-8">
						<path d="M5,2 Q 2,5 5,8" />
					</svg>

					<svg viewBox="0 0 10 10" className="svg-9">
						<path d="M2,2 Q5,2 5,5 T8,8" />
					</svg>

					<svg version="1.1" id="sun" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
						<circle fill="none" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" cx="49.98" cy="50.04" r="10.009"/>
						<line fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="50.081" y1="32.176" x2="50.081" y2="27.988"/>
						<line fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="50.081" y1="67.991" x2="50.081" y2="72.179"/>
						<line fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="62.709" y1="37.307" x2="65.671" y2="34.345"/>
						<line fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="37.386" y1="37.373" x2="34.424" y2="34.412"/>
						<line fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="62.667" y1="62.71" x2="65.629" y2="65.672"/>
						<line fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeMiterlimit="10" x1="37.344" y1="62.644" x2="34.383" y2="65.605"/>
						<line fill="none" stroke="#000000" strokeWidth="4.0484" strokeLinecap="round" strokeMiterlimit="10" x1="31.966" y1="50.009" x2="28.026" y2="50.009"/>
						<line fill="none" stroke="#000000" strokeWidth="4.0484" strokeLinecap="round" strokeMiterlimit="10" x1="68.028" y1="50.009" x2="71.969" y2="50.009"/>
					</svg>


					<svg version="1.1" id="moon" viewBox="0 0 100 100">
						<path fill="none" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" 
						d="M40.213,50.278
						c0.141,5.109,4.401,9.368,9.51,9.51
						C55.257,59.94,59.791,55.5,59.791,50
						c0,0-1.373-0.111-1.373-0.111
						c-4.387-0.354-7.883-3.814-8.283-8.198
						L50,40.209
						C44.5,40.209,40.06,44.743,40.213,50.278
						z"/>
					</svg>
					<svg version="1.1" id="moon" viewBox="0 0 100 100" enableBackground="new 0 0 100 100">
						<path fill="none" stroke="#000000" strokeWidth="4" strokeMiterlimit="10" 
						d="M25,30
						c-20,30,15,63,45,35
						c-15,0,-40,-10,-45,-35
						"/>
					</svg>
				</div>
			)
	}
}
// export default connect()(Svg1);
export default Svg1;
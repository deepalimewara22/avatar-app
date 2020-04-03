import React from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

	const Demo = (props) => {
		return	<div className="root">
				<h1>Hello {props.name}</h1>
				<p>This is amazing</p>
				</div>
		}
	

	export default Demo;
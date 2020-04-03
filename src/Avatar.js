import React, {Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


	class Avatar extends Component {
		constructor() {
			super();
			this.state = {
				name: "Welcome to Avatar World"
			} 	
		}
		namechange() {
			this.setState({
				name: "Welcome! You are Subscribed"
			})
		}
		render() {
			const avatarlistarray = [
			{
				id:1,
				name: "Deepali",
				work: "Web Developer"
			},
			{
				id:2,
				name: "Vaibhav",
				work: "Full Stack Developer"
			},
			{
				id:3,
				name: "Joe",
				work: "Tester"
			},
			{
				id:4,
				name: "Rachel",
				work: "UI Developer"
			}
		]

		const avatararray = avatarlistarray.map( (avatarcard, i) => {
			return	<Avatarlist key={i} id={avatarlistarray[i].id} 
						name={avatarlistarray[i].name} 
						work={avatarlistarray[i].work} />
		})
			return (
			<div className="mainpage">
			<h1> {this.state.name} </h1>
			{avatararray}
			<button onClick= { () => this.namechange() }>Subscribe</button>
			</div>
			)

		}
	}

	export default Avatar;
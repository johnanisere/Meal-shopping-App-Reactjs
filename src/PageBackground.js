import  React, {Component } from 'react';
import logo from './logo.svg';
import './PageBackground.css';
import fetch from 'node-fetch';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export default class PageBackground extends Component{

	constructor(props) {
		super(props);
		this.state={
			position:[2,2]
		};
		}
	 /*async getLocation () {
	 	try{
	 			var response= await fetch('http://ip-api.com/json');
	 			var json=await response.json();
	 			this.setState({position:[json.lat,json.lon]});
	 			console.log(this.state.position);
	 		}
	 		catch(e){
	 			this.setState({position:[6.4531,3.3958]})
	 			console.log("we are using a default Location,")
	 		}
	}*/
	componentDidMount() {
					(async()=>{try{
		            			 			var response= await fetch('http://ip-api.com/json');
		            			 			var json=await response.json();
		            			 			this.setState({position:[json.lat,json.lon]});
		            			 			console.log(this.state.position);
		            			 		}
		            			 		catch(e){
		            			 			this.setState({position:[6.4531,3.3958]})
		            			 			console.log("we are using a default Location,")
		            			 		}})()
	}
							   
	render(){
		return (
			<div className="map-holder">
      <Map center={this.state.position} zoom={15} >
        <TileLayer
          attribution=''
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
        </Map>
        </div>
        );
		}
	}
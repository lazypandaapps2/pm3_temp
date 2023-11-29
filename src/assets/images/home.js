import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';

export default class Menu_Home extends Component {
	render() {
		const { clr, height, width } = this.props;
		const xml = `
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.39999 8.99997L12.4 1.99997L21.4 8.99997V20C21.4 20.5304 21.1893 21.0391 20.8142 21.4142C20.4391 21.7893 19.9304 22 19.4 22H5.39999C4.86956 22 4.36085 21.7893 3.98578 21.4142C3.61071 21.0391 3.39999 20.5304 3.39999 20V8.99997Z" stroke="`+ clr + `" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.39999 22V12H15.4V22" stroke="`+ clr + `" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

	`;



		return (

			<SvgXml xml={xml} height={height} width={width} />
		)
	}
}
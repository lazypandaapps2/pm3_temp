/*import * as React from 'react';*/
import React, { Component } from 'react';
import { getDynamicHeight, getDynamicWidth } from '../../helpers/Basics';


import { SvgXml } from 'react-native-svg';
 
const xml = (clr) => {
	return `
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6.43091L6 18.4309" stroke="`+clr+`" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6.43091L18 18.4309" stroke="`+clr+`" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
} ;
export default ({
	clr = '',
	size = getDynamicWidth(20)
}) => <SvgXml xml={xml(clr)} width={size} height={size} />;

/*import * as React from 'react';*/
import React, { Component } from 'react';
import { getDynamicHeight, getDynamicWidth } from '../../helpers/Basics';

import { SvgXml } from 'react-native-svg';/*
import Colors from '../config/colors';
import {getDynamicWidth, getDynamicHeight} from '../helper/basicHelper';*/

const xml = (clr) => {
	return `
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"
 "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8H1M1 8L8 15M1 8L8 1" stroke="`+ clr + `" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
};
export default (props) => <SvgXml xml={xml(props.clr)} width={getDynamicWidth(props.size || 14)} />;

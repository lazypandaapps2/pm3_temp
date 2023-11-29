import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';
// import BasicHelper from '../helpers/Basics';

const xml = (color) => {
    return `
    <?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">

    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z" stroke="#25282B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="#25282B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
`;
};

export default ({ height, width, style, color = 'white' }) => (
    <SvgXml style={style ? style : {}} xml={xml(color)} width={19.795} height={19.795} />
);

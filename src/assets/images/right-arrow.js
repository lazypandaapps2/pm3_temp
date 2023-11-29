import React, { Component } from 'react';
import { SvgXml } from 'react-native-svg';
import { getDynamicHeight, getDynamicWidth } from '../../helpers/Basics';

const xml = (color) => {
    return `
    <?xml version="1.0" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">

    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L7 7L1 1" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    
`;
};

export default ({ height, width, style, color }) => (
    <SvgXml
        style={style ? style : {}}
        xml={xml(color)}
        width={getDynamicWidth(width)}
        height={getDynamicHeight(height)}
    />
);

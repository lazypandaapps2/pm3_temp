//1b1c1e
import React, { Component } from 'react';

import { SvgXml } from 'react-native-svg';

export default class More extends Component {
    render() {
        const { clr, height, width } = this.props;

        const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M4.38794 3.46631H20.3879C20.9184 3.46631 21.4271 3.67702 21.8022 4.05209C22.1772 4.42717 22.3879 4.93588 22.3879 5.46631V11.4663C22.3879 14.1185 21.3344 16.662 19.459 18.5374C17.5836 20.4127 15.0401 21.4663 12.3879 21.4663C11.0747 21.4663 9.77436 21.2077 8.5611 20.7051C7.34785 20.2026 6.24546 19.466 5.31687 18.5374C3.44151 16.662 2.38794 14.1185 2.38794 11.4663V5.46631C2.38794 4.93588 2.59865 4.42717 2.97373 4.05209C3.3488 3.67702 3.85751 3.46631 4.38794 3.46631V3.46631Z" stroke="${clr}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M8.38794 10.4663L12.3879 14.4663L16.3879 10.4663" stroke="${clr}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>
	
`;

        return (

            <SvgXml xml={xml} height={height} width={width} />
        )
    }
}








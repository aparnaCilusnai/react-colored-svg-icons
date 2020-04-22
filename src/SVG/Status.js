import React from 'react';
import {Svg,Path,G} from 'react-native-svg';

const Status = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"   style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
   <G transform="matrix(1,0,0,1,0,-0.586194)">
        <G transform="matrix(1.45935,0,0,1.45935,2.89257,-8.4917)">
            <Circle cx="13.533" cy="22.666" r="4.18" style={{fill:'rgb(56,170,86)'}}/>
        </G>
        <G transform="matrix(0.971545,0,0,0.971545,28.7908,2.56497)">
            <Circle cx="13.533" cy="22.666" r="4.18" style={{fill:'rgb(233,74,60)'}}/>
        </G>
        <G transform="matrix(0.646795,0,0,0.646795,-4.04988,9.92582)">
            <Circle cx="13.533" cy="22.666" r="4.18" style={{fill:'rgb(246,187,26)'}}/>
        </G>
        <G transform="matrix(1,0,0,1,0.344433,0.254866)">
            <Rect x="8.47" y="23.584" width="6.321" height="1.495" style={{fill:'rgb(90,130,194)'}}/>
        </G>
        <G transform="matrix(1,0,0,1,21.6799,0.254866)">
            <Rect x="8.47" y="23.584" width="6.321" height="1.495" style={{fill:'rgb(90,130,194)'}}/>
        </G>
    </G>
</Svg>

);

export default Status
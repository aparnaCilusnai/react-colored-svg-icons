import React from 'react';
import {Svg,Path,G,Rect,Circle} from 'react-native-svg';

const Hexabee = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
    <G id="Hexabee" transform="matrix(0.296875,0,0,0.296875,5,4.99258)">
        <Path d="M86,12L66,0.5C64.8,-0.2 63.3,-0.2 62,0.5L42,12C40.8,12.7 40,14 40,15.5L40,38.5C40,39.9 40.8,41.3 42,42L62,53.5C63.2,54.2 64.7,54.2 66,53.5L86,42C87.2,41.3 88,40 88,38.5L88,15.5C88,14.1 87.2,12.7 86,12Z" style={{fill:'rgb(90,130,194)',fillRule:'nonzero'}}/>
        <Path d="M86,86L66,74.5C64.8,73.8 63.3,73.8 62,74.5L42,86C40.8,86.7 40,88 40,89.5L40,112.5C40,113.9 40.8,115.3 42,116L62,127.5C63.2,128.2 64.7,128.2 66,127.5L86,116C87.2,115.3 88,114 88,112.5L88,89.5C88,88.1 87.2,86.7 86,86Z" style={{fill:'rgb(233,74,60)',fillRule:'nonzero'}}/>
        <Path d="M126,49L106,37.5C104.8,36.8 103.3,36.8 102,37.5L82,49C80.8,49.7 80,51 80,52.5L80,75.5C80,76.9 80.8,78.3 82,79L102,90.5C103.2,91.2 104.7,91.2 106,90.5L126,79C127.2,78.3 128,77 128,75.5L128,52.5C128,51.1 127.2,49.7 126,49Z" style={{fill:'rgb(246,187,26)',fillRule:'nonzero'}}/>
        <Path d="M46,49L26,37.5C24.8,36.8 23.3,36.8 22,37.5L2,49C0.8,49.7 0,51 0,52.5L0,75.5C0,76.9 0.8,78.3 2,79L22,90.5C23.2,91.2 24.7,91.2 26,90.5L46,79C47.2,78.3 48,77 48,75.5L48,52.5C48,51.1 47.2,49.7 46,49Z" style={{fill:'rgb(56,170,86)',fillRule:'nonzero'}}/>
    </G>
</Svg>
);
export default Hexabee
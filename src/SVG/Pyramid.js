import React from 'react';
import {Svg,Path,G,Rect,Circle,Defs,linearGradient} from 'react-native-svg';

const Pyramid = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
       <G transform="matrix(1.1875,0,0,1.30503,5,3.06333)">
        <Path d="M8.548,15.046L23.452,15.046L20.457,9.594L11.543,9.594L8.548,15.046Z" style={{fill:'rgb(56,170,86)',fillRule:'nonzero'}}/>
        <Path d="M12.639,7.6L19.361,7.6L16,1.484L12.639,7.6Z" style={{fill:'rgb(233,74,60)',fillRule:'nonzero'}}/>
        <Path d="M4.457,22.492L27.543,22.492L24.548,17.04L7.452,17.04L4.457,22.492Z" style={{fill:'rgb(90,130,194)',fillRule:'nonzero'}}/>
        <Path d="M3.361,24.486L0,30.602L32,30.602L28.639,24.486L3.361,24.486Z" style={{fill:'rgb(246,187,26)',fillRule:'nonzero'}}/>
    </G>
</Svg>

);
export default Pyramid
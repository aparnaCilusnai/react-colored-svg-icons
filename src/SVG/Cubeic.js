import React from 'react';
import {Svg,Path,G,Rect,Circle} from 'react-native-svg';

const Cubeic = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
     <G id="Cubeic">
        <G transform="matrix(1.46154,0,0,1,0.615385,-2)">
            <Path d="M13.6,7L24.2,25L3,25L13.6,7Z" style={{fill:"rgb(246,187,26)"}}/>
        </G>
        <G transform="matrix(1.46154,0,0,1,0.615385,-2)">
            <Path d="M25.9,23.7L16.8,8.2L29,15.9L25.9,23.7Z" style={{fill:"rgb(233,74,60)"}}/>
        </G>
        <G transform="matrix(-1.46154,0,0,-1,47.3846,50)">
            <Path d="M13.6,7L24.2,25L3,25L13.6,7Z" style={{fill:"rgb(56,170,86)"}}/>
        </G>
        <G transform="matrix(-1.46154,0,0,-1,47.3846,50)">
            <Path d="M25.9,23.7L16.8,8.2L29,15.9L25.9,23.7Z" style={{fill:"rgb(90,130,194)"}}/>
        </G>
    </G>
</Svg>
);
export default Cubeic
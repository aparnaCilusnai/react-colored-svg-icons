import React from 'react';
import {Svg,Path,G,Rect,Circle} from 'react-native-svg';

const Design = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
      <G id="Design" transform="matrix(1,0,0,1,3,3.00521)">
        <G transform="matrix(0.791667,0,0,0.791667,0.416667,0.411458)">
            <Path d="M38.6,28L46.7,28C45.5,20 39.7,13.3 31.9,10.9L31.9,19.5C35.3,21.2 37.8,24.3 38.6,28Z" style={{fill:"rgb(56,170,86)",fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.791667,0,0,0.791667,0.416667,0.411458)">
            <Path d="M20,19.5L20,10.9C12.2,13.2 6.4,20 5.2,28L13.3,28C14.2,24.3 16.7,21.2 20,19.5Z" style={{fill:'rgb(56,170,86)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.791667,0,0,0.791667,0.416667,0.411458)">
            <Path d="M26.9,2.5C26.6,1.8 25.4,1.8 25.1,2.5L23.4,6L28.6,6L26.9,2.5Z" style={{fill:'rgb(233,74,60)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.791667,0,0,0.791667,0.416667,0.411458)">
            <Path d="M30,9C30,8.4 29.5,8 29,8L23,8C22.5,8 22,8.4 22,9L22,28L30,28L30,9Z" style={{fill:'rgb(246,187,26)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.791667,0,0,0.791667,0.416667,0.411458)">
            <Path d="M22,49C22,49.6 22.5,50 23,50L29,50C29.5,50 30,49.6 30,49L30,44L22,44L22,49Z" style={{fill:'rgb(233,74,60)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.791667,0,0,0.791667,0.416667,0.411458)">
            <Path d="M2,30L2,42L7,42L7,35L9,35L9,42L11,42L11,37.8L13,37.8L13,42L16,42L16,35L18,35L18,42L21,42L21,37.8L23,37.8L23,42L25,42L25,35L27,35L27,42L29,42L29,37.8L31,37.8L31,42L34,42L34,35L36,35L36,42L39,42L39,37.8L41,37.8L41,42L43,42L43,35L45,35L45,42L50,42L50,30L2,30Z" style={{fill:'rgb(90,130,194)',fillRule:'nonzero'}}/>
        </G>
    </G>
</Svg>

);
export default Design
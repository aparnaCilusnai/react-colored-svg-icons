import React from 'react';
import {Svg,Path,G,Rect} from 'react-native-svg';

const Workspace = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
    <G id="Workspace" transform="matrix(1.73076,0,0,2.06184,-1574.31,-520.501)">
        <G transform="matrix(1.1729,0,0,0.925234,910.149,253.019)">
            <Path d="M4,12L4,4L16,4L16,7L18,7L18,2L2,2L2,14L8.466,14L8.456,16L5,16L5,18L14.835,18L14.835,16.004L12.889,16.005L12.899,13.992L14.835,13.985L14.835,12L4,12Z" style={{fill:'rgb(246,187,26)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.683658,0,0,0.849821,919.41,254.603)">
            <Path d="M14,9L14,22L22,22L22,9L14,9ZM18,19C17.4,19 17,18.5 17,18C17,17.4 17.4,17 18,17C18.5,17 19,17.4 19,18C19,18.5 18.5,19 18,19ZM20,13L16,13L16,11L20,11L20,13Z" style={{fill:'rgb(90,130,194)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.149533,0,0,0.149533,778.157,216.534)">
            <Rect x="898.386" y="361.369" width="102.25" height="18.25" style={{fill:'rgb(233,74,60)'}}/>
        </G>
        <G transform="matrix(0.149533,0,0,0.08298,778.4,236.115)">
            <Rect x="922.136" y="278.369" width="73.75" height="29.25" style={{fill:'rgb(56,170,86)'}}/>
        </G>
    </G>
</Svg>

);

export default Workspace
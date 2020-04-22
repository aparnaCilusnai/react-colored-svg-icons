import React from 'react';
import {Svg,Path,G,Rect} from 'react-native-svg';

const Activity = ({ style = {},size='100%'}) => (
    <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
    <G id="Activity">
        <G transform="matrix(0.430277,0,0,0.430277,-0.452577,2.10521)">
            <Path d="M59.7,88.2L46.2,54.5L38.7,35.7L26,59.2L5.7,59.2L5.7,49.8L20.4,49.8L40,13.7L54.9,51L61.9,68.3L74.5,49.8L107.96,49.8L107.96,59.2L79.4,59.2L59.7,88.2Z" style={{fill:'rgb(90,130,194)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.342278,0,0,0.40007,12.5482,-2.60186)">
            <Path d="M44.196,27.45C44.364,26.925 44.95,26.5 45.507,26.5L57.493,26.5C58.049,26.5 58.327,26.92 58.119,27.426L51.881,42.574C51.671,43.085 51.956,43.5 52.502,43.5L62.498,43.5C63.051,43.5 63.222,43.847 62.87,44.287L42.001,70.374C40.62,72.101 40.043,71.792 40.711,69.693L46.199,52.445C46.365,51.923 46.044,51.5 45.505,51.5L37.495,51.5C36.946,51.5 36.639,51.066 36.804,50.55L44.196,27.45Z" style={{fill:'rgb(246,187,26)'}}/>
        </G>
        <G transform="matrix(0.959783,0,0,0.969781,-1.74388,0.932286)">
            <Rect x="3.901" y="30.851" width="16.67" height="4.125" style={{fill:'rgb(233,74,60)'}}/>
        </G>
        <G transform="matrix(0.719837,0,0,1.60014,31.1921,-18.5147)">
            <Rect x="3.901" y="30.851" width="16.67" height="4.125" style={{fill:'rgb(56,170,86)'}}/>
        </G>
        <G transform="matrix(0.479892,0,0,0.751581,36.1281,-10.9361)">
            <Rect x="3.901" y="30.851" width="16.67" height="4.125" style={{fill:"rgb(233,74,60)"}}/>
        </G>
        <G transform="matrix(0.695843,0,0,0.751581,31.6857,-5.03609)">
            <Rect x="3.901" y="30.851" width="16.67" height="4.125" style={{fill:"rgb(90,130,194)"}}/>
        </G>
        <G transform="matrix(0.479892,0,0,1.40618,0.128061,-35.3817)">
            <Rect x="3.901" y="30.851" width="16.67" height="4.125" style={{fill:"rgb(56,170,86)"}}/>
        </G>
        <G transform="matrix(0.22195,0,0,1.40618,1.13423,-27.7817)">
            <Rect x="3.901" y="30.851" width="16.67" height="4.125" style={{fill:"rgb(90,130,194)"}}/>
        </G>
    </G>
</Svg>
);

export default Activity

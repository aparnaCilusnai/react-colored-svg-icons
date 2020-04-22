import React from 'react';
import {Svg,Path,G} from 'react-native-svg';

const Shapes = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
     <G id="Shapes">
        <G transform="matrix(0.0752685,0,0,0.0752685,5,8.29759)">
            <Path d="M0,231.818C0.094,289.765 34.108,339.664 83.265,362.792L104.439,326.105L185.515,185.69L195.116,169.067L271.564,301.439C282.932,280.791 289.422,257.07 289.466,231.818C289.326,151.891 224.655,87.231 144.75,87.091C64.8,87.231 0.13,151.892 0,231.818Z" style={{fill:'rgb(246,187,26)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(0.0752685,0,0,0.0752685,5,8.29759)">
            <Path d="M266.614,337.245L195.126,213.451L123.664,337.212L52.187,461.048L195.138,461.048L338.079,461.015L266.614,337.245Z" style={{fill:'rgb(233,74,60)',fillRule:'nonzero'}}/>
        </G>
        <Path d="M33.277,8.298L33.277,35.26L27.908,35.26L26.396,32.642C27.699,30.662 28.457,28.293 28.458,25.746C28.456,18.856 22.911,13.262 16.04,13.183L16.04,8.298L33.277,8.298Z" style={{fill:'rgb(56,170,86)'}}/>
        <Rect x="34.704" y="8.298" width="8.296" height="26.962" style={{fill:'rgb(90,130,194)'}}/>
    </G>
</Svg>

);

export default Shapes
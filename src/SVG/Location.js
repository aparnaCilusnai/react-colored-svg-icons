import React from 'react';
import {Svg,Path,G,Rect,Circle,Defs,linearGradient} from 'react-native-svg';

const Location = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
     <G id="Location" transform="matrix(0.433646,0,0,0.430871,-411.976,-91.8688)">
        <G transform="matrix(1,0,0,1.00778,975.91,217.858)">
            <Path d="M29.465,0C17.397,0 7.616,9.782 7.616,21.85C7.616,33.917 29.465,59.877 29.465,59.877C29.465,59.877 51.316,33.918 51.316,21.85C51.315,9.782 41.532,0 29.465,0ZM29.465,31.716C24.017,31.716 19.598,27.299 19.598,21.85C19.598,16.401 24.017,11.983 29.465,11.983C34.915,11.983 39.332,16.4 39.332,21.85C39.332,27.3 34.915,31.716 29.465,31.716Z" style={{fill:'rgb(246,187,26)',fillRule:'nonzero'}}/>
        </G>
        <G transform="matrix(1.25219,0,0,1.24219,-142.194,-77.7182)">
            <Path d="M903.506,294.772L904.922,320.156L887.027,315.02L893.09,290.262L903.506,294.772Z" style={{fill:'rgb(233,74,60)'}}/>
        </G>
        <G transform="matrix(1.25219,0,0,1.24219,-142.194,-77.7182)">
            <Path d="M927.122,290.455L926.596,315.33L905.782,320.005L906.515,295.08L927.122,290.455Z" style={{fill:'rgb(90,130,194)'}}/>
        </G>
        <G transform="matrix(1.25219,0,0,1.24219,-142.194,-77.7182)">
            <Path d="M928.433,290.419L939.893,294.388L945.958,319.147L929.582,315.387L928.433,290.419Z" style={{fill:'rgb(56,170,86)'}}/>
        </G>
    </G>
</Svg>

);
export default Location
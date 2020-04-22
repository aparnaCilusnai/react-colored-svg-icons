import React from 'react';
import {Svg,Path,G,Rect,Circle} from 'react-native-svg';

const Tasks = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
     <G id="Tasks">
        <G transform="matrix(0.680495,0,0,0.656346,3.89017,12.871)">
            <Path d="M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z" style={{fill:'rgb(233,74,60)'}}/>
        </G>
        <G transform="matrix(0.583281,0,0,0.562582,16.3344,0.218023)">
            <Path d="M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z" style={{fill:'rgb(246,187,26)'}}/>
        </G>
        <G transform="matrix(0.499955,0,0,0.482213,4.18461,-2.44169)">
            <Path d="M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z" style={{fill:'rgb(56,170,86)'}}/>
        </G>
        <G transform="matrix(0.416629,0,0,0.401844,23.9532,24.5537)">
            <Path d="M15.273,34.742L40.903,15.432L45.716,21.822L13.769,45.891L13.738,45.85L13.666,45.904L1.631,29.93L8.02,25.116L15.273,34.742Z" style={{fill:'rgb(90,130,194)'}}/>
        </G>
    </G>
</Svg>

);

export default Tasks
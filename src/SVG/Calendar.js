import React from 'react';
import {Svg,Path,G,Rect} from 'react-native-svg';

const Calendar = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
   <G transform="matrix(0.408266,0,0,0.408266,4.75525,1.4605)">
        <Path d="M56.8,28.4L56.4,28.3L56.4,28.1L56.8,28.4Z" style={{fillRule:'nonzero'}}/>
    </G>
    <G id="Calendar">
        <G transform="matrix(0.969388,0,0,0.306122,-0.639181,3.21064)">
            <Path d="M45.017,8.981C45.017,7.25 44.574,5.845 44.027,5.845L6.808,5.845C6.261,5.845 5.817,7.25 5.817,8.981L5.817,41.909C5.817,43.64 6.261,45.045 6.808,45.045L44.027,45.045C44.574,45.045 45.017,43.64 45.017,41.909L45.017,8.981Z" style={{fill:"rgb(90,130,194)"}}/>
        </G>
        <G transform="matrix(0.986796,0,0,0.986796,-0.716123,0.26697)">
            <Rect x="9.39" y="20.219" width="9.12" height="9.12" style={{fill:"rgb(246,187,26)"}}/>
        </G>
        <G transform="matrix(0.986796,0,0,0.986796,10.2339,0.26697)">
            <Rect x="9.39" y="20.219" width="9.12" height="9.12" style={{fill:"rgb(56,170,86)"}}/>
        </G>
        <G transform="matrix(0.986796,0,0,0.986796,21.1838,0.26697)">
            <Rect x="9.39" y="20.219" width="9.12" height="9.12" style={{fill:"rgb(246,187,26)"}}/>
        </G>
        <G transform="matrix(0.986796,0,0,0.986796,-0.716123,11.1896)">
            <Rect x="9.39" y="20.219" width="9.12" height="9.12" style={{fill:"rgb(56,170,86)"}}/>
        </G>
        <G transform="matrix(0.986796,0,0,0.986796,10.2339,11.1896)">
            <Rect x="9.39" y="20.219" width="9.12" height="9.12" style={{fill:"rgb(233,74,60)"}}/>
        </G>
        <G transform="matrix(0.986796,0,0,0.986796,21.1838,11.1896)">
            <Rect x="9.39" y="20.219" width="9.12" height="9.12" style={{fill:"rgb(56,170,86)"}}/>
        </G>
    </G>
</Svg>
);

export default Calendar

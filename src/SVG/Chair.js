import React from 'react';
import {Svg,Path,G,Rect} from 'react-native-svg';

const Chair = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
   <G transform="matrix(0.504398,0,0,0.44,8,2)">
        <Path d="M37.778,97.995L32.734,100L27.253,97.995L27.253,66.406L32.734,68.001L37.778,66.406L37.778,97.995Z" style={{fill:"rgb(56,170,86)",fillRule:"nonzero;"}}/>
        <Path d="M63.442,88.32L58.398,90.325L52.912,88.32L52.912,61.625L58.398,60.106L63.442,58.507L63.442,88.32Z" style={{fill:"rgb(90,130,194)",fillRule:"nonzero"}}/>
        <Path d="M0,89.269L5.042,91.268L10.521,89.269L10.521,62.567L5.042,61.053L0,59.453L0,89.269Z" style={{fill:"rgb(233,74,60)",fillRule:'nonzero'}}/>
        <Path d="M36.246,42.932L36.246,0L5.547,5.634L5.547,50.942L32.734,57.168L63.442,49.167L36.246,42.932Z" style={{fill:"rgb(246,187,26)",fillRule:'nonzero'}}/>
        <Path d="M2.847,53.093L2.847,6.229L0,7.12L0,55.725L32.734,64.733L63.442,55.842L63.442,52.276L32.734,60.51L2.848,53.093L2.847,53.093Z" style={{fill:"rgb(56,170,86)",fillRule:'nonzero'}}/>
    </G>
</Svg>
);

export default Chair
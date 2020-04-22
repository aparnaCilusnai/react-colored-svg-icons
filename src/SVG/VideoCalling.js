import React from 'react';
import {Svg,Path,G,Rect,Circle} from 'react-native-svg';

const VideoCalling = ({ style = {},size='100%'}) => (
   <Svg width={size} height={size} style={style} viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}>
    <G id="Video-Calling"  transform="matrix(0.603543,0,0,0.603543,-6.14784,-8.11461)">
        <G transform="matrix(0.845967,0,0,0.845967,13.3089,10.8695)">
            <Path d="M81.6,67.4L65,60.1C63.7,59.5 62.9,58.3 62.9,56.9L62.9,43.1C62.9,41.7 63.7,40.4 65,39.9L81.5,32.7C83.8,31.7 86.4,33.4 86.4,35.9L86.4,64.2C86.5,66.7 83.9,68.4 81.6,67.4Z" style={{fill:'rgb(56,170,86)',fillRule:'nonzero'}}/>
        </G>
        <G>
            <G transform="matrix(0.823883,0,0,0.823883,-1541.16,-753.118)">
                <Path d="M1917.64,946.516L1917.64,1010.87L1895.43,1010.87C1890.73,1010.87 1886.99,1007.13 1886.99,1002.43L1886.99,954.958C1886.99,950.253 1890.73,946.516 1895.43,946.516L1917.64,946.516Z" style={{fill:'rgb(246,187,26)'}}/>
            </G>
            <G transform="matrix(0.823883,0,0,0.823883,-1543.25,-753.118)">
                <Path d="M1922.93,946.516L1942.9,946.516C1947.61,946.516 1951.35,950.391 1951.35,954.958L1951.35,1002.43C1951.35,1007.13 1947.61,1010.87 1942.9,1010.87L1922.93,1010.87L1922.72,993.483L1940.74,993.706L1940.51,963.983L1922.93,964.122L1922.93,946.516Z" style={{fill:'rgb(90,130,194)'}}/>
            </G>
        </G>
        <G transform="matrix(0.722565,0,0,0.722565,-1347.57,-654.216)">
            <Circle cx="1920.35" cy="979.048" r="13.702" style={{fill:'rgb(233,74,60)'}}/>
        </G>
    </G>
</Svg>

);

export default VideoCalling
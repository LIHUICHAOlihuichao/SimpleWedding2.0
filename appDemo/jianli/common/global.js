import {Dimensions} from 'react-native';
//全局变量，赋予属性或方法

global.w = Dimensions.get('window').width;
global.h = Dimensions.get('window').height;
global.ptd = (px)=>{
    return px/375*w
}
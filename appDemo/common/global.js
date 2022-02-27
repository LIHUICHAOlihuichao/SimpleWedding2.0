import {Dimensions} from 'react-native';
//全局变量，赋予属性或方法

global.w = Dimensions.get('window').width;
global.ptd = (px)=>{
    return px/375*w
}
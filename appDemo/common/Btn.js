import React from 'react'
import {TouchableOpacity,Text} from 'react-native'

const Btn = (props) =>{

    return <TouchableOpacity style={props.style?props.style:style} onPress={props.onPress}>
      <Text style={{color:props.style?.color?props.style.color:"#000"}}>{props.children}</Text>
    </TouchableOpacity>
}

const style = {
    width:300,
    height:50,
    color:'white',
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"pink",
  
}

export default Btn

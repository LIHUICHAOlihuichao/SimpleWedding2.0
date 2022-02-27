import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import './global'

const Btn = (props) =>{

    return <TouchableOpacity style={props.style?props.style:style} onPress={props.onPress}>
      <Text style={{color:props.style?.color?props.style.color:"#000",fontSize:18}}>{props.children}</Text>
    </TouchableOpacity>
}

const style = {
    width:w-100,
    height:50,
    color:'black',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white",
    marginLeft:20,
    marginTop:20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderStyle: 'solid',
}

export default Btn;
import React ,{useState,useEffect}from 'react'
import {View,Text,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native' 
// import Btn from '../common/Btn'
import '../common/global'
//import AsyncStorage from '@react-native-async-storage/async-storage';
// import moment from 'moment';
const navs = [
  {id:1,text:'#新娘日记'},
  {id:2,text:'#习俗'},
  {id:3,text:'#清单'},
  {id:4,text:'#婚戒'},
  {id:5,text:'#场地'},
  {id:6,text:'#新娘造型'}
];

const Topic = ({navigation,route})=>{
  return(
    <ScrollView style={{backgroundColor:'white'}}>
      {
        navs.map((nav,idx)=>(
          <TouchableOpacity key={idx} 
              style={styles.box}
              onPress={()=>{
                navigation.navigate('Rel',{num:nav.id,topic:nav.text})
              }}        
          >
             <Text style={styles.con}>{nav.text}</Text>
          </TouchableOpacity>
        ))
      }
     
    </ScrollView>
    )
    
}
export default Topic;
const styles = StyleSheet.create({
  box:{
    height:ptd(45),
    lineHeight:ptd(45),
    marginLeft:ptd(12),
    paddingTop:ptd(15),
    borderColor: '#DEDEDE',
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  con:{
    fontSize:18,
    fontFamily:'微软雅黑',
    marginLeft:ptd(10)
    // color:'#FF88C2'
  }
})
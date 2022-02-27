import React, { useState, useEffect, useReducer } from 'react'
import { ScrollView, StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { connect } from 'react-redux'
import stateToProps from '../store/stateToProps'//变量
import dispatchToProps from '../store/dispatchToProps'//方法
import Icon from 'react-native-vector-icons/AntDesign';
const Plan = (props) => {
  let { getFun7, getFun8,data7, data8} = props
  useEffect(() => {
    getFun7('http://10.7.86.197:8080/thing/thing_group')
    getFun8('http://10.7.86.197:8080/thing_user_process/?user_id=5')
  },[])
  return (
    <ScrollView style={{ backgroundColor: '#F5F5F5' }}>
      <View style={styles.top}>
        <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { props.navigation.push('Mine') }}></Icon>
        <Text style={styles.title}>备婚计划</Text>
      </View>
      <View style={styles.list}>
        {
          data7.map((item, idx) => (<ScrollView style={styles.lists} key={idx}>
            <View style={styles.titleview}>
              <Text style={styles.titletext}>{item.group_name}</Text>
            </View>
            <ScrollView style={styles.view}>
              {
                data8.map((item1, idx1) => {
                  if (item1.group_id == item.group_id && item1.isFinish===0) {
                    return (
                      <View style={styles.content} key={idx1}>
                        <Text>{item1.thing_name}</Text>
                        <Text style={styles.dui}>√</Text>
                      </View>
                    )
                  }
                  else if (item1.group_id == item.group_id) {
                    return (
                      <View style={styles.content} key={idx1}>
                        <Text>{item1.thing_name}</Text>
                      </View>
                    )
                  }
                })
              }
            </ScrollView>
          </ScrollView>))
        }
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  dui:{
    position:'absolute',
    paddingLeft:ptd(170),
    color:'green',
    fontSize:18
  },
  content: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    width: '100%',
  },
  titletext: {
    fontSize: 20,
    paddingTop: 5,
    paddingLeft: ptd(120),
    color: 'white'
  },
  titleview: {
    height: 40,
    width: '100%',
    backgroundColor: '#FF5353',
    borderRadius: 5
  },
  lists: {
    backgroundColor: 'white',
    width: ptd(300),
    marginLeft: ptd(15),
    marginTop: 25,
    borderRadius: 5
  },
  list: {
    width: ptd(330),
    marginTop: 50,
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    position: 'absolute',
    top: ptd(7),
    left: ptd(160)
  },
  back: {
    paddingLeft: ptd(10),
    marginTop: ptd(10),
  },
  top: {
    position: 'absolute',
    width: '100%',
    height: 50,
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    borderWidth: 2
  }
});
export default connect(stateToProps, dispatchToProps)(Plan);
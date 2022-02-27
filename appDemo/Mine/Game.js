import React, { useState, useEffect, useReducer } from 'react'
import { ScrollView,View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

import axios from 'axios'//当页面有第二个get/post/put/delete方法时，直接使用axios调用
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'//变量
import dispatchToProps from '../store/dispatchToProps'//方法

const collectlist = [
    { id: 1, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, fraction: 'Mrs Lin婚礼策划工作室', address: '韶山路怡景园13栋1门301', title1: '婚礼策划', title2: '棠湖古城' },
]
const tabs = [
    { text: '接亲游戏', id: 0 },
    { text: '堵门游戏', id: 1 },
    { text: '结婚必备', id: 2 },
]
const Game = (props) => {
    const [selectTab, setSelectTab] = useState(0)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.top}>
            <Icon name="left" size={30} color='black' style={{marginTop:10,marginLeft:ptd(15)}} onPress={()=>{ props.navigation.push('Mine') }}></Icon>
                <Text style={styles.title}>接亲游戏</Text>
            </View>
            <Image
                style={styles.games}
                source={
                    require('../images/games.jpg')
                }
            />
            <View style={styles.nav}>
                {
                    tabs.map((item, idx) => <Text
                        onPress={() => setSelectTab(item.id)}
                        key={idx}
                        style={[styles.tabs, { fontSize: selectTab == item.id ? 20 : 15 }]}>{item.text}</Text>)
                }
            </View>
            <Tab isTab={selectTab} navigation={props.navigation}></Tab>
        </ScrollView>
    )
}
const Tab = (props) => {
    if(props.isTab == 0 ){
        return <Jieqin navigation={props.navigation}></Jieqin>
    }else if(props.isTab == 1 ){
        return <Dumen navigation={props.navigation}></Dumen>
    }else{
        return <Jiehun navigation={props.navigation}></Jiehun>
    }
}
const Jieqin = (props) => {
    return (
        <TouchableOpacity style={styles.div} onPress={() => { props.navigation.push('JieqinContent') }}>
            <Image
                style={styles.game1}
                source={
                    require('../images/game1.jpg')
                }
            />
            <Text style={styles.text}>接亲游戏 | 奶油打脸砸派机</Text>
        </TouchableOpacity>
    )
}
const Dumen = (props) => {
    return (
        <TouchableOpacity style={styles.div} onPress={() => { props.navigation.push('DumenContent') }}>
            <Image
                style={styles.game1}
                source={
                    require('../images/game2.jpg')
                }
            />
            <Text style={styles.text}>堵门游戏 | 红丝带牵红绳</Text>
        </TouchableOpacity>
    )
}
const Jiehun = (props) => {
    return (
        <TouchableOpacity style={styles.div} onPress={() => { props.navigation.push('JiehunContent') }}>
            <Image
                style={styles.game1}
                source={
                    require('../images/game3.jpg')
                }
            />
            <Text style={styles.text}>结婚必备 | 歌词大战</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        paddingTop:15,
        paddingLeft:ptd(10)
    },
    game1:{
        width:'100%',
        height:240,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    div:{
        width:'90%',
        height:300,
        borderColor:'#ccc',
        borderWidth:1,
        marginLeft:'5%',
        marginTop:ptd(20),
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    tabs: {
        lineHeight: 40,
        flex: 1,
        fontSize: 15,
        color:'white',
        marginLeft:45
    },
    nav: {
        height: 60,
        width: '100%',
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#20211A',
        paddingTop:10
    },
    games: {
        marginTop: 50,
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        position: 'absolute',
        top: ptd(7),
        left: ptd(160)
    },
    back: {
        paddingLeft: ptd(10),
        marginTop: ptd(10)
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
export default connect(stateToProps, dispatchToProps)(Game);

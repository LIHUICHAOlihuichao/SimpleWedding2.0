import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
import Icon from 'react-native-vector-icons/AntDesign';
const publishlist = [
    { id: 1, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, name: '小小夏', time: '2021-02-26 17:12', content: '拍结婚证当天应该穿什么？有什么要求吗？' },
    { id: 2, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, name: '夏校', time: '2021-02-26 17:12', content: '拍结婚证当天应该穿什么？有什么要求吗？' },
]
const answerlist = [
    { id: 1, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, name: '小小木', time: '2021-02-26 17:12', content: '拍结婚证当天应该穿什么？有什么要求吗？' },
    { id: 2, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, name: '夏校', time: '2021-02-26 17:12', content: '拍结婚证当天应该穿什么？有什么要求吗？' },
]
const messagelist = [
    { id: 1, title: '昵称', content: '小小夏' },
    { id: 2, title: '年龄', content: 19 },
    { id: 3, title: '性别', content: '女' },
    { id: 4, title: '生日', content: '1997-03-26' },
    { id: 5, title: '手机号', content: '13389829989' },
    { id: 6, title: '修改地址', content: '***' },
    { id: 7, title: '头像', content: 'https://m.qpic.cn/psc?/V52WgH5s2hnuFJ2x84bk38tCWo230dWo/ruAMsa53pVQWN7FLK88i5kLTroUQDzRPCFvHOol.8xOGLHQ*QwFwftumWzuA04i71sB3dUHAFhR50rR1NZWUhoe6VI2JG43kLtu.HvF25wA!/mnull&bo=9AH0AQAAAAABByA!&rf=photolist&t=5' }
]
const tabs = [
    { text: '已提问', id: 0 },
    { text: '已回答', id: 1 }
]
const Tab = (props) => {
    return props.isTab == 0 ?
        <Question data5={props.data5} data={props.data}></Question> :
        <Answer data4={props.data4} data={props.data}></Answer>
}
const Question = (props) => {
    const deleteFun2 = (url) => {
        axios.delete(url).then((res) => {
            // console.log(res)
        })
    }
    return (
        <View>
            {
                props.data5.map((item, idx) =>
                    <TouchableOpacity style={styles.lists} key={idx}>
                        <Image
                            style={styles.img1}
                            source={{
                                uri: props.data? props.data[0].user_image: messagelist[6].content,
                            }}
                        />
                        <Text style={styles.name1}>{item.user_name}</Text>
                        <Text style={styles.time1}>{item.post_time}</Text>
                        <Text style={styles.content}>{item.post_content}</Text>
                    </TouchableOpacity>)
            }
        </View>
    )
}
const Answer = (props) => {
    const deleteFun2 = (url) => {
        axios.delete(url).then((res) => {
            // console.log(res)
        })
    }
    return (
        <View>
            {
                props.data4.map((item, idx) =>
                    <TouchableOpacity style={styles.lists} key={idx}>
                        <Text style={styles.content}>{item.daily_content}</Text>
                        <Image
                            style={styles.img}
                            source={{
                                uri: props.data? props.data[0].user_image: messagelist[6].content,
                            }}
                        />
                        <Text style={styles.name}>{item.user_name}</Text>
                        <Text style={styles.reply}>{item.reply_content}</Text>
                    </TouchableOpacity>)
            }
        </View>
    )
}
const Publish = (props) => {
    let { getFun,getFun5, getFun4,data5,data4,data } = props
    const [selectTab, setSelectTab] = useState(0)
    useEffect(() => {
        getFun4('http://10.7.86.197:8080/user_reply/?user_id=5')
        getFun5('http://10.7.86.197:8080/user_post/?user_id=5')
        getFun('http://10.7.86.197:8080/user/getuser?user_id=5')
    },[])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F7F7F8' }}>
            <View style={styles.top}>
                <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { props.navigation.push('Mine') }}></Icon>
                <Text style={styles.title}>已发布</Text>
            </View>
            <View style={styles.nav}>
                {
                    tabs.map((item, idx) => <Text
                        onPress={() => setSelectTab(item.id)}
                        key={idx}
                        style={[styles.tabs, { borderBottomWidth: selectTab == item.id ? 3 : 0 }]}>{item.text}</Text>)
                }
            </View>
            <Tab isTab={selectTab} navigation={props.navigation} data5={data5} data4={data4} data={data}></Tab>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    time1:{
        marginLeft: ptd(65),
        marginTop: ptd(5),
        fontSize: 10,
        color: '#9E9D9D'
    },
    name1:{
        marginLeft: ptd(65),
        marginTop: ptd(12),
        fontSize:13,
    },
    img1:{
        height: ptd(40),
        width: ptd(40),
        borderRadius: 20,
        position: 'absolute',
        top: ptd(6),
        left: ptd(20)
    },
    reply:{
        fontSize:12,
        height:30,
        color:'black',
        paddingLeft:ptd(60)
    },
    delbtn: {
        backgroundColor: '#ccc',
        width: ptd(25),
        height: 30,
        position: 'absolute',
        left: ptd(311),
        borderTopRightRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    del: {
        fontSize: 30,
        color: 'white',
    },
    tabs: {
        borderBottomColor: '#FB7737',
        lineHeight: 30,
        flex: 1,
        fontSize: 15,
        color: 'black',
        marginLeft: 25
    },
    nav: {
        marginLeft: ptd(110),
        backgroundColor: 'white',
        width: '40%',
        height: ptd(30),
        flex: 1,
        flexDirection: 'row',
        marginTop: 60,
        borderRadius: 5,
    },
    question: {
        width: ptd(70),
        height: ptd(30),
        marginTop: ptd(50),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: ptd(115)
    },
    answer: {
        width: ptd(70),
        height: ptd(30),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: ptd(185),
        marginTop: ptd(-30)
    },
    content: {
        marginLeft: ptd(20),
        marginTop: ptd(10),
        marginBottom:15,
        fontSize: 15,
        marginRight: ptd(15)
    },
    name: {
        fontSize:13,
        color:'#ccc',
        paddingLeft:ptd(60),
        marginTop:-35
    },
    img: {
        height: ptd(30),
        width: ptd(30),
        borderRadius: 20,
        marginLeft:ptd(20)
    },
    lists: {
        width: '90%',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginLeft: '5%',
        marginTop: 20,
        backgroundColor: 'white'
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
export default connect(stateToProps, dispatchToProps)(Publish);

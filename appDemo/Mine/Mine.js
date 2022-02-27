import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Ionicons';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
const messagelist = [
    { id: 1, title: '昵称', content: '小小夏' },
    { id: 2, title: '年龄', content: 19 },
    { id: 3, title: '性别', content: '女' },
    { id: 4, title: '生日', content: '1997-03-26' },
    { id: 5, title: '手机号', content: '13389829989' },
    { id: 6, title: '修改地址', content: '***' },
    { id: 7, title: '头像', content: 'https://m.qpic.cn/psc?/V52WgH5s2hnuFJ2x84bk38tCWo230dWo/ruAMsa53pVQWN7FLK88i5kLTroUQDzRPCFvHOol.8xOGLHQ*QwFwftumWzuA04i71sB3dUHAFhR50rR1NZWUhoe6VI2JG43kLtu.HvF25wA!/mnull&bo=9AH0AQAAAAABByA!&rf=photolist&t=5' }
]
var getTime = () => {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString(); 
    return [year, month, day];
}
const Mine = (props) => {
    let { inputValue4,inputValue5, inputValue6,getFun,getFun6,getFun12,data,data6 } = props
    useEffect(() => {
        getFun('http://10.7.86.197:8080/user/getuser?user_id=5')
        getFun6('http://10.7.86.197:8080/countdown/?day_user_id=5')
        getFun12('http://10.7.86.197:8080/uploadimg/getImg/?user_id=5')
    },[])
    let day = 0
    if (props.route.params === undefined) {
        day = 0
    } else {
        day = props.route.params.day
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.top}>
                <Image
                    style={styles.touxiang}
                    source={{
                        uri: data[0] ? data[0].user_image: messagelist[6].content,
                    }}
                />
                <View style={styles.message}>
                    <Text style={styles.name}>{inputValue4 ? inputValue4 : data[0] ? data[0].user_name : messagelist[0].content}</Text>
                    <Text style={styles.age}>{inputValue6 ? inputValue6 : data[0] ? data[0].user_sex : messagelist[2].content}&nbsp;&nbsp;{inputValue5 ? inputValue5 : data[0] ? data[0].user_age : messagelist[1].content}岁</Text>
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => { props.navigation.push('Mymessage', { navigation: props.navigation }) }}
                >
                    <Text style={{ color: 'white' }}>个人主页</Text>
                </TouchableOpacity>

                <View style={styles.nav}>
                    <TouchableOpacity style={styles.nav1} onPress={() => { props.navigation.push('Collect') }}>
                        <Icon name="staro" size={35} color='#FF5353' style={{ marginTop: 5 }}></Icon>
                        <Text style style={{ color: '#949596', fontSize: 13, marginTop: 8 }}>已收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav2} onPress={() => { props.navigation.push('Publish') }}>
                        <Icon1 name="send-o" size={35} color='#FF5353' style={{ marginTop: 5 }}></Icon1>
                        <Text style style={{ color: '#949596', fontSize: 13, marginTop: 8 }}>已发布</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav3} onPress={() => { props.navigation.push('Memorandum') }}>
                        <Icon2 name="new-message" size={35} color='#FF5353' style={{ marginTop: 5 }}></Icon2>
                        <Text style style={{ color: '#949596', fontSize: 13, marginTop: 8 }}>备忘录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nav4} onPress={() => { props.navigation.push('Set') }}>
                        <Icon name="setting" size={35} color='#FF5353' style={{ marginTop: 5 }}></Icon>
                        <Text style style={{ color: '#949596', fontSize: 13, marginTop: 8, marginLeft: ptd(3) }}>设置</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.timebtn} onPress={() => { props.navigation.push('Calendar', { data: getTime() }) }}>
                    <Text style={styles.time}>婚礼倒计时{data6[0]?data6[0].day:0}天</Text>
                </TouchableOpacity>
                <View style={styles.list}>
                    <TouchableOpacity style={styles.lists} onPress={() => { props.navigation.push('Plan') }}>
                        <View style={styles.imgs}>
                            <Icon3 name="clock" size={25} color='white'></Icon3>
                        </View>
                        <Text style={styles.texts}>备婚计划</Text>
                        <Text style={styles.jiantou}> > </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lists} onPress={() => { props.navigation.push('Account') }}>
                        <View style={styles.imgs}>
                            <Icon4 name="book-outline" size={25} color='white'></Icon4>
                        </View>
                        <Text style={styles.texts}>婚礼账本</Text>
                        <Text style={styles.jiantou}> > </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lists} onPress={() => { props.navigation.push('Game') }}>
                        <View style={styles.imgs}>
                            <Icon4 name="game-controller-outline" size={25} color='white'></Icon4>
                        </View>
                        <Text style={styles.texts}>迎亲游戏</Text>
                        <Text style={styles.jiantou}> > </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.lists} onPress={() => { props.navigation.push('Pledge') }}>
                        <View style={styles.imgs}>
                            <Icon1 name="microphone" size={25} color='white'></Icon1>
                        </View>
                        <Text style={styles.texts}>婚礼致辞</Text>
                        <Text style={styles.jiantou}> > </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    jiantou: {
        fontSize: 20,
        position: 'absolute',
        left: 330
    },
    texts: {
        fontSize: 17,
        paddingLeft: 45
    },
    imgs: {
        height: 30,
        width: 30,
        backgroundColor: '#FF5353',
        position: 'absolute',
        top: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lists: {
        justifyContent: 'center',
        width: '90%',
        height: 60,
        marginLeft: '5%',
        marginTop: 5
    },
    list: {
        position: 'absolute',
        width: '90%',
        height: 400,
        marginLeft: '5%',
        top: 120
    },
    time: {
        fontSize: 30,
        color: 'white'
    },
    timebtn: {
        backgroundColor: '#FF5353',
        position: 'absolute',
        top: 60,
        width: '90%',
        height: 50,
        marginLeft: '5%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nav1: {
        position: 'absolute',
        top: 5,
        left: 25,
        height: 75,
        width: '15%',
        alignItems: 'center'
    },
    nav2: {
        position: 'absolute',
        top: 5,
        left: 125,
        height: 75,
        width: '15%'
    },
    nav3: {
        position: 'absolute',
        top: 5,
        left: 225,
        height: 75,
        width: '15%'
    },
    nav4: {
        position: 'absolute',
        top: 5,
        left: 325,
        height: 75,
        width: '15%'
    },
    nav: {
        backgroundColor: 'white',
        width: '90%',
        height: 90,
        position: 'absolute',
        top: 110,
        left: '5%',
        right: '5%',
        borderRadius: 5
    },
    btn: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.3,
        position: 'absolute',
        top: 35,
        right: ptd(20)
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    },
    age: {
        color: 'white',
        paddingTop: 5
    },
    message: {
        width: 200,
        height: 60,
        position: 'absolute',
        top: 20,
        left: 80
    },
    touxiang: {
        position: 'absolute',
        top: 20,
        left: 20,
        height: 45,
        width: 45,
        borderRadius: 20
    },
    top: {
        flex: 1,
        backgroundColor: '#FF5353'
    },
    bottom: {
        flex: 4,
    }
});
export default connect(stateToProps, dispatchToProps)(Mine);

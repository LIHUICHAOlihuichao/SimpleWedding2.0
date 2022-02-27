import React, { Component } from 'react'
import {
    View, ScrollView, Text, ImageBackground, Image, StyleSheet,
    TextInput, Alert,
    AsyncStorage,
} from 'react-native'

import Btn from '../common/Btn';

import '../common/global';

import qs from 'qs';
import axios from 'axios';

const puturl = (obj, url) => {
    console.log(obj)

    axios.put(url, qs.stringify(obj)).then((res) => {
        console.log(res)
    })

}


export default class Login3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '用户名',
            password: '新密码',
            tel: '电话号码',
            password1: '确认新密码',

            all: [],
        }
    }



    onChangeUserValue = (value) => {
        this.setState({ user: value });
    }
    onChangeTelValue = (value) => {
        this.setState({ tel: value });
    }
    onChangePasswordValue = (value) => {
        this.setState({ password: value });
    }
    onChangePassword1Value = (value) => {
        this.setState({ password1: value });
    }

    componentDidMount() {
        return (
            fetch('http://10.7.86.197:8080/user/getalluser')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        all: responseJson,
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                })
        )

    }

    render() {

        return (
            <View>
                <View style={{ width: w, height: h }}>
                    <ImageBackground
                        source={{ uri: 'https://c-ssl.duitang.com/uploads/blog/202103/28/20210328010048_796e6.thumb.1000_0.jpg' }}
                        style={{
                            width: w,
                            height: h,
                            position: 'relative',
                            // top:-50,
                        }}
                    />

                </View>
                  <View style={{
                    width: w,
                    height: 40,
                    backgroundColor: "white",
                    position:'absolute',
                    top:0,
                    opacity:0.8,
                }}>
                    <Text
                        style={{
                            position: "absolute",
                            top: 0,
                            width: 40,
                            height: 40,
                            marginLeft: ptd(7.5),
                        }}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                        <Image
                            source={require('../../tupian/jiantou.png')}
                            style={{
                                width: 25,
                                height: 25,

                            }}
                        />
                    </Text>
                </View>
                {/* <View style={{width:w/2,height:h/3}}>
                    <Image
                        source={{uri:'http://m.qpic.cn/psc?/V51gGRBp3f1Y6e2WYQCi2qIqIj05OBnb/ruAMsa53pVQWN7FLK88i5oC5DItRxF7CnkaRZNqvcyAPMCBR1tcPkRvXOSisbfNMBYeWOHmolo2C.7*buOERg1VuWV94z3ucwtsubYSmAsw!/b&bo=6APzBugD8wYBCS4!&rf=viewer_4'}} 
                        style={{
                            width:w/2,
                            height:h/3,
                            // flex:-1,
                        }}
                    />

                </View> */}

                <View
                    style={{
                        width: w - 60,
                        marginLeft: 30,
                        height: 330,
                        backgroundColor: 'white',
                        // marginTop: 300,
                        borderRadius: 25,
                        borderColor: '#eee',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        position:'absolute',
                        top:350,
                        opacity:0.8,
                    }}
                >
                    <View>
                        <TextInput
                            style={{
                                height: 40,
                                width: w - 100,
                                borderRadius: 15,
                                backgroundColor: 'white',
                                marginTop: 20,
                                paddingLeft: ptd(20),
                                fontSize: 16,
                                marginLeft: 20,
                                borderColor: '#ddd',
                                borderWidth: 1,
                                borderStyle: 'solid',
                            }}
                            onChangeText={this.onChangeUserValue}
                            value={this.state.user}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={{
                                height: 40,
                                width: w - 100,
                                borderRadius: 15,
                                backgroundColor: 'white',
                                marginTop: 20,
                                paddingLeft: ptd(20),
                                fontSize: 16,
                                marginLeft: 20,
                                borderColor: '#ddd',
                                borderWidth: 1,
                                borderStyle: 'solid',
                            }}
                            onChangeText={this.onChangeTelValue}
                            value={this.state.tel}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={{
                                height: 40,
                                width: w - 100,
                                borderRadius: 15,
                                backgroundColor: 'white',
                                marginTop: 20,
                                paddingLeft: ptd(20),
                                fontSize: 16,
                                marginLeft: 20,
                                borderColor: '#ddd',
                                borderWidth: 1,
                                borderStyle: 'solid',
                            }}
                            onChangeText={this.onChangePasswordValue}
                            value={this.state.password}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={{
                                height: 40,
                                width: w - 100,
                                borderRadius: 15,
                                backgroundColor: 'white',
                                marginTop: 20,
                                paddingLeft: ptd(20),
                                fontSize: 16,
                                marginLeft: 20,
                                borderColor: '#ddd',
                                borderWidth: 1,
                                borderStyle: 'solid',
                            }}
                            onChangeText={this.onChangePassword1Value}
                            value={this.state.password1}
                        />
                    </View>
                    <View>
                        <Btn
                            onPress={() => {
                                if (this.state.user && this.state.tel && this.state.password && this.state.password1) {
                                    if (this.state.all.filter(item => item.user_name == this.state.user).length !== 0) {
                                        for (var i = 0; i < this.state.all.length; i++) {
                                            if (this.state.user == this.state.all[i].user_name) {
                                                if (this.state.tel == this.state.all[i].user_phone) {
                                                    if (this.state.password1 == this.state.password) {
                                                        //修改的
                                                        puturl(
                                                            {
                                                                user_name: this.state.user,
                                                                user_password: this.state.password,
                                                                user_phone: this.state.tel,
                                                            },
                                                            'http://10.7.86.197:8080/user/updatepassword'
                                                        )

                                                        Alert.alert(
                                                            '温馨提示',
                                                            '修改成功',
                                                            [
                                                                { text: '确认', onPress: () => { this.props.navigation.navigate('login1'), console.log('修改成功') }, style: 'cancel' },
                                                            ],

                                                        )

                                                    } else {
                                                        Alert.alert(
                                                            '确认密码输入错误',
                                                            '请重新输入',
                                                            [
                                                                { text: '确认', onPress: () => { console.log('确认密码输入错误') }, style: 'cancel' },
                                                            ],
                                                        )
                                                    }

                                                } else {
                                                    Alert.alert(
                                                        '电话号码输入错误',
                                                        '请重新输入',
                                                        [
                                                            { text: '确认', onPress: () => { console.log('电话号码输入错误') }, style: 'cancel' },
                                                        ],
                                                    )

                                                }
                                            }
                                        }
                                    } else {
                                        Alert.alert(
                                            '用户名不存在',
                                            '请重新输入',
                                            [
                                                { text: '确认', onPress: () => { console.log('用户名不存在') }, style: 'cancel' },
                                            ],
                                        )
                                    }
                                } else {
                                    Alert.alert(
                                        '输入框请补充完整',
                                        '请输入',
                                        [
                                            { text: '确认', onPress: () => { console.log('输入框请补充完整') }, style: 'cancel' },
                                        ],
                                    )
                                }
                            }}
                        >确认更改</Btn>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})




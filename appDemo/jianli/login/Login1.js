import React, { Component } from 'react'
import {
    View, ScrollView, Text, ImageBackground, Image, StyleSheet,
    TextInput, Alert,
    AsyncStorage,
} from 'react-native'
import Btn from '../common/Btn';
import SplashScreen from 'react-native-splash-screen';
import '../common/global';


const tabs = [
    { id: 0, text: '用户登录' },
    { id: 1, text: '商家登录' },

]



export default class Login1 extends Component {
    constructor(props) {
        super(props)
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000)
        this.state = {
            selectTab: 0,
            user: '请输入用户名',
            password: '请输入密码',
            shop: '请输入商家名',
            psword: '请输入密码',
            all: [],
        }
    }

    setSelectTab(e) {
        this.setState({ selectTab: e });
    }

    onChangeUserValue = (value) => {
        this.setState({ user: value });
    }
    onChangePasswordValue = (value) => {
        this.setState({ password: value });
    }

    onChangeShopValue = (value) => {
        this.setState({ shop: value });
    }
    onChangePswordValue = (value) => {
        this.setState({ psword: value });
    }

    componentDidMount() {
        var _that = this;
        // http://10.7.86.197:8080

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
        let twoContent = (this.state.selectTab == '0') ?
            <View>
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
                        onChangeText={this.onChangePasswordValue}
                        value={this.state.password}
                    />
                </View>
                <View>
                    <Btn
                        onPress={() => {
                            if (this.state.user) {
                                if (this.state.all.filter(item => item.user_name == this.state.user).length !== 0) {
                                    // console.log(this.state.user)
                                    for (var i = 0; i < this.state.all.length; i++) {
                                        if (this.state.user === this.state.all[i].user_name) {
                                            if (this.state.password === this.state.all[i].user_password) {
                                                Alert.alert(
                                                    '温馨提示',
                                                    '登录成功',
                                                    [
                                                        { text: '确认', onPress: () => { this.props.navigation.navigate('tabnav'), console.log('登录成功') }, style: 'cancel' },
                                                    ],
                                                    // this.props.navigation.navigate('shouye')
                                                )
                                                AsyncStorage.setItem('loginUser', JSON.stringify(this.state.all[i].user_name));

                                                // wx.setStorage({
                                                //   data: this.data.inputValue,
                                                //   key: 'username',
                                                // })
                                                // wx.switchTab({
                                                //   url: '/pages/index/index'
                                                // })
                                                // console.log( AsyncStorage.getItem('loginUser'));
                                            } else {
                                                if (this.state.password !== '') {
                                                    Alert.alert(
                                                        '密码输入错误',
                                                        '请重新输入',
                                                        [
                                                            { text: '确认', onPress: () => console.log('密码输入错误'), style: 'cancel' },
                                                        ],
                                                    )

                                                } else {
                                                    Alert.alert(
                                                        '密码为空',
                                                        '请输入',
                                                        [
                                                            { text: '确认', onPress: () => console.log('密码为空'), style: 'cancel' },
                                                        ],
                                                    )

                                                }
                                            }
                                        }
                                    }
                                } else {
                                    Alert.alert(
                                        '用户名不存在',
                                        '请重新输入',
                                        [
                                            { text: '确认', onPress: () => console.log('用户名不存在'), style: 'cancel' },
                                        ],
                                    )

                                }
                            } else {
                                Alert.alert(
                                    '用户名为空',
                                    '请输入',
                                    [
                                        { text: '确认', onPress: () => console.log('用户名为空'), style: 'cancel' },
                                    ],
                                )
                            }
                        }}
                    >登录</Btn>
                </View>
                <View>
                    <Text
                        style={{
                            position: 'relative',
                            left: 40,
                            top: 30,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('login2')
                        }}
                    >注册账号</Text>
                </View>
                <View>
                    <Text
                        style={{
                            position: 'relative',
                            left: w - 170,
                            top: 10,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('login3')
                        }}
                    >忘记密码？</Text>
                </View>
            </View> :
            <View>
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
                        onChangeText={this.onChangeShopValue}
                        value={this.state.shop}
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
                        onChangeText={this.onChangePswordValue}
                        value={this.state.psword}
                    />
                </View>
                <View>
                    <Btn
                        onPress={() => {

                        }}
                    >登录</Btn>
                </View>
                <View>
                    <Text
                        style={{
                            position: 'relative',
                            left: 40,
                            top: 30,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('')
                        }}
                    >注册账号</Text>
                </View>
                <View>
                    <Text
                        style={{
                            position: 'relative',
                            left: w - 170,
                            top: 10,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('')
                        }}
                    >忘记密码？</Text>
                </View>
            </View>;

        return (
            <View>
                <View style={{ width: w, height: h }}>
                    <ImageBackground
                        source={{ uri: 'https://c-ssl.duitang.com/uploads/blog/202103/28/20210328010048_796e6.thumb.1000_0.jpg' }}
                        style={{
                            width: w,
                            height: h,
                            position: 'relative',
                            
                        }}
                    />

                </View>

                <View
                    style={{
                        width: w - 60,
                        marginLeft: 30,
                        height: 330,
                        backgroundColor: 'white',
                        // marginTop: 350,
                        borderRadius: 25,
                        borderColor: '#eee',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        position:'absolute',
                        top:350,
                        opacity:0.8,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            // marginTop: 20,
                            justifyContent: 'center',
                            width: w - 60,
                            height: 40,
                            marginTop: 20,
                            // backgroundColor: 'white',
                        }}
                    >
                        {
                            tabs.map(tab => (
                                <View style={styles.kuang}>
                                    <Text
                                        onPress={() => this.setSelectTab(tab.id)}
                                        key={tab.id}
                                        style={[
                                            this.state.selectTab == tab.id ? styles.word : styles.word1
                                        ]}
                                    >
                                        {tab.text}
                                    </Text>
                                </View>
                            ))
                        }
                    </View>

                    {twoContent}
                </View>
                {/* <View>
                    <Text
                        onPress={()=>{
                            this.props.navigation.navigate('tabnav')
                        }}
                    >直接预览</Text>
                </View> */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    kuang: {
        width: w / 2 - 30,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    word: {
        height: 40,
        lineHeight: 40,
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ff8c00',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        color: 'black',
    },
    word1: {
        height: 40,
        lineHeight: 40,
        fontSize: 17,
        color: 'black',
    },
})
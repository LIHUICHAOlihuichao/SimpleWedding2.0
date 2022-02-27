import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import ImagePicker from 'react-native-image-crop-picker';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
import Icon from 'react-native-vector-icons/AntDesign';
const messagelist = [
    { id: 1, title: '昵称', content: '小小夏' },
    { id: 2, title: '年龄', content: 19 },
    { id: 3, title: '性别', content: '女' },
    { id: 4, title: '生日', content: '1997-03-26' },
    { id: 5, title: '手机号', content: '13389829989' },
    { id: 6, title: '修改地址', content: '***' },
    { id: 7, title: '头像', content: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F4c%2Fa6%2F31%2F4ca631a8841304be2351295d50cf801d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622970650&t=17734604723a0349903a3bab4377e3b7' }
]
let token = '1111';
function uploadImage(url, params) {
    return new Promise(function (resolve, reject) {
        let formData = new FormData();
        for (var key in params) {
            formData.append(key, params[key]);
        }
        let file = { uri: params.path, type: 'multipart/form-data', name: 'image.jpg' };
        formData.append("images", file);
        axios(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data;charset=utf-8',
                "x-access-token": token,
            },
            body: formData,
        })
            .then((responseData) => {
                console.log('uploadImage', responseData);
                resolve(responseData);
            })
            .catch((err) => {
                console.log('err', err);
                reject(err);
            });
    });
}
let clickHead = () => {
    ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true
    }).then(image => {
        uploadImage('http://10.7.86.197:8080/uploadImg', {
            user_id: '1',
            path: image.path
        })
            .then(res => {
                console.log('请求成功的时候',res)
                if (res.header.statusCode == 'success') {
                    upLoadImgUrl = res.body.imgurl;
                } else {
                    console.log('服务器返回异常', res.header.msgArray[0].desc);
                }
            }).catch(err => {
            })
    });
}
const Mine = (props) => {
    let { inputValue4,inputValue5,inputValue6,inputValue7,inputValue8, 
        inputValue9, getFun,data} = props
    useEffect(() => {
        getFun('http://10.7.86.197:8080/user/getuser?user_id=5')
    },[])
    const createTwoButtonAlert = () => {
        Alert.alert(
            "注销用户",
            "您确定要注销用户吗？",
            [
                {
                    text: "取消",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "确定", onPress: () => props.navigation.push('Mine') }
            ]
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.top}>
                <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15), width: ptd(40) }} onPress={() => { props.navigation.push('Mine') }}></Icon>
                <Text style={styles.title}>个人信息</Text>
            </View>
            <Image
                style={styles.touxiang}
                source={{
                    uri: data[0] ? data[0].user_image: messagelist[6].content,
                }}
            />
            <Text style={styles.changeimg} onPress={() => props.navigation.push('Photo')} >更改头像</Text>
            <View style={styles.list}>
                <TouchableOpacity style={styles.lists}
                    onPress={() => props.navigation.push('Change', { messagelist: messagelist })}
                >
                    <Text style={styles.class}>{messagelist[0].title}</Text>
                    <Text style={styles.content}>{inputValue4 ? inputValue4 : data[0] ? data[0].user_name : messagelist[0].content}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lists}
                    onPress={() => props.navigation.push('Change', { messagelist: messagelist })}
                >
                    <Text style={styles.class}>{messagelist[1].title}</Text>
                    <Text style={styles.content}>{inputValue5 ? inputValue5 : data[0] ? data[0].user_age : messagelist[1].content}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lists}
                    onPress={() => props.navigation.push('Change', { messagelist: messagelist })}
                >
                    <Text style={styles.class}>{messagelist[2].title}</Text>
                    <Text style={styles.content}>{inputValue6 ? inputValue6 : data[0] ? data[0].user_sex : messagelist[2].content}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lists}
                    onPress={() => props.navigation.push('Change', { messagelist: messagelist })}
                >
                    <Text style={styles.class}>{messagelist[3].title}</Text>
                    <Text style={styles.content}>{inputValue7 ? inputValue7 : data[0] ? data[0].wedding_day : messagelist[3].content}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lists}
                    onPress={() => props.navigation.push('Change', { messagelist: messagelist })}
                >
                    <Text style={styles.class}>{messagelist[4].title}</Text>
                    <Text style={styles.content}>{inputValue8 ? inputValue8 : data[0] ? data[0].user_phone : messagelist[4].content}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lists}
                    onPress={() => props.navigation.push('Change', { messagelist: messagelist })}
                >
                    <Text style={styles.class}>{messagelist[5].title}</Text>
                    <Text style={styles.content}>{inputValue9 ? inputValue9 : data[0] ? data[0].user_address : messagelist[4].content}</Text>
                </TouchableOpacity>
            </View>
            {/* 注销用户 */}
            <TouchableOpacity style={styles.del} onPress={() => createTwoButtonAlert()}><Text style={styles.deluser}>注销用户</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    aaa: {
        width: ptd(30), height: 40,
        position: 'absolute', marginLeft: ptd(340)
    },
    deluser: {
        color: 'white',
        fontSize: 20
    },
    del: {
        width: '30%',
        height: ptd(30),
        backgroundColor: '#FF5353',
        position: 'absolute',
        top: ptd(450),
        left: '35%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        position: 'absolute',
        right: ptd(20),
        color: '#ccc'
    },
    class: {
        fontSize: 20,
        paddingLeft: ptd(20),
        fontWeight: '100'
    },
    lists: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: '100%',
        height: 50,
        justifyContent: 'center'
    },
    list: {
        width: '100%',
        height: 300,
        position: 'absolute',
        top: ptd(160)
    },
    changeimg: {
        fontSize: 15,
        position: 'absolute',
        top: ptd(125),
        left: ptd(155),
        color: 'blue'
    },
    touxiang: {
        width: ptd(60),
        height: ptd(60),
        borderRadius: 50,
        position: 'absolute',
        top: ptd(60),
        left: ptd(150)
    },
    save: {
        fontSize: 25,
        position: 'absolute',
        right: ptd(15),
        top: ptd(5)
    },
    title: {
        fontSize: 20,
        position: 'absolute',
        top: ptd(7),
        left: ptd(150)
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
        borderBottomColor: '#ccc',
        borderWidth: 2
    }
});
export default connect(stateToProps, dispatchToProps)(Mine);

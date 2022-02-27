import React from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import qs from 'qs'
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
const Mine = (props) => {
    let { inputValue4, inputChange4,
        inputValue5, inputChange5,
        inputValue6, inputChange6,
        inputValue7, inputChange7,
        inputValue8, inputChange8,
        inputValue9, inputChange9} = props
    const showAlert=()=> {
        Alert.alert('修改完成','请返回查看');
    }
    const posturl = (obj, url) => {
        axios.put(url, qs.stringify(obj)).then((res) => {
            // console.log(res)
        })
        showAlert()
    }
    return (
        <View>
            <View style={styles.top}>
                <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15), width: ptd(40) }} onPress={() => { props.navigation.push('Mymessage') }}></Icon>
                <Text style={styles.title}>修改个人信息</Text>
                <Text style={styles.save} onPress={() => {
                    posturl(
                        {
                            user_id: 1,
                            user_name: inputValue4,
                            user_password: '123456',
                            user_age: inputValue5,
                            user_sex: inputValue6,
                            wedding_day: inputValue7,
                            user_phone: inputValue8,
                            user_address: inputValue9
                        },
                        'http://10.7.86.197:8080/user/updateuser')
                }}>√</Text>
            </View>
            <View style={{ marginTop: 50 }}></View>
            <Text style={styles.class}>{props.route.params.messagelist[0].title}:</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange4}
                multiline={true}
                autoFocus={true}
                value={inputValue4}>
            </TextInput>
            <Text style={styles.class}>{props.route.params.messagelist[1].title}:</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange5}
                multiline={true}
                value={inputValue5}>
            </TextInput>
            <Text style={styles.class}>{props.route.params.messagelist[2].title}:</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange6}
                multiline={true}
                value={inputValue6}>
            </TextInput>
            <Text style={styles.class}>{props.route.params.messagelist[3].title}:</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange7}
                multiline={true}
                value={inputValue7}>
            </TextInput>
            <Text style={styles.class}>{props.route.params.messagelist[4].title}:</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange8}
                multiline={true}
                value={inputValue8}>
            </TextInput>
            <Text style={styles.class}>{props.route.params.messagelist[5].title}:</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange9}
                multiline={true}
                value={inputValue9}>
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: ptd(300),
        marginLeft: ptd(40),
        marginTop: 5
    },
    content: {
        position: 'absolute',
        right: ptd(20),
        color: '#ccc'
    },
    class: {
        fontSize: 20,
        paddingLeft: ptd(20),
        fontWeight: '100',
    },
    lists: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        marginTop: 60
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
        left: ptd(140),
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

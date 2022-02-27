import React, {useEffect} from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import qs from 'qs'
import axios from 'axios'//当页面有第二个get/post/put/delete方法时，直接使用axios调用
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'//变量
import dispatchToProps from '../store/dispatchToProps'//方法
const collectlist = [
    { id: 1, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, fraction: 'Mrs Lin婚礼策划工作室', address: '韶山路怡景园13栋1门301', title1: '婚礼策划', title2: '棠湖古城' },
]
var getTime = () => {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    return year + '/' + month + '/' + day ;
}
const Memorandum = (props) => {
    let { inputValue, inputChange, inputValue1, inputChange1, clickBtn, getFun4, data4} = props
    useEffect(() => {
        getFun4('http://10.7.86.197:8080/memo/?user_id=5')
    },[])
    const deleteFun2 = (url) => {
        axios.delete(url).then((res) => {
            // console.log(res)
            getFun4('http://10.7.86.197:8080/memo/?user_id=5')
        })
        
    }
    const posturl = (obj, url) => {
        clickBtn()
        console.log(qs.stringify(obj))
        axios.post(url, qs.stringify(obj)).then((res) => {
            // console.log(res)
            getFun4('http://10.7.86.197:8080/memo/?user_id=5')
        })
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <View style={styles.top}>
                <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { props.navigation.push('Mine') }}></Icon>
                <Text style={styles.title}>备忘录</Text>
                <Text style={styles.save} 
                    onPress={() => {
                        posturl(
                            {
                                user_id: 5,
                                memo_title:inputValue,
                                memo_content:inputValue1,
                                memo_time:getTime(),
                            },
                            'http://10.7.86.197:8080/memo/postmemo/')
                    }}
                >√</Text>
            </View>
            <Text style={styles.titlevalue}>标题：</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange}
                multiline={true}
                autoFocus={true}
                value={inputValue}>
            </TextInput>
            <Text style={styles.titlevalue1}>内容：</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange1}
                multiline={true}
                value={inputValue1}>
            </TextInput>
            <Text style={styles.jilu}>全部记录:</Text>
            <View>
                {
                    data4.map((item, index) => {
                        return (
                            <TouchableOpacity style={styles.tab} key={index}
                                onPress={() => { props.navigation.push('Bianqian', { item: item }) }}
                            >
                                <Text style={styles.jilutitle}>{item.memo_title}</Text>
                                <Text style={styles.time}>{item.memo_time}</Text>
                                <TouchableOpacity style={styles.delbtn}
                                    onPress={() => deleteFun2('http://10.7.86.197:8080/memo/deletememo/?memo_id=' + item.memo_id+'&user_id='+item.user_id)}
                                ><Text style={styles.del}>×</Text></TouchableOpacity>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    delbtn:{
        backgroundColor:'#ccc',
        width:ptd(25),
        height:30,
        position:'absolute',
        left:ptd(274),
        borderTopRightRadius: 9,
        justifyContent:'center',
        alignItems:'center'
    },
    del:{
        fontSize:30,
        color:'white',
    },
    time: {
        marginLeft: ptd(10),
        marginTop: ptd(10)
    },
    jilutitle: {
        fontSize: 25,
        paddingLeft: ptd(10),
        paddingTop: ptd(5)
    },
    tab: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: ptd(300),
        height: ptd(80),
        marginLeft: ptd(35),
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: ptd(10)
    },
    jilu: {
        fontSize: 20,
        marginTop: ptd(30),
        marginLeft: ptd(35)
    },
    titlevalue: {
        marginTop: ptd(50),
        marginLeft: ptd(35)
    },
    titlevalue1: {
        marginTop: ptd(20),
        marginLeft: ptd(35)
    },
    input: {
        marginLeft: ptd(35),
        borderColor: '#ccc',
        borderWidth: 1,
        width: '80%'
    },
    save: {
        fontSize: 25,
        position: 'absolute',
        right: ptd(15),
        top: ptd(5)
    },
    note: {
        marginLeft: ptd(170),
        marginTop: ptd(10)
    },
    address: {
        marginLeft: ptd(170),
        marginTop: ptd(10)
    },
    fraction: {
        marginLeft: ptd(170),
        marginTop: ptd(10)
    },
    img: {
        height: ptd(110),
        width: ptd(150),
        position: 'absolute',
        top: ptd(10),
        left: ptd(10)
    },
    lists: {
        width: '90%',
        height: ptd(130),
        borderTopRightRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        marginLeft: '5%',
        marginTop: 60
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
export default connect(stateToProps, dispatchToProps)(Memorandum);

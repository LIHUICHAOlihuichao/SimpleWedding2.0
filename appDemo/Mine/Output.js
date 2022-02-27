import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text, TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import qs from 'qs'
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
const outlist = [
    { id: 1, title: '买婚纱', money: 30000 },
    { id: 2, title: '婚纱照', money: 15000 },
]
const add3=(data3)=>{
    let money=0
    for(let i=0;i <data3.length;i++){
        money=money+data3[i].consume_amount
    }
    return money
}
const Output = (props) => {
    let { inputValue10, inputChange10,inputValue11, inputChange11, clickBtn2, postFun, deleteFun, getFun3, putFun,
        list2, data3, post, } = props
    const [selectTab, setSelectTab] = useState(0)
    useEffect(() => {
        getFun3('http://10.7.86.197:8080/consume/?user_id=5')
    },[])
    const deleteFun2 = (url)=> {
        axios.delete(url).then((res) => {
            // console.log(res)
            getFun3('http://10.7.86.197:8080/consume/?user_id=5')
        })
    }
    const posturl = (obj, url) => {
        axios.post(url, qs.stringify(obj)).then((res) => {
            // console.log(res)
            getFun3('http://10.7.86.197:8080/consume/?user_id=5')
        })
    }
    return (
        <ScrollView style={{ backgroundColor: '#F7F7F8' }}>
            <TouchableOpacity style={styles.goback}>
                <Icon name="left" size={30} color='black' style={{marginTop:10,marginLeft:ptd(15)}} onPress={()=>{ props.navigation.push('Account') }}></Icon>
            </TouchableOpacity>
            <Text style={styles.titlevalue}>物品：</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange10}
                multiline={true}
                autoFocus={true}
                value={inputValue10}>
            </TextInput>
            <Text style={styles.titlevalue1}>金额：</Text>
            <TextInput style={styles.input}
                onChangeText={inputChange11}
                multiline={true}
                value={inputValue11}>
            </TextInput>
            <TouchableOpacity style={styles.addbtn}
            onPress={() => {
                posturl(
                    {
                        user_id: 5,
                        consume_content:inputValue10,
                        consume_amount:inputValue11
                    },
                    'http://10.7.86.197:8080/consume/postconsume')
            }}><Text style={styles.add}>+</Text></TouchableOpacity>
            <Text style={styles.output}>支出列表:</Text>
            <View style={styles.lists}>
                {
                    data3.map((item, idx) => (
                        <View style={styles.onelist} key={idx}>
                            <Text style={styles.title}>{item.consume_content}</Text>
                            <Text style={styles.money}>￥{item.consume_amount}</Text>
                            <TouchableOpacity style={styles.delbtn}
                            onPress={() => deleteFun2('http://10.7.86.197:8080/consume/deleteconsume?consume_id='+item.consume_id)}><Text style={styles.del}>×</Text></TouchableOpacity>
                        </View>
                    ))
                }

            </View>
            <Text style={styles.account}>合计：{add3(data3)}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    goback: {
        height: 40,
        width: 60,
    },
    titlevalue:{
        marginTop:ptd(10),
        marginLeft:ptd(35)
    },
    titlevalue1:{
        marginTop:ptd(10),
        marginLeft:ptd(35)
    },
    input:{
        marginLeft:ptd(35),
        borderColor:'#ccc',
        borderWidth:1,
        width:'80%'
    },
    add:{
        fontSize:30,
        marginTop:-5,
        color:'white'
    },
    addbtn:{
        backgroundColor:'#ccc',
        height:30,
        width:ptd(25),
        position:'absolute',
        left:ptd(310),
        top:15,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    del:{
        fontSize:30,
        marginTop:-5,
        color:'white'
    },
    delbtn:{
        backgroundColor:'#ccc',
        height:30,
        width:ptd(25),
        position:'absolute',
        left:ptd(290),
        top:10,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    account:{
        paddingLeft:ptd(20)
    },
    title:{
        paddingLeft:ptd(10)
    },
    money:{
        position:'absolute',
        paddingLeft:ptd(220)
    },
    onelist: {
        justifyContent:'center',
        width: '100%',
        height: 50,
        borderWidth:1,
        borderColor:'#ccc',
        marginBottom:2
    },
    lists: {
        marginTop: ptd(20),
        width: ptd(335),
        marginLeft: ptd(20),
    },
    output: {
        paddingLeft: ptd(20),
        paddingTop: ptd(10),
        fontSize: 15
    },
    back: {
        paddingLeft: ptd(20),
        paddingTop: ptd(10),
        fontSize: 20
    }
});
export default connect(stateToProps, dispatchToProps)(Output);

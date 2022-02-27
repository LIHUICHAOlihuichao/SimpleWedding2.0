import React, { useState, useEffect, useReducer } from 'react'
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
import Icon from 'react-native-vector-icons/AntDesign';
const accountlist = [
    { id: 1, content: '随时随地记录备婚开销' },
    { id: 2, content: '合理控制预算' },
    { id: 3, content: '掌握开销动态' },
]
const add3=(data3)=>{
    let money=0
    for(let i=0;i <data3.length;i++){
        money=money+data3[i].consume_amount
    }
    return money
}
const add1=(data1)=>{
    let money=0
    for(let i=0;i <data1.length;i++){
        money=money+data1[i].income_amount
    }
    return money
}
const Account = (props) => {
    let {getFun3,getFun1,data1,data3} = props
    const [selectTab, setSelectTab] = useState(0)
    useEffect(() => {
        getFun3('http://10.7.86.197:8080/consume/?user_id=5')
        getFun1('http://10.7.86.197:8080/income/?user_id=5')
    },[])
    return (
        <ScrollView style={{ backgroundColor: '#F7F7F8' }}>
            <Icon name="left" size={30} color='black' style={{marginTop:10,marginLeft:ptd(15)}} onPress={()=>{ props.navigation.push('Mine') }}></Icon>
            <TouchableOpacity style={styles.output} onPress={()=>{ props.navigation.push('Output')}}>
                <Text style={styles.out}>消费支出</Text>
                <Text style={styles.outmoney}>￥{add3(data3)}</Text>
                <View style={styles.outbtn}><Text style={styles.btn1}>记支出</Text></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.output} onPress={()=>{ props.navigation.push('Input')}}>
                <Text style={styles.out}>礼金收入</Text>
                <Text style={styles.outmoney}>￥{add1(data1)}</Text>
                <View style={styles.outbtn}><Text style={styles.btn1}>记礼金</Text></View>
            </TouchableOpacity>
            <View style={styles.note}>
                <Text style={styles.hi}>Hi,通过结婚账本，你可以：</Text>

                {
                    accountlist.map((item, idx) => (
                        <View key={idx} style={styles.container}>
                            <View style={styles.font}>
                                <Text style={styles.dui}>√</Text>
                            </View>
                            <Text style={styles.content}>{item.content}</Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        paddingLeft:ptd(30),
        fontSize:17
    },
    dui: {
        color: 'white',
        fontSize: 22,
        paddingBottom:2
    },
    font: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F15959',
        height: ptd(15),
        width: ptd(15),
        borderRadius: 20,
        marginLeft:ptd(5)
    },
    container: {
        height: 40,
        width: '100%',
        justifyContent:'center'
    },
    hi: {
        fontSize: 22,
        marginBottom:10
    },
    note: {
        borderColor: '#ccc',
        height: 170,
        width: ptd(240),
        borderWidth: 1,
        marginTop: ptd(30),
        marginLeft: ptd(100)
    },
    btn1: {
        transform: [
            { scaleY: 1.6 }
        ],
        color: '#FF7F50',

    },
    outbtn: {
        height: 40,
        width: 60,
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outmoney: {
        color: 'white',
        transform: [
            { scaleY: 1.6 }
        ],
        marginTop: 25
    },
    out: {
        color: 'white',
        fontSize: 18,
        transform: [
            { scaleY: 1.6 }
        ],
        paddingTop: 25,
    },
    output: {
        alignItems: 'center',
        width: ptd(150),
        height: ptd(150),
        backgroundColor: '#FF7F50',
        marginTop: 20,
        marginLeft: ptd(110),
        borderRadius: 280,
        transform: [
            { scaleX: 1.6 }
        ]
    },
    back: {
        paddingLeft: ptd(20),
        paddingTop: ptd(10),
        fontSize: 20
    }

});
//每个自己写的组件（页面）都要用下面这一行
export default connect(stateToProps, dispatchToProps)(Account);

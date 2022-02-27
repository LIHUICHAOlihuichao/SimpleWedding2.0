import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
import Icon from 'react-native-vector-icons/AntDesign';
const Set = (props) => {
    return (
        <ScrollView style={{ backgroundColor: '#F5F5F5'}}>
            <View style={styles.top}>
            <Icon name="left" size={30} color='black' style={{marginTop:10,marginLeft:ptd(15)}} onPress={()=>{ props.navigation.push('Mine') }}></Icon>
                <Text style={styles.title}>设置</Text>
            </View>
            <View style={styles.list}>
                <TouchableOpacity style={styles.lists}><Text style={styles.name}>意见反馈</Text><Text style={styles.jiantou}>></Text></TouchableOpacity>
                <TouchableOpacity style={styles.lists}><Text style={styles.name}>关于我们</Text><Text style={styles.jiantou}>></Text></TouchableOpacity>
                {/* 跳转换成登陆页面 */}
                <TouchableOpacity style={styles.lists} onPress={()=>{ props.navigation.push('Mine') }}><Text style={styles.name}>退出登录</Text><Text style={styles.jiantou}>></Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    jiantou:{
        position:'absolute',
        paddingLeft:ptd(300),
        fontSize:25
    },
    list:{
        width:'90%',
        height:400,
        marginTop:70
    },
    name:{
        fontSize:18,

    },
    lists:{
        justifyContent:'center',
        height:50,
        width:ptd(330),
        marginLeft:ptd(20),
    },
    title: {
        fontSize: 20,
        position: 'absolute',
        top: ptd(7),
        left: ptd(160)
    },
    back: {
        paddingLeft: ptd(10),
        marginTop: ptd(10),
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
export default connect(stateToProps, dispatchToProps)(Set);

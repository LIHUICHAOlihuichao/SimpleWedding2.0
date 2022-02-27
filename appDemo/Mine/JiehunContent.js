import React from 'react'
import { ScrollView, View, Text, StyleSheet, Image} from 'react-native'
import { connect } from 'react-redux'
import stateToProps from '../store/stateToProps'//变量
import dispatchToProps from '../store/dispatchToProps'//方法
import Icon from 'react-native-vector-icons/AntDesign';
const JiehunContent = (props) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <View style={styles.top}>
            <Icon name="left" size={30} color='black' style={{marginTop:10,marginLeft:ptd(15)}} onPress={()=>{ props.navigation.push('Game') }}></Icon>
            </View>
            <Image
                style={styles.game1}
                source={
                    require('../images/game3.jpg')
                }
            />
            <Text style={styles.title}>结婚必备 |  歌词大战</Text>
            <Text style={[styles.title, { fontSize: 18, marginTop: ptd(25) }]}>游戏道具：</Text>
            <Text style={[styles.title, { fontSize: 18, marginTop: ptd(5) }]}>歌词</Text>
            <Text style={[styles.title, { fontSize: 18, marginTop: ptd(25) }]}>游戏玩法：</Text>
            <Text style={[styles.title, { fontSize: 15, lineHeight: 30 }]}>伴郎把脸放在打脸机里，按旁边的按钮，看谁打脸次数多。打脸次数多的人必须做10个俯卧撑！也可以选择让新郎伴郎站一排，婚房内的新娘任意点数，点到的那个人，伴娘团可以要求他边唱歌边做俯卧撑！</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        marginLeft: ptd(20),
        marginTop: ptd(10)
    },
    game1: {
        width: '100%',
        height: 240,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: ptd(40),
        marginLeft: 1
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
export default connect(stateToProps, dispatchToProps)(JiehunContent);

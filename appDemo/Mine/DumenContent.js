import React, { useState, useEffect, useReducer } from 'react'
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
const DumenContent = (props) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <View style={styles.top}>
                <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { props.navigation.push('Game') }}></Icon>
            </View>
            <Image
                style={styles.game1}
                source={
                    require('../images/game2.jpg')
                }
            />
            <Text style={styles.title}>堵门游戏 |  红丝带牵红绳</Text>
            <Text style={[styles.title, { fontSize: 18, marginTop: ptd(25) }]}>游戏道具：</Text>
            <Text style={[styles.title, { fontSize: 18, marginTop: ptd(5) }]}> 红丝带&nbsp;红绳</Text>
            <Text style={[styles.title, { fontSize: 18, marginTop: ptd(25) }]}>游戏玩法：</Text>
            <Text style={[styles.title, { fontSize: 15, lineHeight: 30 }]}>伴郎把脸放在打脸机里，按旁边的按钮，看
            谁打脸次数多。打脸次数多的人必须做10个
            俯卧撑！
            也可以选择让新郎伴郎站一排，婚房内的新
            娘任意点数，点到的那个人，伴娘团可以要
            求他边唱歌边做俯卧撑！</Text>
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
export default connect(stateToProps, dispatchToProps)(DumenContent);

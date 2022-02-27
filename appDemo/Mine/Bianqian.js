import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign';
const Bianqian = (props) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <View style={styles.top}>
            <Icon name="left" size={30} color='black' style={{marginTop:10,marginLeft:ptd(15)}} onPress={()=>{ props.navigation.push('Memorandum') }}></Icon>
                <Text style={styles.title}>便签</Text>
            </View>
            <View style={styles.tab}>
                <Text style={styles.titlevalue}>{props.route.params.item.memo_title}</Text>
                <Text style={styles.content}>{props.route.params.item.memo_content}</Text>
            </View>
            <Text style={styles.time}>{props.route.params.item.memo_time}</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    time: {
        position:'absolute',
        top:ptd(520),
        left:ptd(250)
    },
    content: {
        paddingLeft: ptd(10),
        paddingTop: ptd(5)
    },
    titlevalue: {
        fontSize: 20,
        marginTop: ptd(5),
        paddingLeft: ptd(120)
    },
    tab: {

        borderWidth: 1,
        borderColor: '#ccc',
        width: ptd(300),
        height: ptd(480),
        marginLeft: ptd(35),
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: ptd(60)
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
//每个自己写的组件（页面）都要用下面这一行
export default connect(stateToProps, dispatchToProps)(Bianqian);

import React from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
const Seat = (props) => {
    let { inputValue2, inputChange2, inputValue3, inputChange3 } = props
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <View style={styles.top}>
            <Icon name="left" size={30} color='black' style={{marginTop:10,marginLeft:ptd(15)}} onPress={()=>{ props.navigation.push('Mine') }}></Icon>
                <Text style={styles.title}>婚宴座位</Text>
                <Text style={styles.save}>+</Text>
            </View>
            <View style={styles.div}></View>
           
            <View style={styles.desk}>
                <View style={styles.zhuo}><Text style={styles.desktitle}>1号桌</Text></View>
                <Text style={{ paddingLeft: ptd(20) }}>宾客姓名:</Text>
                <TextInput style={styles.input}
                    onChangeText={inputChange2}
                    multiline={true}
                    autoFocus={true}
                    value={inputValue2}>
                </TextInput>
                <Text style={{ paddingLeft: ptd(20),marginTop:5 }}>注意事项:</Text>
                <TextInput style={styles.input1}
                    onChangeText={inputChange3}
                    multiline={true}
                    autoFocus={true}
                    value={inputValue3}>
                </TextInput>
                <Text style={styles.baocun}>保存</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    baocun: {
        fontSize: 20,
        color: '#FC7E7E',
        marginTop: -35,
        marginLeft: ptd(300)
    },
    desktitle: {
        fontSize: 18,
        color: '#FC7E7E'
    },
    zhuo: {
        width: ptd(75),
        height: 35,
        borderWidth: 2,
        borderColor: '#FC7E7E',
        borderRadius: 20,
        marginTop: 15,
        marginLeft: ptd(130),
        justifyContent: 'center',
        alignItems: 'center'
    },
    desk: {
        height: 250,
        width: ptd(350),
        backgroundColor: 'white',
        marginLeft: ptd(13),
        marginTop: 10
    },
    div: {
        marginTop: 50
    },
    input: {
        marginLeft: ptd(20),
        borderColor: '#ccc',
        borderWidth: 1,
        width: '90%',
        height: 90,
        marginTop: 10
    },
    input1: {
        marginLeft: ptd(20),
        width: '75%',
        height: 40,
        marginTop: 10,
        borderColor: '#ccc',
        borderWidth: 1,
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
export default connect(stateToProps, dispatchToProps)(Seat);

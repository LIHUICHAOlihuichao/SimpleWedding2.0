import React, { useState, useEffect} from 'react'
import { ScrollView, View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
import Icon from 'react-native-vector-icons/AntDesign';
const collectlist = [
    { id: 1, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, fraction: 'Mrs Lin婚礼策划工作室', address: '韶山路怡景园13栋1门301', title1: '婚礼策划', title2: '棠湖古城' },
]
const tabs = [
    { text: '婚礼誓言', id: 0 },
    { text: '婚礼致辞', id: 1 },
]
const tabs1 = [
    { text: '新郎誓言', id: 0 },
    { text: '新娘誓言', id: 1 },
]
const tabs2 = [
    { text: '男方父母', id: 0 },
    { text: '女方父母', id: 1 },
]
const Pledge = (props) => {
    let { getFun11, data11} = props
    useEffect(() => {
        getFun11('http://10.7.86.197:8080/wedding_vows/')
    }, [])
    const [selectTab, setSelectTab] = useState(0)
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.top}>
                <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { props.navigation.push('Mine') }}></Icon>
                <Text style={styles.title}>婚礼誓言</Text>
            </View>
            <View style={styles.nav}>
                {
                    tabs.map((item, idx) => <Text
                        onPress={() => setSelectTab(item.id)}
                        key={idx}
                        style={[styles.tabs, { fontSize: selectTab == item.id ? 20 : 15 }]}>{item.text}</Text>)
                }
            </View>
            <Tab isTab={selectTab} navigation={props.navigation} data11={data11}></Tab>
        </ScrollView>
    )
}
const Tab = (props) => {
    if (props.isTab == 0) {
        return <Shiyan navigation={props.navigation} data11={props.data11}></Shiyan>
    } else if (props.isTab == 1) {
        return <Zhici navigation={props.navigation} data11={props.data11}></Zhici>
    }
}
const Tab1 = (props) => {
    if (props.isTab == 0) {
        return <Bridegroom navigation={props.navigation} data11={props.data11}></Bridegroom>
    } else if (props.isTab == 1) {
        return <Bride navigation={props.navigation} data11={props.data11}></Bride>
    }
}
const Tab2 = (props) => {
    if (props.isTab == 0) {
        return <Man navigation={props.navigation} data11={props.data11}></Man>
    } else if (props.isTab == 1) {
        return <Women navigation={props.navigation} data11={props.data11}></Women>
    }
}
const Man = (props) => {
    return (
    <ScrollView>
            {
                props.data11.map((item, idx) => {
                    if (item.type_name == "男方父母") {
                        return <ScrollView key={idx} style={styles.content}>
                            <Text style={styles.vows_content}>{item.vows_content}</Text>
                        </ScrollView>
                    }
                })

            }
        </ScrollView>
    )
}
const Women = (props) => {
    return (
        <ScrollView>
            {
                props.data11.map((item, idx) => {
                    if (item.type_name == "女方父母") {
                        return <ScrollView key={idx} style={styles.content}>
                            <Text style={styles.vows_content}>{item.vows_content}</Text>
                        </ScrollView>
                    }
                })

            }
        </ScrollView>
    )
}
const Bridegroom = (props) => {
    return (
        <ScrollView>
            {
                props.data11.map((item, idx) => {
                    if (item.type_name == "新朗") {
                        return <ScrollView key={idx} style={styles.content}>
                            <Text style={styles.vows_content}>{item.vows_content}</Text>
                        </ScrollView>
                    }
                })

            }
        </ScrollView>
    )
}
const Bride = (props) => {
    return (
        <ScrollView>
            {
                props.data11.map((item, idx) => {
                    if (item.type_name == "新娘") {
                        return <ScrollView key={idx} style={styles.content}>
                            <Text style={styles.vows_content}>{item.vows_content}</Text>
                        </ScrollView>
                    }
                })

            }
        </ScrollView>
    )
}
const Shiyan = (props) => {
    const [selectTab1, setSelectTab1] = useState(0)
    return (
        <TouchableOpacity style={styles.div1}>
            <View style={styles.nav1}>
                {
                    tabs1.map((item, idx) => <Text
                        onPress={() => setSelectTab1(item.id)}
                        key={idx}
                        style={[styles.tabs1, { fontSize: selectTab1 == item.id ? 17 : 13, backgroundColor: selectTab1 == item.id ? '#FF5353' : '#ccc' }]}>{item.text}</Text>)
                }
            </View>
            <Tab1 isTab={selectTab1} navigation={props.navigation} data11={props.data11}></Tab1>

        </TouchableOpacity>

    )
}
const Zhici = (props) => {
    const [selectTab2, setSelectTab2] = useState(0)
    return (
        <TouchableOpacity style={styles.div1}>
            <View style={styles.nav1}>
                {
                    tabs2.map((item, idx) => <Text
                        onPress={() => setSelectTab2(item.id)}
                        key={idx}
                        style={[styles.tabs1, { fontSize: selectTab2 == item.id ? 17 : 13, backgroundColor: selectTab2 == item.id ? '#FF5353' : '#ccc' }]}>{item.text}</Text>)
                }
            </View>
            <Tab2 isTab={selectTab2} navigation={props.navigation} data11={props.data11}></Tab2>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    content:{
        width:ptd(330),
        marginLeft:ptd(25),
        marginTop:20,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#FF5353',
    },
    vows_content: {
        padding: ptd(10),
        fontSize:17,
        color:'black'
    },
    game1: {
        width: ptd(300),
        height: 270
    },
    nav1: {
        height: 60,
        width: ptd(180),
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: ptd(20)
    },
    div1: {
        width: '100%',
    },
    tabs1: {
        lineHeight: 40,
        flex: 1,
        fontSize: 15,
        color: 'white',
        paddingLeft: ptd(20)
    },
    text: {
        fontSize: 20,
        paddingTop: 15,
        paddingLeft: ptd(10)
    },
    div: {
        width: '90%',
        borderColor: '#ccc',
        borderWidth: 1,
        marginLeft: '5%',
        marginTop: ptd(20),
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    tabs: {
        lineHeight: 40,
        flex: 1,
        fontSize: 15,
        color: 'white',
        marginLeft: 45
    },
    nav: {
        height: 60,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FF5353',
        paddingTop: 10,
        marginTop: 50
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
export default connect(stateToProps, dispatchToProps)(Pledge);

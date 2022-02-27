import React, { useState, useEffect, useReducer } from 'react'
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
const collectlist = [
    { id: 1, img: { uri: 'https://reactnative.dev/img/tiny_logo.png' }, fraction: 'Mrs Lin婚礼策划工作室', address: '韶山路怡景园13栋1门301', title1: '婚礼策划', title2: '棠湖古城' },
]
const Collect = (props) => {
    let { getFun2, getFun9, getFun10, data2, data9, data10 } = props
    useEffect(() => {
        getFun2('http://10.7.86.197:8080/user_photo_collect/photo_collect/?user_id=5')
        getFun9('http://10.7.86.197:8080/user_planner_collect/planner_collect/?user_id=5')
        getFun10('http://10.7.86.197:8080/user_dress_collect/dress_collect/?user_id=5')
    }, [])
    const deleteFun2 = (url) => {
        axios.delete(url).then((res) => {
            // console.log(res)
            getFun2('http://10.7.86.197:8080/user_photo_collect/photo_collect/?user_id=5')
            getFun9('http://10.7.86.197:8080/user_planner_collect/planner_collect/?user_id=5')
            getFun10('http://10.7.86.197:8080/user_dress_collect/dress_collect/?user_id=5')
        })

    }
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.top}>
                <TouchableOpacity style={styles.goback}
                    onPress={() => { props.navigation.push('Mine') }}
                >
                    <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { props.navigation.push('Mine') }}></Icon>
                </TouchableOpacity>
                <Text style={styles.title}>已收藏</Text>
            </View>
            {/* 收藏列表 */}
            <View style={styles.bottom}>
                <Text style={styles.sheying}>摄影收藏</Text>
                <View>
                    {
                        data2.map((item, idx) => {
                            if (item.isClick == 1) {
                                return <TouchableOpacity style={styles.lists} key={idx}>
                                    <Image
                                        style={styles.img}
                                        source={{ uri: item.photo_img1 }}
                                    />
                                    <Text style={styles.fraction}>{item.photo_name}</Text>
                                    <Text style={styles.address}>地址：{item.shop_address}</Text>
                                    <TouchableOpacity style={styles.delbtn}
                                        onPress={() => deleteFun2('http://10.7.86.197:8080/user_photo_collect/deletephotocollect/?id=' + item.id + '&user_id=' + 5)}
                                    ><Text style={styles.del}>×</Text></TouchableOpacity>
                                </TouchableOpacity>
                            }
                        }
                        )
                    }
                </View>
                <Text style={styles.cehua}>策划收藏</Text>
                <View>
                    {
                        data9.map((item, idx) => {
                            if (item.isClick == 1) {
                                return <TouchableOpacity style={styles.lists} key={idx}>

                                    <Image
                                        style={styles.img}
                                        source={{ uri: item.planner_img1 }}
                                    />
                                    <Text style={styles.fraction}>{item.planner_name}</Text>
                                    <Text style={styles.address}>地址：{item.shop_address}</Text>
                                    <Text style={styles.note}>标签：<Text style={{ color: 'red' }}>{item.photo_name}</Text></Text>
                                    <TouchableOpacity style={styles.delbtn}
                                        onPress={() => deleteFun2('http://10.7.86.197:8080/user_planner_collect/deleteplannercollect/?id=' + item.id + '&user_id=' + 5)}
                                    ><Text style={styles.del}>×</Text></TouchableOpacity>
                                </TouchableOpacity>
                            }
                        }

                        )
                    }
                </View>
                <Text style={styles.sheying}>礼服收藏</Text>
                {
                    data10.map((item, idx) => {
                        if (item.isClick == 1) {
                            return <TouchableOpacity style={styles.lists} key={idx}>
                                <Image
                                    style={styles.img}
                                    source={{ uri: item.dress_img1 }}
                                />
                                <Text style={styles.fraction}>{item.dress_name}</Text>
                                <Text style={styles.address}>地址：{item.shop_address}</Text>
                                <TouchableOpacity style={styles.delbtn}
                                    onPress={() => deleteFun2('http://10.7.86.197:8080/user_dress_collect/deletedresscollect/?id=' + item.id + '&user_id=' + 5)}
                                ><Text style={styles.del}>×</Text></TouchableOpacity>
                            </TouchableOpacity>

                        }
                    }

                    )
                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    cehua: {
        paddingLeft: ptd(20),
        paddingTop: 30,
        fontSize: 17
    },
    bottom: {
        width: '100%',
    },
    goback: {
        height: 40,
        width: 60,
    },
    sheying: {
        paddingLeft: ptd(20),
        paddingTop: 10,
        fontSize: 17
    },
    delbtn: {
        backgroundColor: '#ccc',
        width: ptd(25),
        height: 30,
        position: 'absolute',
        left: ptd(311),
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    del: {
        fontSize: 30,
        color: 'white'
    },
    note: {
        marginLeft: ptd(167),
    },
    address: {
        marginLeft: ptd(167),
    },
    fraction: {
        paddingTop: ptd(30),
        paddingLeft: ptd(167),
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
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        position: 'absolute',
        top: ptd(7),
        left: ptd(160),
    },
    back: {
        paddingLeft: ptd(10),
        marginTop: ptd(10)
    },
    top: {
        width: '100%',
        height: 50,
        backgroundColor: '#F8F8F8',
        borderColor: '#F8F8F8',
        borderWidth: 2
    }
});
export default connect(stateToProps, dispatchToProps)(Collect);

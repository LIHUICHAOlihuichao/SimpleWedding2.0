import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet } from 'react-native'

import '../common/global';

const tabs = [
    { text: '婚礼案例', id: 0 },
    { text: '找商家', id: 1 },
];

export default class Cehua extends Component {

    constructor(props) {
        super(props)
      
        let yy = this.props.route.params;
        this.state = {
            selectTab: 0,
            selectType: '全部',
            
            shuju: [{ "style_id": 0, "style_name": "全部" },],

            tp: [],
            ch: [],
            sp: [],
            weizhi:yy.weizhi,
            wzid:yy.wzid,
        }
    }

    setSelectTab(e) {
        this.setState({ selectTab: e });
    }

    setSelectType(e) {
        this.setState({ selectType: e });
    }

    componentDidMount() {
        var _that = this;

        // http://10.7.86.197:8080

        return (
            fetch('http://10.7.86.197:8080/planner_style/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        tp: responseJson,
                        shuju: _that.state.shuju.concat(responseJson)
                    }, function () {
                        console.log(this.state.shuju)
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),
            fetch('http://10.7.86.197:8080/planner/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        ch: responseJson.filter(item=>item.city_id==this.state.wzid),
                    }, function () {
                        // console.log(this.state.ch)
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),

            fetch('http://10.7.86.197:8080/shop/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        sp: responseJson.filter(item => item.shop_typeid == 3).filter(item=>item.city_id==this.state.wzid),
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                })


        )



    }
    // http://172.20.10.6:8080/planner

    render() {

        let twoContent = (this.state.selectTab == '0') ? (this.state.selectType === '全部') ?
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 3,
                        width: w,
                        height: 50,
                        backgroundColor: 'white',

                    }}
                >

                    {
                        this.state.shuju.map(tab => (
                            <Text onPress={() => this.setSelectType(tab.style_name)}
                                style={[
                                    this.state.selectType === tab.style_name ? styles.leixing : styles.leixing1
                                ]}>
                                <Text

                                    key={tab.id}
                                    // style={[
                                    //     styles.text1
                                    // ]}
                                    style={[
                                        this.state.selectType === tab.style_name ? styles.text : styles.text1
                                    ]}
                                >
                                    {tab.style_name}
                                </Text>
                            </Text>
                        ))
                    }


                </ScrollView>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            // height: 100,
                            paddingTop: 10,
                            justifyContent: 'center',
                            // alignItems:'center',
                        }}
                    >
                        {
                            this.state.ch.map(tab => (
                                <Text
                                    style={styles.spk}
                                    onPress={() => {
                                        this.props.navigation.navigate('chdetail', {
                                            id: tab.planner_id,
                                            dpname: tab.shop_name,

                                        })
                                    }
                                    }
                                >
                                    <View>
                                        <Image
                                            source={{ uri: tab.planner_img1 }}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.txt1}>{tab.planner_name}</Text>
                                    </View>
                                </Text>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
            :
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 3,
                        width: w,
                        height: 50,
                        backgroundColor: 'white',

                    }}>

                    {
                        this.state.shuju.map(tab => (
                            <Text onPress={() => this.setSelectType(tab.style_name)}
                                style={[
                                    this.state.selectType === tab.style_name ? styles.leixing : styles.leixing1
                                ]}>
                                <Text

                                    key={tab.id}
                                    // style={[
                                    //     styles.text1
                                    // ]}
                                    style={[
                                        this.state.selectType === tab.style_name ? styles.text : styles.text1
                                    ]}
                                >
                                    {tab.style_name}
                                </Text>
                            </Text>
                        ))
                    }

                </ScrollView>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            // height: 100,
                            paddingTop: 10,
                            justifyContent: 'center',
                            // alignItems:'center',
                        }}
                    >
                        {
                            this.state.ch.filter(item => item.style_name == this.state.selectType).map(tab => (
                                <Text
                                    style={styles.spk}
                                    onPress={() => {
                                        this.props.navigation.navigate('chdetail', {
                                            id: tab.planner_id,
                                            dpname: tab.shop_name,

                                        })
                                    }
                                    }
                                >
                                    <View>
                                        <Image
                                            source={{ uri: tab.planner_img1 }}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.txt1}>{tab.planner_name}</Text>
                                    </View>
                                </Text>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
            :
            // 商家那个列表
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        // height: 100,
                        paddingTop: 0,
                        justifyContent: 'center',
                        // alignItems:'center',
                    }}
                >
                    {
                        this.state.sp.map(tab => (
                            <Text
                                style={styles.dpspk}
                                onPress={() => {
                                    this.props.navigation.navigate('chdianpu', {
                                        name: tab.shop_name,
                                    })
                                }
                                }
                            >
                                <View>
                                    <Image
                                        // source={{ uri: tab.img }}
                                        source={{ uri: tab.shop_image }}
                                        style={styles.dpimage}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.dptxt1}>{tab.shop_name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dptxt2}>{this.state.ch.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
                                </View>
                            </Text>
                        ))
                    }
                </View>


            </ScrollView>;

        return (
            <View>
                  <View style={{
                    width: w,
                    height: 40,
                    backgroundColor: "white",
                }}>
                    <Text
                        style={{
                            position: "absolute",
                            top: 0,
                            width: 40,
                            height: 40,
                            marginLeft: ptd(7.5),
                        }}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                        <Image
                            source={require('../../tupian/jiantou.png')}
                            style={{
                                width: 25,
                                height: 25,

                            }}
                        />
                    </Text>
                </View>

                <ScrollView style={{marginBottom:50}}>
                <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            // marginTop: 20,
                            justifyContent: 'center',
                            width: w,
                            height: 40,
                            backgroundColor: 'white',
                        }}
                    >
                        {
                            tabs.map(tab => (
                                <View style={styles.kuang}>
                                    <Text
                                        onPress={() => this.setSelectTab(tab.id)}
                                        key={tab.id}
                                        style={[
                                            this.state.selectTab == tab.id ? styles.word : styles.word1
                                        ]}
                                    >
                                        {tab.text}
                                    </Text>
                                </View>
                            ))
                        }
                    </View>

                </ScrollView>


                {twoContent}

                </ScrollView>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    kuang: {
        width: w / 2,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    word: {
        height: 40,
        lineHeight: 40,
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ff8c00',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        color: 'black',
    },
    word1: {
        height: 40,
        lineHeight: 40,
        fontSize: 17,
        color: 'black',
    },
    leixing: {
        marginTop: 10,
        borderColor: '#ff8c00',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 80,
        height: 30,
        lineHeight: 30,
        textAlign: 'center',
        borderRadius: 20,
        marginLeft: 15,
    },
    leixing1: {
        marginTop: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 80,
        height: 30,
        lineHeight: 30,
        textAlign: 'center',
        borderRadius: 20,
        marginLeft: 15,
    },
    text: {
        height: 30,
        lineHeight: 30,
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ff8c00',
    },
    text1: {
        height: 30,
        lineHeight: 30,
        fontSize: 15,
        fontWeight: '100',
        color: 'black',
    },

    spk: {
        width: ptd(165),
        height: 280,
        borderRadius: 10,
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        marginLeft: ptd(7.5),
        marginRight: ptd(7.5),
        marginBottom: 7,
        marginTop: 7,
        backgroundColor: 'white',
    },
    image: {
        width: ptd(165),
        height: 220,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode:'cover',
    },
    txt1: {
        color: 'grey',
        width: ptd(160),
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 42,
        textAlign:'center',
        // marginLeft: ptd(10),
        // marginRight: ptd(3),
        marginTop: 6,
        fontSize: 15,
    },
    dpspk: {
        width: w - 50,
        height: 140,
        borderRadius: 10,
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        marginLeft: ptd(7.5),
        marginRight: ptd(7.5),
        marginBottom: 7,
        marginTop: 7,
        backgroundColor: 'white',
    },
    dpimage: {
        width: ptd(90),
        height: ptd(90),
        borderRadius: 10,
        marginTop: ptd(13),
        marginLeft: ptd(20),
        // borderTopRightRadius: 10,
    },
    dptxt1: {
        color: 'black',
        // borderColor: '#ff8c00',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: ptd(180),
        fontSize: 15,
        position: 'relative',
        top: -ptd(50),
        textAlign: 'center',

    },
    dptxt2: {
        // borderColor: '#ff8c00',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: ptd(80),
        fontSize: 15,
        position: 'relative',
        left: ptd(135),
        top: -ptd(45),
        textAlign: 'center',
    },
})









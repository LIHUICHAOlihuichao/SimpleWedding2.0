import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet ,Alert} from 'react-native'

import '../common/global';



export default class Sydianpu extends Component {

    constructor(props) {
        super(props)

        let yy = this.props.route.params;
        this.state = {
            selectTab: 0,
            selectType: '全部',
            dpname: yy.name,

            shuju: [{ "style_id": 0, "style_name": "全部" },],
            tp: [],
            sy: [],
            sp: [],
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


        return (
            fetch('http://10.7.86.197:8080/photo_style')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        tp: responseJson,
                    }, this.setState({
                        shuju: _that.state.shuju.concat(responseJson)
                    }), function () {
                        // console.log(this.state.tp)
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),
            fetch('http://10.7.86.197:8080/photo/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        sy: responseJson,
                    }, function () {
                        // console.log(this.state.aa)
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),

            fetch('http://10.7.86.197:8080/shop/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        sp: responseJson.filter(item => item.shop_typeid == 1),
                    }, function () {
                        // console.log(this.state.aa)
                    });
                })
                .catch((error) => {
                    console.error(error);
                })

        )
    }


    render() {

        let twoContent = (this.state.selectType === '全部') ?
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
                        this.state.sy.filter(item => item.shop_name == this.state.dpname).map(tab => (
                            <Text
                                style={styles.spk}
                                onPress={() => {
                                    this.props.navigation.navigate('sydetail', {
                                        id: tab.photo_id, 
                                        dpname: tab.shop_name,                          
                                    })
                                    // console.log('11111'+tab.photo_img2)
                                }
                                }
                            >
                                <View>
                                    <Image
                                        source={{ uri: tab.photo_img1 }}
                                        style={styles.image}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.txt1}>{tab.photo_name}</Text>
                                </View>
                            </Text>
                        ))
                    }
                </View>
            </ScrollView>

            :

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
                        this.state.sy.filter(item => item.shop_name == this.state.dpname).filter(item => item.style_name == this.state.selectType).map(tab => (
                            <Text
                                style={styles.spk}
                                onPress={() => {
                                    this.props.navigation.navigate('sydetail', {
                                        id: tab.photo_id,
                                        dpname: tab.shop_name,
                                    })
                                }
                                }
                            >
                                <View>
                                    <Image
                                        source={{ uri: tab.photo_img1 }}
                                        style={styles.image}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.txt1}>{tab.photo_name}</Text>
                                </View>
                            </Text>
                        ))
                    }
                </View>
            </ScrollView>
            ;

        return (
            <View>
                 <View style={{
                    width:w,
                    height:40,
                    backgroundColor:"white",
                }}>
                    <Text 
                        style={{
                            position: "absolute",
                            top:0,
                            width:40,
                            height:40,
                            marginLeft:ptd(7.5),
                        }}
                        onPress={()=>{
                            this.props.navigation.goBack()
                        }}
                    >
                        <Image 
                            source={require('../../tupian/jiantou.png')} 
                            style={{
                                width:25,
                                height:25,
                            
                            }}
                        />
                    </Text>
                </View> 
                <ScrollView style={{marginBottom:50}}>
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            // height: 100,
                            paddingTop: 5,
                            justifyContent: 'center',
                            // alignItems:'center',
                        }}
                    >
                        {
                            this.state.sp.filter(item => item.shop_name == this.state.dpname).map(tab => (
                                <Text
                                    style={styles.dpspk}
                                    onPress={() => {
                                        this.props.navigation.navigate('sydianpu', {
                                            name: tab.shop_name
                                        })
                                    }
                                    }
                                >
                                    <View>
                                        <Image
                                            source={{ uri: tab.shop_image }}
                                            style={styles.dpimage}
                                        />
                                    </View>
                                    <View style={{
                                        height: 30,
                                        width: 30,
                                    }}
                                    >
                                        <Text style={styles.dptxt1}>{tab.shop_name}</Text>
                                    </View>

                                    <View style={{
                                        height: 30,
                                        width: 30,
                                    }}>
                                        <Text style={styles.dptxt2}>{tab.shop_tel}</Text>
                                    </View>
                                    <View style={{
                                        height: 30,
                                        width: 30,
                                    }}>
                                        <Text style={styles.dptxt3}onPress={()=>{
                                            Alert.alert(
                                                '温馨提示',
                                                '请前往地图App进行导航',
                                                [
                                                    { text: '确认', onPress: () => {console.log('')}, style: 'cancel' },
                                                ],
                                                // this.props.navigation.navigate('shouye')
                                            )
                                        }}>{tab.shop_address}</Text>
                                    </View>
                                </Text>
                            ))
                        }
                    </View>


                </ScrollView>
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

                                    key={tab.style_id}
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
                {twoContent}
                </ScrollView> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dpspk: {
        width: w / 7 * 6,
        height: 150,
        borderRadius: 20,
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // marginLeft: ptd(7.5),
        // marginRight: ptd(7.5),
        // marginBottom: 7,
        marginTop: 20,
        backgroundColor: 'white',
    },
    dpimage: {
        width: ptd(100),
        height: ptd(100),
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
        width: ptd(220),
        fontSize: 15,
        position: 'relative',
        top: -ptd(65),
        left: ptd(30),
        // textAlign:'center',
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: 42,
        // marginLeft: ptd(3),
        // marginRight: ptd(3),
        // marginTop: 4,   
    },
    dptxt2: {
        color: 'black',
        // borderColor: '#ff8c00',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: ptd(220),
        fontSize: 15,
        position: 'relative',
        top: -ptd(35),
        left: ptd(5),
    },
    dptxt3: {
        color: 'black',
        // borderColor: '#ff8c00',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: ptd(170),
        fontSize: 15,
        position: 'relative',
        top: -ptd(5),
        left: -ptd(20),
    },


    leixing: {
        marginTop: 10,
        borderColor: '#ff8c00',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 60,
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
        width: 60,
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
    dptext1: {
        color: 'black',
        borderColor: '#ff8c00',
        borderWidth: 1,
        borderStyle: 'solid',
        width: ptd(180),
        fontSize: 15,
        position: 'relative',
        top: -ptd(60),
        textAlign: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: 42,
        // marginLeft: ptd(3),
        // marginRight: ptd(3),
        // marginTop: 4,

    },
})







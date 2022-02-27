import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet } from 'react-native'
import '../common/global';


const tabs = [
    { text: '店铺', id: 0 },
    { text: '款式', id: 1 },
];


export default class Lifu extends Component {
    constructor(props) {
        super(props)

        let yy = this.props.route.params;
        this.state = {
            selectTab: 0,
            selectType: '全部',

            shuju: [{ "style_id": 0, "style_name": "全部" },],

            tp: [],
            lf: [],
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
            fetch('http://10.7.86.197:8080/dress_style/')
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
            fetch('http://10.7.86.197:8080/dress/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        lf: responseJson.filter(item=>item.city_id==this.state.wzid),
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
                        sp: responseJson.filter(item => item.shop_typeid == 2).filter(item=>item.city_id==this.state.wzid),
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                })
        )
    }


    render() {
        let twoContent = (this.state.selectTab == '0') ?
            // 商家那个列表
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        // height: 100,
                        paddingTop: 2,
                        justifyContent: 'center',
                        // alignItems:'center',
                    }}
                >
                    {
                        this.state.sp.map(tab => (
                            <Text
                                style={styles.dpspk}
                                onPress={() => {
                                    this.props.navigation.navigate('lfdianpu', {
                                        name: tab.shop_name,
                                        image: tab.shop_image,
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
                                <View>
                                    <Text style={styles.dptxt1}>{tab.shop_name}</Text>
                                </View>


                                <View style={{
                                    height: 140,
                                    // borderColor: 'red',
                                    // borderWidth: 1,
                                    // borderStyle: 'solid',
                                }}>

                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{
                                        width: w - 120,
                                        marginLeft: 40,
                                        marginTop: 6,
                                    }}>
                                        {
                                            this.state.lf.filter(item => item.shop_name == tab.shop_name).map(tab => (
                                                <Text
                                                    style={{
                                                        width: ptd(75),
                                                        height: 100,
                                                        // borderRadius: 10,
                                                        // borderColor: 'red',
                                                        // borderWidth: 1,
                                                        // borderStyle: 'solid',
                                                        marginLeft: ptd(7.5),
                                                        marginRight: ptd(7.5),
                                                        marginBottom: 7,
                                                        marginTop: 7,
                                                        backgroundColor: 'white',
                                                    }}
                                                // onPress={() => {
                                                //     this.props.navigation.navigate('sydetail', {
                                                //         id: tab.id,
                                                //     })
                                                // }
                                                // }
                                                >
                                                    <View>
                                                        <Image
                                                            source={{ uri: tab.dress_img1 }}
                                                            style={{
                                                                width: ptd(75),
                                                                height: 120,
                                                                // borderTopLeftRadius: 10,
                                                                // borderTopRightRadius: 10,
                                                            }}
                                                        />
                                                    </View>

                                                </Text>
                                            ))
                                        }

                                    </ScrollView>
                                </View>
                            </Text>
                        ))
                    }
                </View>
            </ScrollView> :
            (this.state.selectType === '全部') ?
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
                                this.state.lf.map(tab => (
                                    <Text
                                        style={styles.spk}
                                        onPress={() => {
                                            this.props.navigation.navigate('lfdetail', {
                                                id: tab.dress_id,
                                                dpname: tab.shop_name,
                                                // image: tab.img2,
                                                // image1: tab.img3,
                                                // image2: tab.img4,
                                                // image3: tab.img5,
                                                // image4: tab.img6,
                                                // image5: tab.img7,
                                                // image6: tab.img8,
                                            })
                                        }
                                        }
                                    >
                                        <View>
                                            <Image
                                                source={{ uri: tab.dress_img1 }}
                                                style={styles.image}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.txt1}>#{tab.style_name}#{tab.dress_name}</Text>
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
                                this.state.lf.filter(item => item.style_name == this.state.selectType).map(tab => (
                                    <Text
                                        style={styles.spk}
                                        onPress={() => {
                                            this.props.navigation.navigate('lfdetail', {
                                                id: tab.dress_id,
                                                dpname: tab.shop_name,
                                            })
                                        }
                                        }
                                    >
                                        <View>
                                            <Image
                                                source={{ uri: tab.dress_img1 }}
                                                style={styles.image}
                                            />
                                        </View>
                                        <View>
                                        <Text style={styles.txt1}>#{tab.style_name}#{tab.dress_name}</Text>
                                        </View>
                                    </Text>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>;

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
                    <View style={{
                        width: w / 5 * 4,
                        height: 80,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        marginTop: 15,
                        marginLeft: w / 10,
                    }}
                    >
                        <Text
                            style={{
                                width: w / 5 * 4,
                                height: 20,
                                marginTop: 10,
                                marginLeft: 25,
                            }}
                        >我的选择清单</Text>
                        <Text
                            style={{
                                width: w / 3,
                                height: 25,
                                backgroundColor: 'rgb(252,157,154)',
                                textAlign: 'center',
                                lineHeight: 25,
                                borderRadius: 10,
                                position: 'relative',
                                left: 20,
                                top: 10,
                            }}
                        >选店铺</Text>
                        <Text
                            style={{
                                width: w / 3,
                                height: 25,
                                backgroundColor: 'rgb(252,157,154)',
                                textAlign: 'center',
                                lineHeight: 25,
                                borderRadius: 10,
                                position: 'relative',
                                left: w / 3 + 40,
                                top: -15,
                            }}
                        >挑款式</Text>
                    </View>
                    <ScrollView horizontal={true}
                        style={{
                            marginTop: 30,
                        }}
                    >
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
        //  borderColor: '#ff8c00',
        //  borderWidth: 1,
        //  borderStyle: 'solid',
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
        resizeMode: 'cover',
    },
    txt1: {
        color: 'grey',
        width: ptd(160),
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 42,
        textAlign: 'center',
        // marginLeft: ptd(10),
        // marginRight: ptd(3),
        marginTop: 6,
        fontSize: 15,
    },
    dpspk: {
        width: w - 50,
        height: 220,
        borderRadius: 10,
        marginLeft: ptd(7.5),
        marginRight: ptd(7.5),
        marginBottom: 7,
        marginTop: 7,
        backgroundColor: 'white',
    },
    dpimage: {
        width: ptd(50),
        height: ptd(50),
        // borderRadius: 10,
        marginTop: ptd(13),
        marginLeft: ptd(45),
    },
    dptxt1: {
        color: 'black',
        width: ptd(180),
        fontSize: 14,
        position: 'relative',
        top: -ptd(30),
        textAlign: 'center',
    },

})
import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet } from 'react-native'


import SplashScreen from 'react-native-splash-screen';
import '../common/global';


const tabs = [
    { id: 0, name: '全部' },
    { id: 1, name: '婚纱摄影' },
    { id: 2, name: '婚礼策划' },
    { id: 3, name: '婚纱礼服' },

]



export default class Shouye extends Component {

    constructor(props) {
        super(props)
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000)
        let yy = this.props.route.params;
        this.state = {
            selectTab: 0,

            all: [],
            sheying: [],
            cehua: [],
            lifu: [],
            spsy: [],
            spch: [],
            splf: [],
            weizhi:yy.weizhi,
            wzid:yy.wzid,
        }
    }

    setSelectTab(e) {
        this.setState({ selectTab: e });
    }

    componentDidMount() {
        var _that = this;

        return (
            fetch('http://10.7.86.197:8080/photo')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        sheying: responseJson.filter(item=>item.city_id==this.state.wzid),
                        // all: _that.state.all.concat(responseJson)
                    },
                        function () {

                        }
                    );
                })
                .catch((error) => {
                    console.error(error);
                }),

            fetch('http://10.7.86.197:8080/planner')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        cehua: responseJson.filter(item=>item.city_id==this.state.wzid),
                    }
                        , function () {

                        });
                })
                .catch((error) => {
                    console.error(error);
                }),

            fetch('http://10.7.86.197:8080/dress')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        lifu: responseJson.filter(item=>item.city_id==this.state.wzid),
                    }
                        , function () {
                        });
                })
                .catch((error) => {
                    console.error(error);
                }),

            fetch('http://10.7.86.197:8080/shop/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        shop: responseJson.filter(item=>item.city_id==this.state.wzid),
                        spsy: responseJson.filter(item => item.shop_typeid == 1).filter(item=>item.city_id==this.state.wzid),
                        spch: responseJson.filter(item => item.shop_typeid == 3).filter(item=>item.city_id==this.state.wzid),
                        splf: responseJson.filter(item => item.shop_typeid == 2).filter(item=>item.city_id==this.state.wzid),
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                })
        )

    }


    render() {
        let nextContent = (this.state.selectTab == 0) ?
            <ScrollView style={{ paddingTop: 2 }}>
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
                        this.state.spsy.map(tab => (
                            <Text
                                style={styles.spk}
                                onPress={() => {
                                    this.props.navigation.navigate('sydianpu', {
                                        name: tab.shop_name,
                                        // image: tab.img,
                                    })
                                }
                                }
                            >
                                <View>
                                    <Image
                                        source={{ uri: tab.shop_image }}
                                        style={styles.image}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.text1}>{tab.shop_name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dptext2}>{this.state.sheying.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
                                </View>
                            </Text>
                        ))
                    }
                    {
                        this.state.spch.map(tab => (
                            <Text
                                style={styles.spk}
                                onPress={() => {
                                    this.props.navigation.navigate('chdianpu', {
                                        name: tab.shop_name,
                                        // image: tab.img,
                                    })
                                }
                                }
                            >
                                <View>
                                    <Image
                                        source={{ uri: tab.shop_image }}
                                        style={styles.image}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.text1}>{tab.shop_name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dptext2}>{this.state.cehua.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
                                </View>
                            </Text>
                        ))
                    }
                    {
                        this.state.splf.map(tab => (
                            <Text
                                style={styles.spk}
                                onPress={() => {
                                    this.props.navigation.navigate('lfdianpu', {
                                        name: tab.shop_name,
                                        // image: tab.img,
                                    })
                                }
                                }
                            >
                                <View>
                                    <Image
                                        source={{ uri: tab.shop_image }}
                                        style={styles.image}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.text1}>{tab.shop_name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dptext2}>{this.state.lifu.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
                                </View>
                            </Text>
                        ))
                    }

                </View>


            </ScrollView> : (this.state.selectTab == 1) ?
                <ScrollView style={{ paddingTop: 2 }}>
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
                            this.state.spsy.map(tab => (
                                <Text
                                    style={styles.spk}
                                    onPress={() => {
                                        this.props.navigation.navigate('sydianpu', {
                                            name: tab.shop_name,
                                            // image: tab.img,
                                        })
                                    }
                                    }
                                >
                                    <View>
                                        <Image
                                            source={{ uri: tab.shop_image }}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.text1}>{tab.shop_name}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.dptext2}>{this.state.sheying.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
                                    </View>
                                </Text>
                            ))
                        }
                    </View>
                </ScrollView> : (this.state.selectTab == 2) ?
                    <ScrollView style={{ paddingTop: 2 }}>
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
                                this.state.spch.map(tab => (
                                    <Text
                                        style={styles.spk}
                                        onPress={() => {
                                            this.props.navigation.navigate('chdianpu', {
                                                name: tab.shop_name,
                                                // image: tab.img,
                                            })
                                        }
                                        }
                                    >
                                        <View>
                                            <Image
                                                source={{ uri: tab.shop_image }}
                                                style={styles.image}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.text1}>{tab.shop_name}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.dptext2}>{this.state.cehua.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
                                        </View>
                                    </Text>
                                ))
                            }


                        </View>
                    </ScrollView> :
                    <ScrollView style={{ paddingTop: 2 }}>
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
                                this.state.splf.map(tab => (
                                    <Text
                                        style={styles.spk}
                                        onPress={() => {
                                            this.props.navigation.navigate('lfdianpu', {
                                                name: tab.shop_name,
                                                // image: tab.img,
                                            })
                                        }
                                        }
                                    >
                                        <View>
                                            <Image
                                                source={{ uri: tab.shop_image }}
                                                style={styles.image}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.text1}>{tab.shop_name}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.dptext2}>{this.state.lifu.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
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


                <ScrollView style={{ marginBottom: 50 }}>
                    <ScrollView horizontal={true} style={{ paddingTop: 5}}>
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
                                        {tab.name}
                                    </Text>
                                </View>
                            ))
                        }

                    </ScrollView>

                    {nextContent}

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    border: {
        width: 80,
        height: 50,
        // justifyContent:'center',
        alignItems: 'center',
        // borderColor:'#ccc',
        // borderWidth:2,
        // borderStyle:'solid'
    },
    img: {
        width: 50,
        height: 50,
    },
    kuang: {
        width: w / 4,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor:'#ccc',
        // borderWidth:2,
        // borderStyle:'solid'
    },
    img1: {
        width: w / 2 - 50,
        height: 200,
    },
    word: {
        fontSize: 16,
        // paddingBottom: 4,
        // width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ff8c00',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        color: '#ff8c00',
    },
    word1: {
        fontSize: 16,
        // paddingBottom: 4,
        // width: 70,
        color: 'black',
        // borderColor: '#ff8c00',
        // borderBottomWidth: 4,
        // borderStyle: 'solid',
    },
    spk: {
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
    image: {
        width: ptd(90),
        height: ptd(90),
        borderRadius: 10,
        marginTop: ptd(13),
        marginLeft: ptd(20),
        // borderTopRightRadius: 10,
    },
    text1: {
        color: 'black',
        // borderColor: '#ff8c00',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: ptd(180),
        fontSize: 15,
        position: 'relative',
        top: -ptd(45),
        textAlign: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: 42,
        // marginLeft: ptd(3),
        // marginRight: ptd(3),
        // marginTop: 4,

    },

    dptext2: {
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
    text2: {
        marginTop: 7,
        fontSize: 22,
        color: '#ff5c00',
        marginLeft: 4,
    },
    text3: {
        marginTop: -20,
        marginLeft: 55,
        color: 'grey',
    },
    text4: {
        borderColor: '#ff5c00',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 100,
        height: 20,
        textAlign: 'center',
        marginLeft: 8,
        // marginTop:0,
        color: '#ff5c00',
    },
    text5: {
        borderColor: 'grey',
        borderTopWidth: 1,
        borderStyle: 'solid',
        width: 27,
        marginTop: -10,
        marginLeft: 58,
    }
})

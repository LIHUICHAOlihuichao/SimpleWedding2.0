import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, AsyncStorage } from 'react-native'


import SplashScreen from 'react-native-splash-screen';
import './common/global';
import Location from './didian/Location';
import Home from '../bride/Home.js'

const tabs = [
    { id: 0, name: '全部' },
    { id: 1, name: '婚纱摄影' },
    { id: 2, name: '婚礼策划' },
    { id: 3, name: '婚纱礼服' }
]



export default class Shouye extends Component {

    constructor(props) {
        super(props)
        setTimeout(() => {
            SplashScreen.hide();
        }, 2000)

        this.state = {
            selectTab: 0,
            all: [],
            sheying: [],
            cehua: [],
            lifu: [],
            data: '',
            inpContent: '北京',
            inpId: 1,
        }
    }

    setSelectTab(e) {
        this.setState({ selectTab: e });
    }

    componentDidMount() {
        var _that = this;

        AsyncStorage.getItem('loginUser').then(res => {
            if (res) {
                _that.setState({ data: JSON.parse(res) })
                // _that.setState({ listing: JSON.parse(res) })
                // console.log(1)
            }
        })


        return (
            fetch('http://10.7.86.197:8080/photo')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        sheying: responseJson,
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
                        cehua: responseJson,
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
                        lifu: responseJson,
                    }
                        , function () {
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
                        // this.state.sheying.concat(this.state.cehua).concat(this.state.lifu).map(tab => (
                        this.state.sheying.filter(item=>item.city_id==this.state.inpId).map(tab => (
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
                                    <Text style={styles.text1}>{tab.photo_name}</Text>
                                </View>
                            </Text>
                        ))
                    }
                    {
                        // this.state.sheying.concat(this.state.cehua).concat(this.state.lifu).map(tab => (
                        this.state.cehua.filter(item=>item.city_id==this.state.inpId).map(tab => (
                            <Text
                                style={styles.spk}
                                onPress={() => {
                                    this.props.navigation.navigate('chdetail', {
                                        id: tab.planner_id,
                                        dpname: tab.shop_name,
                                    })
                                    // console.log('11111'+tab.photo_img2)
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
                                    <Text style={styles.text1}>{tab.planner_name}</Text>
                                </View>
                            </Text>
                        ))
                    }
                    {
                        // this.state.sheying.concat(this.state.cehua).concat(this.state.lifu).map(tab => (
                        this.state.lifu.filter(item=>item.city_id==this.state.inpId).map(tab => (
                            <Text
                                style={styles.spk}
                                onPress={() => {
                                    this.props.navigation.navigate('lfdetail', {
                                        id: tab.dress_id,
                                        dpname: tab.shop_name,
                                    })
                                    // console.log('11111'+tab.photo_img2)
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
                                    <Text style={styles.text1}>#{tab.style_name}#{tab.dress_name}</Text>
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
                            this.state.sheying.filter(item=>item.city_id==this.state.inpId).map(tab => (
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
                                        <Text style={styles.text1}>{tab.photo_name}</Text>
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
                                this.state.cehua.filter(item=>item.city_id==this.state.inpId).map(tab => (
                                    <Text
                                        style={styles.spk}
                                        onPress={() => {
                                            this.props.navigation.navigate('chdetail', {
                                                id: tab.planner_id,
                                                dpname: tab.shop_name,
                                            })
                                            // console.log('11111'+tab.photo_img2)
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
                                            <Text style={styles.text1}>{tab.planner_name}</Text>
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
                                this.state.lifu.filter(item=>item.city_id==this.state.inpId).map(tab => (
                                    <Text
                                        style={styles.spk}
                                        onPress={() => {
                                            this.props.navigation.navigate('lfdetail', {
                                                id: tab.dress_id,
                                                dpname: tab.shop_name,
                                            })
                                            // console.log('11111'+tab.photo_img2)
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
                                            <Text style={styles.text1}>#{tab.style_name}#{tab.dress_name}</Text>
                                        </View>
                                    </Text>
                                ))
                            }
                        </View>
                    </ScrollView>
            ;
        return (
            <ScrollView>
                <View>
                    <Text
                        style={{ width: 40, height: 40 }}
                        onPress={() => {
                            // this.props.navigation.navigate('location')
                            this.gotoLocation()
                        }}
                    >
                        <Image
                            source={require('../tupian/dingwei.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </Text>
                    <Text style={{ position: "relative", top: -25, left: 30, fontSize: 16 }}>{this.state.inpContent}</Text>
                </View>
                <View style={{
                    width: w - 45,
                    height: 50,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginTop: 0,
                    marginBottom: 20,
                    marginLeft: 22,
                }}
                >

                    <Text
                        style={{
                            width: w / 3,
                            height: 25,
                            backgroundColor: 'rgb(252,157,154)',
                            textAlign: 'center',
                            lineHeight: 25,
                            borderRadius: 10,
                            position: 'relative',
                            left: 30,
                            top: 12,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('')
                        }}
                    >备婚手册</Text>
                    <Text
                        style={{
                            width: w / 3,
                            height: 25,
                            backgroundColor: 'rgb(252,157,154)',
                            textAlign: 'center',
                            lineHeight: 25,
                            borderRadius: 10,
                            position: 'relative',
                            left: w / 3 + 75,
                            top: -12,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('Home')
                        }}
                    >新娘日记</Text>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        // flexWrap:"wrap",
                        height: 100,
                        paddingTop: 20,
                        justifyContent: 'center',
                        // alignItems:'center',
                        paddingTop: 12,
                        // width:w-50,
                        height: 95,
                        marginLeft: 20,
                        marginRight: 20,
                        // borderColor:'#ccc',
                        // borderWidth:2,
                        // borderStyle:'solid',
                        backgroundColor: 'white',
                        borderRadius: 7,
                    }}
                >
                    <Text
                        onPress={() => {
                            this.props.navigation.navigate('sheying', {
                                weizhi: this.state.inpContent,
                                wzid: this.state.inpId,
                            })
                            console.log(this.state.inpContent)
                            console.log(this.state.inpId)
                        }}
                    >
                        <View style={styles.border}>
                            <Image
                                source={require('../tupian/摄影艺术.png')}
                                style={{
                                    width: 55,
                                    height: 55,
                                    position: 'relative',
                                    top: -5,
                                }}

                            />
                            <Text
                                style={{
                                    position: 'relative',
                                    top: -5,
                                }}
                            >婚纱摄影</Text>
                        </View>
                    </Text>
                    <Text
                        onPress={() => {
                            this.props.navigation.navigate('cehua', {
                                weizhi: this.state.inpContent,
                                wzid: this.state.inpId,
                            })
                        }}
                    >
                        <View style={styles.border}>
                            <Image
                                source={require('../tupian/笔试.png')}
                                style={styles.img}
                            />
                            <Text>婚礼策划</Text>
                        </View>
                    </Text>
                    <Text
                        onPress={() => {
                            this.props.navigation.navigate('lifu', {
                                weizhi: this.state.inpContent,
                                wzid: this.state.inpId,
                            })
                        }}
                    >
                        <View style={styles.border}>
                            <Image
                                source={require('../tupian/hunsha.png')}
                                style={styles.img}
                            />
                            <Text>婚纱礼服</Text>
                        </View>
                    </Text>
                    <Text
                        onPress={() => {
                            this.props.navigation.navigate('shengdi')
                        }}
                    >
                        <View style={styles.border}>
                            <Image
                                source={require('../tupian/jingdian.png')}
                                style={styles.img}
                            />
                            <Text>蜜月圣地</Text>
                        </View>
                    </Text>
                    <Text
                        onPress={() => {
                            this.props.navigation.navigate('shangjia', {
                                weizhi: this.state.inpContent,
                                wzid: this.state.inpId,
                            })
                        }}
                    >
                        <View style={styles.border}>
                            <Image
                                source={require('../tupian/quanbu.png')}
                                style={styles.img}
                            />
                            <Text>全部商家</Text>
                        </View>
                    </Text>
                </View>

                <ScrollView horizontal={true} style={{ paddingTop: 10 }}>
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
        )
    }

    gotoLocation() {
        this.props.navigation.navigate({
            name: 'location',
            Component: Location,
            params: {
                getContent: (content, id) => {
                    this.setState({
                        inpContent: content,
                        inpId: id,
                    })
                }
            }
        })
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
    text1: {
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

import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'

import '../common/global';
// import resolveAssetSource from 'resolveAssetSource';

import qs from 'qs';
import axios from 'axios';
const puturl = (obj, url) => {
    axios.put(url, qs.stringify(obj)).then((res) => {
        console.log(res)
    })
}

export default class Chdetail extends Component {

    constructor(props) {
        super(props)

        let yy = this.props.route.params;
        this.state = {
            selectTab: 0,
            selectType: '全部',
            // dpname: yy.name,
            shuju: [{ "style_id": 0, "style_name": "全部" },],
            tp: [],
            ch: [],
            sp: [],


            id: yy.id,
            dianpu: yy.dpname,
            detail: [],

            isFavorite: false,
            favoriteIcon: require('../../tupian/shoucang.png'),
            favoriteText: '收藏',
            data: '',
            userData: [],
            userId: undefined,
        }
    }

    setSelectTab(e) {
        this.setState({ selectTab: e });
    }

    setSelectType(e) {
        this.setState({ selectType: e });
    }

    componentDidMount() {
        console.log(this.state.id)
        console.log(this.state.dianpu)
        // console.log(this.state.sy.filter(item => item.photo_id == this.state.id))
        var _that = this;
        AsyncStorage.getItem('loginUser').then(res => {
            if (res) {
                _that.setState({ data: JSON.parse(res) })
                // _that.setState({ listing: JSON.parse(res) })
                // console.log(1)
            }
        })

        return (
            fetch('http://10.7.86.197:8080/planner_style')
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
            fetch('http://10.7.86.197:8080/planner/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        ch: responseJson,
                        detail: _that.state.detail.concat(responseJson.filter(item => item.planner_id == _that.state.id)),
                    }, function () {
                        // console.log(this.state.detail)
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
                }),

            fetch('http://10.7.86.197:8080/user/getalluser')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        userData: responseJson.filter(item => item.user_name == this.state.data),
                        userId: responseJson.filter(item => item.user_name == this.state.data)[0].user_id,
                    }, function () {

                    });
                })
                .catch((error) => {
                    console.error(error);
                })

        )

    }


    render() {

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
                            console.log(this.state.userData)
                            console.log(this.state.userId)
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
                <ScrollView>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            // height: 100,
                            // paddingTop: 10,
                            justifyContent: 'center',
                            // alignItems:'center',
                        }}
                    >
                        {
                            this.state.detail.map(tab => (
                                <Text
                                    style={{
                                        width: w,
                                        // height: this.state.height + this.state.height1 + this.state.height2 + this.state.height3 + this.state.height4
                                        //     + this.state.height5 + this.state.height6 + 430,
                                        height: 430 + 1830,
                                        borderRadius: 10,
                                        // borderColor: 'red',
                                        // borderWidth: 1,
                                        // borderStyle: 'solid',
                                        // marginLeft: ptd(7.5),
                                        // marginRight: ptd(7.5),
                                        // marginBottom: 7,
                                    }}
                                >
                                    <View style={{
                                        // borderColor: 'red',
                                        // borderWidth: 1,
                                        // borderStyle: 'solid',
                                        height: 360,
                                    }}>
                                        <View>
                                            <Image
                                                source={{ uri: tab.planner_img1 }}
                                                // style={{width:w,height:200,opacity:0.7}}
                                                style={styles.image}
                                            />
                                        </View>

                                        <View>
                                            <Text style={{
                                                width: w / 2, height: 200,
                                                position: 'relative',
                                                top: -150,
                                                left: w / 4,
                                                backgroundColor: 'white',
                                                borderColor: 'grey',
                                                borderWidth: 1,
                                                borderStyle: 'solid',
                                                borderTopLeftRadius: 10,
                                                borderTopRightRadius: 10,
                                            }}>
                                                <View>
                                                    <Image
                                                        source={{ uri: tab.planner_img1 }}
                                                        style={{
                                                            width: w / 2, height: 140,
                                                            position: 'absolute',
                                                            borderTopLeftRadius: 10,
                                                            borderTopRightRadius: 10,
                                                            // top:-20,
                                                            // left:w/4,
                                                        }}
                                                    />
                                                </View>
                                                <View>
                                                    <Text
                                                        style={{
                                                            position: 'absolute',
                                                            top: 145,
                                                            fontSize: 16,
                                                            left: 10,
                                                            width: w / 2 - 20,
                                                            height: 20,
                                                        }}
                                                    >{tab.planner_name}</Text>
                                                </View>
                                                {/* <View>
                                                    <Text style={{
                                                        position: 'absolute',
                                                        top: 168,
                                                        fontSize: 16,
                                                        left: 10,
                                                    }}
                                                    >{tab.type}</Text>
                                                </View> */}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{
                                        width: w-20,

                                        height: 1880,
                                        // borderColor: 'red',
                                        // borderWidth: 1,
                                        // borderStyle: 'solid',
                                        paddingLeft:10,
        
                                    }}>
                                        <View style={{
                                            marginBottom:10,
                                        }}>
                                            <Image
                                                source={{ uri: tab.planner_img2 }}
                                                // style={this.huoquZhi(tab.img2)}
                                                style={{
                                                    width: w-20,
                                                    height: 300,
                                                    resizeMode: 'cover',
                                                    // height: this.state.height,
                                                    position: 'relative',
                                                    // borderTopLeftRadius: 10,
                                                    // borderTopRightRadius: 10,
                                                    // top: -30,
                                                    // left: -w / 2,
                                                    // resizeMode: 'contain',
                                                }}
                                            />
                                        </View>


                                        <View style={{
                                            marginBottom:10,
                                        }}>
                                            <Image
                                                source={{ uri: tab.planner_img3 }}
                                                // style={this.huoquZhi(tab.img2)}
                                                style={{
                                                    width: w-20,
                                                    height: 300,
                                                    resizeMode: 'cover',
                                                    position: 'relative',
                                                    // left: -w / 2,
                                                    // resizeMode: 'contain',
                                                }}
                                            />
                                        </View>

                                        <View style={{
                                            marginBottom:10,
                                        }}>
                                            <Image
                                                source={{ uri: tab.planner_img4 }}
                                                // style={this.huoquZhi(tab.img2)}
                                                style={{
                                                    width: w-20,
                                                    height: 300,
                                                    resizeMode: 'cover',
                                                    position: 'relative',
                                                    // top: 0,
                                                    // left: -w / 2,
                                                    // resizeMode: 'contain',
                                                }}
                                            />
                                        </View>

                                        <View style={{
                                            marginBottom:10,
                                        }}>
                                            <Image
                                                source={{ uri: tab.planner_img5 }}
                                                // style={this.huoquZhi(tab.img2)}
                                                style={{
                                                    width: w-20,
                                                    height: 300,
                                                    resizeMode: 'cover',
                                                    position: 'relative',
                                                    // top: 0,
                                                    // left: -w / 2,
                                                    // resizeMode: 'contain',
                                                }}
                                            />
                                        </View>

                                        <View style={{
                                            marginBottom:10,
                                        }}>
                                            <Image
                                                source={{ uri: tab.planner_img6 }}
                                                // style={this.huoquZhi(tab.img2)}
                                                style={{
                                                    width: w-20,
                                                    height: 300,
                                                    resizeMode: 'cover',
                                                    position: 'relative',
                                                    // top: 0,
                                                    // left: -w / 2,
                                                    // resizeMode: 'contain',
                                                }}
                                            />
                                        </View>

                                        <View style={{
                                            marginBottom:10,
                                        }}>
                                            <Image
                                                source={{ uri: tab.planner_img7 }}
                                                // style={this.huoquZhi(tab.img2)}
                                                style={{
                                                    width: w-20,
                                                    height: 300,
                                                    resizeMode: 'cover',
                                                    position: 'relative',
                                                    // top: 0,
                                                    // left: -w / 2,
                                                    // resizeMode: 'contain',
                                                }}
                                            />
                                        </View>

                                    </View>



                                </Text>


                            ))
                        }
                    </View>
                    <View style={{
                        height: 280,
                        // borderColor: 'red',
                        // borderWidth: 1,
                        // borderStyle: 'solid',
                        marginBottom: 70,
                    }}>
                        <Text style={{ marginLeft: ptd(7.5), marginBottom: ptd(5), }}>本店其他案例</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                this.state.ch.filter(item => item.shop_name === this.state.dianpu).filter(item => item.planner_id !== this.state.id).map(tab => (
                                    <Text
                                        style={styles.kuang}
                                        onPress={() => {
                                            // this.props.navigation.navigate('sydetail', {
                                            //     id: tab.id,
                                            // })
                                            console.log(111111111)
                                        }
                                        }
                                    >
                                        <View>
                                            <Image
                                                source={{ uri: tab.planner_img1 }}
                                                style={styles.kimage}
                                            />
                                        </View>
                                        <View>
                                            <Text style={styles.ktxt}>{tab.planner_name}</Text>
                                        </View>
                                    </Text>
                                ))
                            }

                        </ScrollView>
                    </View>
                </ScrollView>


                <View style={styles.contentFindView}>
                    <Text
                        onPress={() => {
                            let isFavorite = !this.state.isFavorite;

                            this.setState({
                                isFavorite: isFavorite,
                                favoriteIcon: this.state.isFavorite ? require('../../tupian/shoucang.png')
                                    : require('../../tupian/shoucang1.png'),
                                favoriteText: this.state.isFavorite ? '收藏'
                                    : '已收藏',
                            })

                            if (isFavorite == true) {
                                puturl(
                                    {
                                        user_id: this.state.userId,
                                        planner_id: this.state.id,
                                        isClick: 1,
                                    },
                                    'http://10.7.86.197:8080/user_planner_collect/updateplannercollect?user_id=' + this.state.userId
                                )
                            } else {
                                puturl(
                                    {
                                        user_id: this.state.userId,
                                        photo_id: this.state.id,
                                        isClick: 0,
                                    },
                                    'http://10.7.86.197:8080/user_planner_collect/updateplannercollect?user_id=' + this.state.userId
                                )
                            }

                        }}

                        style={{
                            marginLeft: 20,
                            width: 50,
                            height: 50,
                            textAlign: 'center',
                            // backgroundColor:'pink'
                        }}
                    >
                        <Image
                            source={this.state.favoriteIcon}
                            style={{
                                width: 35,
                                height: 35,
                                // position:'relative',

                                // left:20,
                            }}
                        />
                    </Text>
                    <Text style={{
                        position: 'relative',
                        top: -23,
                        left: 80,
                        fontSize: 12,
                    }}>{this.state.favoriteText}</Text>

                    <Text style={styles.wz}
                        onPress={() => {
                            this.props.navigation.navigate('chdianpu', {
                                name: this.state.dianpu
                            })
                        }}
                    >
                        咨询作品详细信息
                    </Text>
                </View>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    contentFindView: {
        flex: 1,
        position: "absolute",
        bottom: 40,
        // right: "50%",
        // marginRight: -58,
        backgroundColor: 'white',
        width: w,
        height: 50,

    },
    wz: {
        position: 'absolute',
        bottom: 4,
        left: w / 3 + 10,
        backgroundColor: 'rgb(245,218,77)',
        width: w / 5 * 3,
        height: 40,
        lineHeight: 40,
        /* margin-top: 15rpx; */
        /* margin-left: 130rpx; */
        textAlign: 'center',
        borderRadius: 18,
        fontSize: 12,
    },
    save: {
        position: 'relative',
        top: 9,
        /* border:1px solid red; */
        left: 30,
        width: 35,
        height: 35,
    },
    saveText: {
        position: 'relative',
        top: -15,
        left: 80,
        fontSize: 12,
        /* border:1px solid red; */
    },


    image: {
        width: w,
        height: 250,
        opacity: 0.7,

        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
    },
    image1: {
        width: w / 2,
        height: 250,

    },
    txt1: {
        color: 'grey',
        width: ptd(160),
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 42,
        marginLeft: ptd(3),
        marginRight: ptd(3),
        marginTop: 4,
        fontSize: 15,
    },

    kuang: {
        width: ptd(125),
        height: 220,
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
    kimage: {
        width: ptd(125),
        height: 170,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    ktxt: {
        color: 'grey',
        width: ptd(122),
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        height: 42,
        marginLeft: ptd(3),
        marginRight: ptd(3),
        marginTop: 4,
        fontSize: 15,
    },
})





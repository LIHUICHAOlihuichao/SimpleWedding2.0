import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet,AsyncStorage} from 'react-native'
import Swiper from 'react-native-swiper';

import '../common/global';

import qs from 'qs';
import axios from 'axios';
const puturl = (obj, url) => {
    axios.put(url, qs.stringify(obj)).then((res) => {
        console.log(res)
    })
}

export default class Lfdetail extends Component {

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
            id: yy.id,
            dianpu: yy.dpname,
            detail: [],


            isFavorite: false,
            favoriteIcon: require('../../tupian/sc.png'),
            favoriteText: '加入收藏',
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
        console.log(this.state.lf.filter(item => item.dress_id == this.state.id))
        var _that = this;
        AsyncStorage.getItem('loginUser').then(res => {
            if (res) {
                _that.setState({ data: JSON.parse(res) })
                // _that.setState({ listing: JSON.parse(res) })
                // console.log(1)
            }
        })
        // this.setState({ detail: _that.state.detail.concat(_that.state.sheying.filter(item => item.id == _that.state.id)) });

        return (
            fetch('http://10.7.86.197:8080/dress_style')
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
            fetch('http://10.7.86.197:8080/dress/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        lf: responseJson,
                        detail: _that.state.detail.concat(responseJson.filter(item => item.dress_id == _that.state.id)),
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
                        sp: responseJson.filter(item => item.shop_typeid == 2),
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
                <View style={{ width: w, height: h }}>
                    {
                        this.state.detail.map(tab => (
                            <View style={{ width: w, height: h }}>
                                <View style={{ width: w / 7 * 6, height: h / 5 * 4, marginLeft: w / 14 }}>
                                    <Swiper
                                        style={styles.swiper}          //样式
                                        height={h / 3 * 2}                   //组件高度
                                        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                                        autoplay={true}                //自动轮播
                                        autoplayTimeout={5}                //每隔4秒切换
                                        horizontal={true}              //水平方向，为false可设置为竖直方向
                                        paginationStyle={{ bottom: 10 }} //小圆点的位置：距离底部10px
                                        showsButtons={false}           //为false时不显示控制按钮
                                        showsPagination={true}       //为false不显示下方圆点
                                        dot={<View style={{           //未选中的圆点样式
                                            backgroundColor: 'rgba(0,0,0,.2)',
                                            width: 18,
                                            height: 18,
                                            borderRadius: 9,
                                            marginLeft: 10,
                                            marginRight: 9,
                                            marginTop: 9,
                                            marginBottom: 9,
                                        }} />}
                                        activeDot={<View style={{    //选中的圆点样式
                                            backgroundColor: 'rgba(252,157,154,0.8)',
                                            width: 18,
                                            height: 18,
                                            borderRadius: 9,
                                            marginLeft: 10,
                                            marginRight: 9,
                                            marginTop: 9,
                                            marginBottom: 9,
                                        }} />}

                                    >
                                        <Image source={{ uri: tab.dress_img1 }} style={styles.img} />
                                        <Image source={{ uri: tab.dress_img2 }} style={styles.img} />
                                        <Image source={{ uri: tab.dress_img3 }} style={styles.img} />
                                        <Image source={{ uri: tab.dress_img4 }} style={styles.img} />
                                        <Image source={{ uri: tab.dress_img5 }} style={styles.img} />
                                        {/* <Image source={{ uri: tab.img6 }} style={styles.img} />
                                    <Image source={{ uri: tab.img7 }} style={styles.img} /> */}
                                    </Swiper>
                                </View>
                                <View style={{
                                    width: w / 7 * 6,
                                    height: h / 11,
                                    marginLeft: w / 14,
                                    backgroundColor: 'white'
                                    // borderColor: 'red',
                                    // borderWidth: 1,
                                    // borderStyle: 'solid',
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        marginLeft: 20,
                                        marginTop: 10,
                                    }}>#{tab.style_name}</Text>

                                    {/* <Text
                                        style={{
                                            marginLeft: 20,
                                            marginTop: -10,
                                        }}
                                    > */}
                                        <Text
                                            onPress={() => {
                                                let isFavorite = !this.state.isFavorite;

                                                this.setState({
                                                    isFavorite: isFavorite,
                                                    favoriteIcon: this.state.isFavorite ? require('../../tupian/sc.png')
                                                        : require('../../tupian/sc1.png'),
                                                    favoriteText: this.state.isFavorite ? '加入收藏'
                                                        : '已收藏',
                                                })

                                                if (isFavorite == true) {
                                                    puturl(
                                                        {
                                                            user_id: this.state.userId,
                                                            dress_id: this.state.id,
                                                            isClick: 1,
                                                        },
                                                        'http://10.7.86.197:8080/user_dress_collect/updatedresscollect?user_id=' + this.state.userId
                                                    )
                                                } else {
                                                    puturl(
                                                        {
                                                            user_id: this.state.userId,
                                                            photo_id: this.state.id,
                                                            isClick: 0,
                                                        },
                                                        'http://10.7.86.197:8080/user_dress_collect/updatedresscollect?user_id=' + this.state.userId
                                                    )
                                                }

                                            }}

                                            style={{
                                                marginLeft: 18,
                                                width: 40,
                                                height: 50,
                                                textAlign: 'center',
                                                marginTop:-1,
                                                // lineHeight:40,
                                                // backgroundColor:'pink'
                                            }}
                                        >
                                            <Image
                                                source={this.state.favoriteIcon}
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                            
                                                }}
                                            />
                                        </Text>
                                        <Text style={{
                                            position: 'relative',
                                            top: -35,
                                            left: 60,
                                            fontSize: 12,
                                        }}>{this.state.favoriteText}</Text>

                                    {/* </Text> */}


                                    <Text
                                        style={{
                                            position: 'absolute',
                                            top: 38,
                                            left: 300,
                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate('lfdianpu', {
                                                name: this.state.dianpu
                                            })
                                        }}
                                    >进店逛逛</Text>
                                </View>
                            </View>

                        ))

                    }

                </View>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    swiper: {
        height: h / 5 * 4,
        position: 'absolute',
        marginTop: 20,
    },
    img: {
        width: w,
        height: h / 5 * 4,
    },


})


{/* <View style={{ width: w/7*6, height: h/5*4 ,marginLeft:w/14}}>
                    <Swiper
                        style={styles.swiper}          //样式
                        height={h / 3 * 2}                   //组件高度
                        loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                        autoplay={true}                //自动轮播
                        autoplayTimeout={5}                //每隔4秒切换
                        horizontal={true}              //水平方向，为false可设置为竖直方向
                        paginationStyle={{ bottom: 10 }} //小圆点的位置：距离底部10px
                        showsButtons={false}           //为false时不显示控制按钮
                        showsPagination={true}       //为false不显示下方圆点
                        dot={<View style={{           //未选中的圆点样式
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 18,
                            height: 18,
                            borderRadius: 9,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }} />}
                        activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: 'rgba(252,157,154,0.8)',
                            width: 18,
                            height: 18,
                            borderRadius: 9,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }} />}

                    >
                        <Image source={require('../../tupian/1.jpg')} style={styles.img} />
                        <Image source={require('../../tupian/2.jpg')} style={styles.img} />
                        <Image source={require('../../tupian/1.jpg')} style={styles.img} />
                    </Swiper>
                </View> */}
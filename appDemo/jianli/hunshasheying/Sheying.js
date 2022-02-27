import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet } from 'react-native'

import '../common/global';


const tabs = [
    { text: '推荐', id: 0 },
    { text: '商家', id: 1 },
];


export default class Sheying extends Component {

    constructor(props) {
        super(props)
      
        let yy = this.props.route.params;
        this.state = {
            selectTab: 0,
            selectType: '全部',
       
            shuju: [{ "style_id": 0, "style_name": "全部" },],
           
            tp: [],
            sy: [],
            sp: [],
            dd: [],
            weizhi:yy.weizhi,
            wzid:yy.wzid,
            loca:[],
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
            fetch('http://10.7.86.197:8080/photo_style/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        tp: responseJson,
                        shuju: _that.state.shuju.concat(responseJson)
                    }, function () {
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
                        sy: responseJson.filter(item=>item.city_id==this.state.wzid),
                    }, function () {
                        
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),

            fetch('http://10.7.86.197:8080/shop/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        sp: responseJson.filter(item=>item.shop_typeid==1).filter(item=>item.city_id==this.state.wzid),
                    },function () {
                        
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),
                fetch('http://10.7.86.197:8080/photo_site/')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        dd: responseJson.filter(item=>item.city_id==this.state.wzid),
                    }, function () {
                        
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),
            
                fetch('http://10.7.86.197:8080/city')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                        loca: responseJson,
                        // all: _that.state.all.concat(responseJson)
                    },
                    function () {
                        
                    }
                );
                })
                .catch((error) => {
                    console.error(error);
                })

        )

    }




    render() {


        let twoContent = (this.state.selectTab == '0') ? (this.state.selectType === '全部') ?
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
                            this.state.sy.map(tab => (
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
                            this.state.sy.filter(item => item.style_name == this.state.selectType).map(tab => (
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
                                    this.props.navigation.navigate('sydianpu', {
                                        name: tab.shop_name,
                                        // image: tab.img,
                                    })
                                }
                                }
                            >
                                <View>
                                    <Image
                                        // source={{ uri: tab.img }}
                                        source={{uri:tab.shop_image}}
                                        style={styles.dpimage}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.dptxt1}>{tab.shop_name}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dptxt2}>{this.state.sy.filter(item => item.shop_name == tab.shop_name).length}个作品</Text>
                                </View>
                            </Text>
                        ))
                    }
                </View>


            </ScrollView>;

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
                    <Text style={{
                        position:'relative',
                        top:10,
                        left:w/2-40,
                    }}>{this.state.weizhi}拍摄地</Text>
                </View>    
          
             
                <ScrollView style={{marginBottom:50}}>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginTop: 0,
                        justifyContent: 'center',
                        height: w / 4 + 20,
                        width: w / 6 * 5 + 10,
                        overflow: 'hidden',
                        // borderColor: '#ff8c00',
                        // borderWidth: 1,
                        // borderStyle: 'solid',
                    }}
                >
                    {
                        // this.state.data.filter(item => item.city === '北京').map(tab => (
                        this.state.dd.map(tab => (

                            <Text
                                style={{
                                    width: w / 4,
                                    height: w / 4,
                                    borderRadius: 10,
                                    marginLeft: ptd(5),
                                    marginRight: ptd(5),
                                    marginBottom: 7,
                                    marginTop: 7,
                                    backgroundColor: 'white',
                                }}
                                onPress={() => {
                                    this.props.navigation.navigate('all', {
                                        location: tab.site_name,
                                        weizhi: this.state.weizhi,
                                        wzid: this.state.wzid,
                                    })
                                    // console.log(tab.site_name)
                                }}
                            >
                                <View
                                >
                                    <Image
                                        source={{ uri: tab.site_image }}
                                        style={{
                                            width: w / 4,
                                            height: w / 4,
                                            borderRadius: 10,
                                        }}
                                    />

                                    <Text
                                        style={{
                                            position: 'absolute',
                                            top: w / 7,
                                            left: w / 21,
                                            color: 'white',
                                        }}
                                    >{tab.site_name}</Text>
                                </View>

                            </Text>
                        ))
                    }

                </View>
                <View>
                    <Text
                        style={{
                            position: 'relative',
                            top: -w / 4 - 13,
                            left: w - w / 7 - 7,
                            width: w / 8,
                            height: w / 4,
                            borderRadius: 10,
                            marginLeft: ptd(5),
                            // marginRight: ptd(5),
                            // marginBottom: 7,
                            // marginTop: 7,
                            backgroundColor: 'white',
                        }}

                        onPress={() => {
                            this.props.navigation.navigate('all',  {
                                weizhi: this.state.weizhi,
                                wzid: this.state.wzid,
                            })
                        }}
                    >
                        <View
                        >
                            <Image
                                source={{ uri: 'http://photogz.photo.store.qq.com/psc?/V51gGRBp3f1Y6e2WYQCi2qIqIj05OBnb/45NBuzDIW489QBoVep5mcfqSB4xo.LNXBiq6YVuF5BkhzNcfCfM33jv0hcShPB7U1FrU6YXWGNaUMzuydqcJtPObgCHW9Lk8bWkSFE89aK4!/b&bo=sgKlArICpQIBGT4!&rf=viewer_4' }}
                                style={{
                                    width: w / 8,
                                    height: w / 4,
                                    borderRadius: 10,
                                }}
                            />

                            <Text
                                style={{
                                    width: 20,
                                    position: 'absolute',
                                    textAlign: "center",
                                    top: 20,
                                    left: 18,
                                    color: 'white',
                                    fontSize: 16,
                                }}
                            >全部景点</Text>
                        </View>
                    </Text>
                </View>

                <View style={{ marginTop: -w / 4 + 5, marginLeft: ptd(12) }}>
                    <Text style={{ fontSize: 15 }}>出去拍</Text>
                    <Text style={{
                        borderColor: '#ff8c00',
                        borderBottomWidth: 3,
                        borderStyle: 'solid',
                        width: 55,
                        height: 55,
                        borderRadius: 24,
                        position: 'relative',
                        top: -46,
                        left: -5,
                    }}></Text>
                    <Text style={{
                        borderColor: 'grey',
                        borderLeftWidth: 1.5,
                        borderStyle: 'solid',
                        width: 17,
                        height: 19,
                        position: 'relative',
                        top: -70,
                        left: 55,
                    }}></Text>

                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            // marginTop: 20,
                            justifyContent: 'center',
                            width: w / 4 * 3 - 40,
                            height: 35,
                            overflow: 'hidden',
                            // borderColor: '#ff8c00',
                            // borderWidth: 1,
                            // borderStyle: 'solid',
                            position: 'relative',
                            top: -98,
                            left: 60,
                        }}
                    >
                        {
                            this.state.loca.filter(item => item.city_name !== this.state.weizhi).map(tab => (
                                <Text
                                    style={{
                                        height: 35,
                                        width: 55,
                                        // width: w / 4,
                                        // height: w / 4,
                                        borderRadius: 15,
                                        marginLeft: ptd(6),
                                        marginRight: ptd(6),
                                        // marginBottom: 7,
                                        // marginTop: 7,
                                        backgroundColor: 'white',
                                        textAlign: 'center',
                                        lineHeight: 35,
                                    }}
                                    onPress={() => {
                                        this.props.navigation.navigate('goout',  {
                                            weizhi: tab.city_name,
                                            wzid: tab.city_id,
                                        })
                                    }}
                                >
                                    {tab.city_name}
                                </Text>
                            ))
                        }
                    </View>
                    <Text
                        style={{
                            height: 35,
                            width: 55,
                            // width: w / 4,
                            // height: w / 4,
                            borderRadius: 15,
                            marginLeft: ptd(5),
                            marginRight: ptd(5),
                            // marginBottom: 7,
                            // marginTop: 7,
                            backgroundColor: 'white',
                            textAlign: 'center',
                            lineHeight: 35,
                            position: 'relative',
                            top: -132,
                            left: w - 100,
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('alllocation',  {
                                nowCity: this.state.weizhi,
                                nowId: this.state.wzid,
                            })
                        }}
                    >
                        全部
                    </Text>
                </View>

                <View horizontal={true} style={{ marginTop: -w / 3 + 25, paddingTop: 10 }}>
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

                </View>


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
        top: -ptd(40),
        textAlign: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // height: 42,
        // marginLeft: ptd(3),
        // marginRight: ptd(3),
        // marginTop: 4,

    },
    dptxt2:{
        // borderColor: '#ff8c00',
        // borderWidth: 1,
        // borderStyle: 'solid',
        width: ptd(80),
        fontSize: 15,
        position: 'relative',
        left:ptd(135),
        top: -ptd(45),
        textAlign: 'center',
    },
})







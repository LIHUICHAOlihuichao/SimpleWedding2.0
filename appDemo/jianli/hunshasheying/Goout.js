import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet } from 'react-native'

import '../common/global';





export default class Goout extends Component {

    constructor(props) {
        super(props)

        let yy = this.props.route.params;
        this.state = {
            selectLocation:'全部',
            
            
            shuju: [{ "site_id": 0, "site_name": "全部" },],

            tp: [],
            sy: [],
            sp: [],
            dd: [],
            weizhi:yy.weizhi,
            wzid:yy.wzid,
        }
    }


    setSelectLocation(e) {     
          this.setState({ selectLocation: e });
    }

    componentDidMount() {
        var _that = this;
        
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

   
        fetch('http://10.7.86.197:8080/photo_site/')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dd: responseJson.filter(item=>item.city_id==this.state.wzid),
                shuju: _that.state.shuju.concat(responseJson.filter(item=>item.city_id==this.state.wzid))
            }, function () {
                // console.log(this.state.shuju)
            });
        })
        .catch((error) => {
            console.error(error);
        })
    }


    render() {
        // let showContent = (this.state.selectLocation === '全部') ?
        //     <View style={{marginTop:-10}}>
        //         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
        //             style={{
        //                 marginTop: 3,
        //                 width: w,
        //                 height: 50,
        //                 backgroundColor: 'white',

        //             }}>

        //             {
        //                 this.state.shuju.map(tab => (
        //                     <Text onPress={() => this.setSelectLocation(tab.site_name)}
        //                         style={[
        //                             this.state.selectLocation === tab.site_name ? styles.leixing : styles.leixing1
        //                         ]}>
        //                         <Text

        //                             key={tab.id}
        //                             // style={[
        //                             //     styles.text1
        //                             // ]}
        //                             style={[
        //                                 this.state.selectLocation === tab.site_name ? styles.text : styles.text1
        //                             ]}
        //                         >
        //                             {tab.site_name}
        //                         </Text>
        //                     </Text>
        //                 ))
        //             }

        //         </ScrollView>
        //         <ScrollView>
        //             <View
        //                 style={{
        //                     flexDirection: "row",
        //                     flexWrap: "wrap",
        //                     // height: 100,
        //                     paddingTop: 10,
        //                     justifyContent: 'center',
        //                     // alignItems:'center',
        //                 }}
        //             >
        //                 {
        //                     this.state.sy.map(tab => (
        //                         <Text
        //                             style={styles.spk}
        //                         >
        //                             <View>
        //                                 <Image
        //                                     source={{ uri: tab.photo_img1 }}
        //                                     style={styles.image}
        //                                 />
        //                             </View>
        //                             <View>
        //                                 <Text style={styles.txt1}>{tab.photo_name}</Text>
        //                             </View>
        //                         </Text>
        //                     ))
        //                 }
        //             </View>
        //         </ScrollView>
        //     </View>
        //     :
        //     <View style={{marginTop:-10}}> 
        //          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
        //             style={{
        //                 marginTop: 3,
        //                 width: w,
        //                 height: 50,
        //                 backgroundColor: 'white',

        //             }}>

        //             {
        //                 this.state.shuju.map(tab => (
        //                     <Text onPress={() => this.setSelectLocation(tab.site_name)}
        //                         style={[
        //                             this.state.selectLocation === tab.site_name ? styles.leixing : styles.leixing1
        //                         ]}>
        //                         <Text

        //                             key={tab.id}
        //                             // style={[
        //                             //     styles.text1
        //                             // ]}
        //                             style={[
        //                                 this.state.selectLocation === tab.site_name ? styles.text : styles.text1
        //                             ]}
        //                         >
        //                             {tab.site_name}
        //                         </Text>
        //                     </Text>
        //                 ))
        //             }


        //         </ScrollView>
        //         <ScrollView>
        //             <View
        //                 style={{
        //                     flexDirection: "row",
        //                     flexWrap: "wrap",
        //                     // height: 100,
        //                     paddingTop: 10,
        //                     justifyContent: 'center',
        //                     // alignItems:'center',
        //                 }}
        //             >
        //                 {
        //                     this.state.sy.filter(item => item.site_name == this.state.selectLocation).map(tab => (
        //                         <Text
        //                             style={styles.spk}
        //                         >
        //                             <View>
        //                                 <Image
        //                                     source={{ uri: tab.photo_img1 }}
        //                                     style={styles.image}
        //                                 />
        //                             </View>
        //                             <View>
        //                                 <Text style={styles.txt1}>{tab.photo_name}</Text>
        //                             </View>
        //                         </Text>
        //                     ))
        //                 }
        //             </View>
        //         </ScrollView>
        //     </View>

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
          
                <View>
                    <Text style={{
                        position:'relative',
                        top:-30,
                        left:w/2-40,
                    }}>{this.state.weizhi}拍摄地</Text>
                </View>
                <View style={{marginTop:-10}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                    style={{
                        marginTop: 3,
                        width: w,
                        height: 50,
                        backgroundColor: 'white',

                    }}>

                    {
                        this.state.shuju.map(tab => (
                            <Text onPress={() => this.setSelectLocation(tab.site_name)}
                                style={[
                                    this.state.selectLocation === tab.site_name ? styles.leixing : styles.leixing1
                                ]}>
                                <Text

                                    key={tab.id}
                                    // style={[
                                    //     styles.text1
                                    // ]}
                                    style={[
                                        this.state.selectLocation === tab.site_name ? styles.text : styles.text1
                                    ]}
                                >
                                    {tab.site_name}
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







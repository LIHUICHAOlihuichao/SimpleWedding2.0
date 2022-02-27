import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'


import '../common/global';

export default class Shengdi extends Component {
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
                <ScrollView style={{ marginBottom: 50 }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 17,
                            }}
                        >波利尼西亚群岛</Text>
                        <Image
                            style={{
                                width: w,
                                height: h / 3,
                            }}
                            source={{ uri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=707588870,2573730316&fm=26&gp=0.jpg' }} 
                            />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 17,
                            }}
                        >三亚</Text>
                        <Image
                            style={{
                                width: w,
                                height: h / 3,
                            }}
                            source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=478015670,3144362984&fm=26&gp=0.jpg' }} />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 17,
                            }}
                        >东晓南路沿线</Text>
                        <Image
                            style={{
                                width: w,
                                height: h / 3,
                            }}
                            source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2265157628,18917708&fm=26&gp=0.jpg' }} />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 17,
                            }}
                        >普吉岛</Text>
                        <Image
                            style={{
                                width: w,
                                height: h / 3,
                            }}
                            source={require('../../tupian/pujidao.jpg')} />
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 17,
                            }}
                        >威尼斯</Text>
                        <Image
                            style={{
                                width: w,
                                height: h / 3,
                            }}
                            source={require('../../tupian/weinisi.jpg')} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

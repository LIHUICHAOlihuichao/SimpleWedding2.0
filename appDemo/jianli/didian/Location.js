import React, { Component } from 'react'
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'


import '../common/global';
export default class Location extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectTab: 0,
            loca: [],
        }
    }

    setSelectTab(e) {
        this.setState({ selectTab: e });
    }

    componentDidMount() {

        return (
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
                    <View
                        style={{
                            // marginTop:20,
                            // flexDirection: "row",
                            // flexWrap: "wrap",
                            // height: 100,
                            // paddingTop: 10,
                            // justifyContent: 'center',
                            // alignItems:'center',
                        }}
                    >
                        {
                            this.state.loca.map(tab => (
                                <Text
                                    onPress={() => { this.setSelectTab(tab.city_id), this.props.route.params.getContent(tab.city_name, tab.city_id) }}
                                    style={[
                                        this.state.selectTab === tab.city_id ? styles.text : styles.text1
                                    ]}
                                >

                                    {tab.city_name}
                                </Text>
                            ))
                        }
                    </View>

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        height: 30,
        lineHeight: 30,
        fontSize: 16,
        fontWeight: '100',
        // alignItems: 'center',
        // justifyContent: 'center',
        color: '#ff8c00',
        marginLeft: 20,
        // marginTop:20,
    },
    text1: {
        height: 30,
        lineHeight: 30,
        fontSize: 16,
        fontWeight: '100',
        color: 'black',
        marginLeft: 20,
        // marginTop:20,
    },
})
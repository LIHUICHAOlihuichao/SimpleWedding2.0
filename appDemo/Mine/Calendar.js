import React, { Component} from 'react'
import { Alert, View, Text, StyleSheet,TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import qs from 'qs'
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign';
import stateToProps from '../store/stateToProps'
import dispatchToProps from '../store/dispatchToProps'
import MinimalismCalendar from 'react-native-ocalendar';
class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "婚礼日期"
        }
        this.DateTransfer = this.DateTransfer.bind(this)
    }
    DateTransfer(cont) {
        this.setState({
            data: cont[0] + '-' + cont[1] + '-' + cont[2]
        })
    }
    getday(data1) {
        let data = [Number(data1[0]), Number(data1[1]), Number(data1[2])]
        let list1 = this.state.data.split("-")
        let list = [Number(list1[0]), Number(list1[1]), Number(list1[2])]
        let year, month, day = 0
        if (list[2] > data[2]) {
            day = list[2] - data[2] + 5
            if (list[1] > data[1]) {
                month = list[1] - data[1]
                year = list[0] - data[0]
            } else {
                month = 12 - data[1] + list[1]
                year = list[0] - data[0] - 1
            }
        } else {
            data = 30 - data[2] + list[2] + 5
            if (list[1] > data[1]) {
                month = list[1] - data[1] - 1
                year = year = list[0] - data[0]
            } else {
                month = 12 - data[1] + list[1] - 1
                year = list[0] - data[0] - 1
            }
        }
        return year * 365 + month * 30 + day

    }
    showAlert = () => {
        Alert.alert('修改完成', '请返回查看');
    }
    puturl = (obj, url) => {
        axios.put(url, qs.stringify(obj)).then((res) => {
            console.log(res)
        })
        this.showAlert()
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#F5F5F5' }}>
                <View style={styles.top}>
                    <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { this.props.navigation.push('Mine', { day: this.getday(this.props.route.params.data) }) }}></Icon>
                    <Text style={styles.title}>婚礼倒计时</Text>
                    <Text style={styles.save}
                        onPress={() => {
                            this.puturl(
                                {
                                    day_user_id: 5,
                                    day: this.getday(this.props.route.params.data)
                                },
                                'http://10.7.86.197:8080/countdown/updatecountdown'
                                )
                        }}
                    >√</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 15,
                            paddingHorizontal: 30, borderRadius: 3, alignItems: 'center', justifyContent: 'center'
                        }}
                        onPress={() => { }}>
                        <Text style={{ fontSize: 15, color: 'black' }}>{this.state.data}</Text>
                    </TouchableOpacity>
                    <MinimalismCalendar DateTransfer={this.DateTransfer} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    save: {
        fontSize: 25,
        position: 'absolute',
        right: ptd(15),
        top: ptd(5)
    },
    container: {
        backgroundColor: '#F5FCFF',
        marginTop: 100
    },
    title: {
        fontSize: 20,
        position: 'absolute',
        top: ptd(7),
        left: ptd(160)
    },
    back: {
        paddingLeft: ptd(10),
        marginTop: ptd(10),
    },
    top: {
        position: 'absolute',
        width: '100%',
        height: 50,
        backgroundColor: '#F8F8F8',
        borderColor: '#F8F8F8',
        borderWidth: 2
    }
});
export default connect(stateToProps, dispatchToProps)(Calendar);

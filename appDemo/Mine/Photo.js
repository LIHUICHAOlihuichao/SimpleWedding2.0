import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign';
let imgurl = ''
export default class Photo extends Component {
    constructor(props) {
        super(props);''
        this.state = {
            localPhoOption: [],
            avatarSource: '',
        }
        this.imgurl = ''
    }
    UploadRequest = (url, datas) => {
        const params = {
            method: 'POST',
            body: datas,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        };
        return fetch(`${url}`, params)
            .then(response => response.json())
            .then(data => data)
            .catch(error => {
                return { res_code: -3, error_msg: '请求异常，请重试' }
            })
    }
    uploadEquipImg = async (params) => {
        let { formData ,uri} = params
        return await this.UploadRequest('http://10.7.86.197:8080/uploadimg/?user_id=' + 5+`&user_image=`+uri, formData)
    }
    getImg = () => {
        axios.get('http://10.7.86.197:8080/uploadimg/getImg/?user_id=' + 5, { responseType: 'arraybuffer' }).then(function (data) {
            var binary = '';
            var bytes = new Uint8Array(data.data);
            var len = bytes.byteLength;
            for (var i = 0; i < len; i++) {
                binary += String.fromCharCode(bytes[i]);
            }
            imgurl = window.btoa(binary)

            this.setState({
                avatarSource: 'data:image/jpg;base64,' + window.btoa(binary)
            }
            );
        }).catch(function (err) {
            error(err)
        });
    }
    handleAddPicCheck() {
        let { localPhoOption } = this.state
        let { props } = this
        let that = this
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '相册',
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 720,
            maxHeight: 1280,
            aspectX: 2,
            aspectY: 1,
            quality: 1,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true,
                path: 'PickLocalImg'
            }
        };
        ImagePicker.showImagePicker(options, async (res) => {
            if (res.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
                if (res.error.indexOf('Camera permissions not granted') > -1) {
                    Alert.alert(('提示信息', 'APP需要使用相机，请打开相机权限允许APP使用'), [{
                        text: '设置',
                        onPress: () => {
                            Linking.openURL('app-settings:')
                                .catch(err => console.log('error', err))
                        }
                    }, {
                        text: '取消'
                    }])
                }
                if (res.error.indexOf('Photo library permissions not granted') > -1) {
                    Alert.alert('提示信息', 'APP需要使用相册，请打开相册权限允许APP使用', [{
                        text: '设置',
                        onPress: () => {
                            Linking.openURL('app-settings:')
                                .catch(err => console.log('error', err))
                        }
                    }, {
                        text: '取消'
                    }]);
                }
            }
            else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
            } else {
                let source;
                if (Platform.OS === 'android') {
                    source = res.uri;
                } else {
                    source = res.uri.replace('file://', '');
                }
                const formData = new FormData();
                let file = { uri: source, type: 'multipart/form-data', name: res.fileName };
                console.log('000000',file.uri)
                formData.append('file', file);
                let params = {
                    formData,
                    uri:file.uri
                }
                console.log(params)
                let imgResult = await this.uploadEquipImg(params);
                console.log(imgResult)
                if (imgResult.res_code == 0) {
                    console.log('上传成功');
                    let { url } = imgResult.data
                    localPhoOption.push(source);
                    that.setState({
                        localPhoOption
                    });
                } else {
                    let error_msg = imgResult.error_msg || imgResult.message
                    console.log(error_msg);
                }
            }
        })
    }
    renderPicItem(item, index) {
        return (
            <View key={index}>
                <TouchableOpacity
                    activeOpacity={.8}
                >
                    <Image source={{ uri: item }} />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        let { state } = this
        return (
            <View>
                <TouchableOpacity style={{ height: 50, width: 100 }}>
                    <Icon name="left" size={30} color='black' style={{ marginTop: 10, marginLeft: ptd(15) }} onPress={() => { this.props.navigation.push('Mymessage') }}></Icon>
                </TouchableOpacity>
                <View style={{ height: 200, width: 200 }}>
                    <TouchableOpacity style={
                        { width: 200, height: 200, backgroundColor: '#f28080', marginLeft: ptd(110), marginTop: ptd(50), borderRadius: 100 }
                    }>
                        <TouchableOpacity
                            onPress={() => this.handleAddPicCheck()} style={
                                { width: 160, height: 160, backgroundColor: '#FF5353', marginLeft: ptd(17), borderRadius: 80, marginTop: 18, justifyContent: 'center', alignItems: 'center' }
                            }>
                            <Text style={{ color: 'white', fontSize: 20 }}>点击更换头像</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

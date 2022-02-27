import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView ,Image,TouchableOpacity} from 'react-native';
import '../common/global';
import ImagePicker from 'react-native-image-picker' ;
import { NavigationContainer } from '@react-navigation/native';
import qs from 'qs'
import axios from 'axios'
import Home from './Home';
// import RNFS from 'react-native-fs';
import { useFocusEffect } from '@react-navigation/native';
import  {DeviceEventEmitter} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const Releases = ({ navigation, route }) => {
  const [userdata,setuserData] = useState([]);
    useEffect(()=>{
        AsyncStorage.getItem('loginUser').then(res=>{
            if(res){
                setuserData(JSON.parse(res))
                console.log('名字1')
                console.log(userdata)
            }
        })
        
    },[]);

    const [userdatas,setuserDatas] = useState([]);
    useEffect(() => {
        fetch('http:10.7.86.197:8080/user/getalluser')
          .then((response) => response.json())
          .then((json) => setuserDatas(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));

          console.log('用户')
          console.log(userdatas)
        
      }, []);

      const arrs = userdatas.filter(function(item,index){
        return item.user_name == userdata
    })
      console.log('vvv')
      console.log(arrs)



    const m = route.params;
    console.log(m);
    const [inpvalue, setInpvalue] = useState('');
    const [value, setValue] = useState('');
    const [avatarSource, setavatarsource] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
      navigation.setOptions({  
        headerRight: () => (
          <Text
            style={{ marginRight:ptd(10), marginTop:ptd(3),fontSize: ptd(15) ,backgroundColor:'red',color:'white',paddingTop:ptd(2),paddingBottom:ptd(2),paddingLeft:ptd(12),paddingRight:ptd(12),borderRadius:ptd(20)}}
            title="update"
            onPress={submit}
            >
            发布
          </Text>
        ),
      });
    }, [inpvalue, value,m,avatarSource]);

    const posturl = (obj, url) => {
        var instance = axios.create({ headers: {'content-type': 'application/x-www-form-urlencoded'} });
        instance.post(url, qs.stringify(obj)).then((res) => {
            // console.log(res)
            console.log('成功')
        })
    }

    var time =''
    const getmyDate = () => {
        var date = new Date();

        var year = date.getFullYear().toString();
        var month = (date.getMonth()+1).toString();
        var day = date.getDate().toString();
        var hour =  date.getHours().toString();
        var minute = date.getMinutes().toString();
        var second = date.getSeconds().toString();//秒 
        time = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second
        //return year+'年'+month+'月'+day+'日'+' '+hour+':'+minute;
        // console.log(year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second)
        // console.log(time);
    }
    
   
    const submit = ()=>{
      console.log('kk')
      console.log(inpvalue)
      console.log(value)
      console.log(avatarSource)
      console.log(m.topic)
        getmyDate()
        posturl(
            {
              daily_content:value,
              daily_img:avatarSource,
              daily_title:inpvalue,
              post_style_id:m.num,
              daily_user_id:arrs[0].user_id,
              // style_name:m.topic,
              // user_id:2,
              user_id:arrs[0].user_id,
              time:time
            },
            'http://10.7.86.197:8080/daily/postdaily'
        )
            
        navigation.goBack()
        // navigation.navigate("HomePage")
        

    }

        //show
      const  UploadRequest = (url, datas) => {
            // let BaseUrl = 'http://10.7.86.197:8080/uploadImg/?id=`+${id}+`&name=`+${name}  // 域名地址，根据自己的修改
            const params = {
                method: 'POST',
                body: datas,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                // timeout: 5000 // 5s超时
            };
            // 发送 POST 请求
            return fetch(`${url}`, params)
                .then(response => response.json())
                .then(data => data)
                .catch(error => {
                    return { res_code: -3, error_msg: '请求异常，请重试' }
                })
        }
      const  uploadEquipImg = async (params) => {
            let { formData } = params
            return await this.UploadRequest('http://10.7.86.197:8080/uploadimg/?user_id=' + 5, formData)
        }
      const  handleAddPicCheck=()=> {
            // console.warn('添加图片------check')
            // let { localPhoOption } = this.state
            // let { props } = this
            // let that = this
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
                    path: 'PickLocalImg' // 存储本地地址
                }
            };
            ImagePicker.showImagePicker(options, async (res) => {
                if (res.didCancel) {
                    console.log('User cancelled photo picker');
                }
                else if (res.error) {
                    // 用户选择不授权时，提醒以下信息
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
                    // 用户授权并选择照片/拍照后，调用接口
                    let source;  //保存选中的图片
                    if (Platform.OS === 'android') {
                        source = res.uri;
                        setavatarsource(source);
                    } else {
                        source = res.uri.replace('file://', '');
                    }
                    const formData = new FormData();
                    // 文件类型根据对应的后端接口改变！！！
                    let file = { uri: source, type: 'multipart/form-data', name: res.fileName };
                    formData.append('file', file);
                    let params = {
                        formData
                    }
                    // console.log(params)
                    //上传图片接口
                    let imgResult = await uploadEquipImg(params);
                    console.log(imgResult)
                    // if (imgResult.res_code == 0) {
                    //     // 提交订单
                    //     console.log('上传成功');
                    //     let { url } = imgResult.data
                    //     localPhoOption.push(source); // 存储本地图片地址，方便在APP中本地查看展示，注意⚠不是后端返回的图片地址
                    //     that.setState({
                    //         localPhoOption
                    //     });
                    // } else {
                    //     let error_msg = imgResult.error_msg || imgResult.message
                    //     console.log(error_msg);
                    // }
                }
            })
        }




    //刷新机制
    useFocusEffect(
      React.useCallback(() => {
        let isActive = true;
          const fetchUser = async () => {
            try {
              const user = fetch('http://10.7.86.197:8080/daily/')
                  .then((response) => response.json())
                  .then((json) => setData(json))
                  .catch((error) => console.error(error))
                  .finally(() => setLoading(false));
      
              if (isActive) {
                setUser(user);
              }
            } catch (e) {
              // Handle error
            }
          };
      
          fetchUser();
      
          return () => {
            isActive = false;
          };
      }, [])
    );

    // const options = {
    //   title: '选择图片',
    //   storageOptions: {
    //       skipBackup: true,
    //       path: 'images',
    //   },
    //   cancelButtonTitle:'取消',
    //   takePhotoButtonTitle:'点击拍照',
    //   chooseFromLibraryButtonTitle:'从相册打开',
    //   tintColor:'#CB0000'
    // };

    // const openPicker =()=>{
    //   ImagePicker.showImagePicker(options, (response) => {
    //       if (response.didCancel) {
    //           return;
    //       } else if (response.error) {
    //           console.log('Error:', response.error);
    //       } else if (response.customButton) {
    //           console.log('custom:', response.customButton);
    //       } else {
    //         let source;
    //         source = { uri: response.uri };
    //         console.log(source);
    //         setavatarsource(source);
    //         console.log({avatarSource})

    //       }
    //   });
    // };

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>{handleAddPicCheck()}} style={styles.phos}>
        <View>
          <Text style={styles.pho}>+</Text>
        </View>
       <Image source={{uri:avatarSource}} style={styles.uploadAvatar}/>
      </TouchableOpacity>
      <TextInput
          placeholder = {'有标题会被更多的人看到哦~'}
          placeholderTextColor = {'#BBBBBB'}
          style={styles.title}
          value={inpvalue}
          onChangeText={(val) => setInpvalue(val)}
      />
      <View style={styles.content}>
        <TextInput
          placeholder = {'来分享你的备婚经验，帮助姐妹们种草吧！'}
          placeholderTextColor = {'#C2C2C2'}
          multiline={true}
          style={styles.title2}
          value={value}
          
          onChangeText={(val) => setValue(val)}
        />
      </View>

      <View style={{flex: 1, flexDirection: 'row',marginLeft:ptd(10),marginTop:ptd(10),width:ptd(350),borderBottomColor:'#DEDEDE',borderBottomWidth:ptd(1),paddingBottom:ptd(10)}}>      
          <Image style={{width:ptd(18),height:ptd(18),marginTop:ptd(2)}} 
            source={require('./img/topic.png')}>   
          </Image>
          <View style={{width:ptd(200)}}>
          <Text style={m==undefined?styles.topicnew:styles.topicnew1}>{m==undefined?'参与话题':m.topic}</Text>
          </View>
          <TouchableOpacity  
            onPress={()=>{
                navigation.navigate("topic")
            }} 
            style={{marginTop:ptd(2),marginLeft:ptd(80)}}
          >
            <Text style={{fontSize:ptd(13),color:'#8a8a8a'}}> 点击选择</Text>

          </TouchableOpacity>

      </View>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  pho:{
    width:ptd(70),
    height:ptd(70),
    fontSize:40,
    opacity:0.6,
    // paddingLeft:ptd(18),
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius:10,
    textAlign:'center',
    paddingTop:ptd(10)
    
  },
  phos:{
     width:ptd(70),
    height:ptd(70),
    margin:ptd(12)
  },
  uploadAvatar:{
    width:ptd(70),
    height:ptd(70),
    marginLeft:ptd(80),
    marginTop:ptd(-70)
  },
  title: {
    fontSize:ptd(16),  
    // fontWeight:'800',   
    marginLeft:ptd(12),
    marginTop:ptd(5),
  },
  content: {
    height: ptd(100),
    marginLeft:ptd(12),
    marginRight:ptd(12),
    borderTopColor: '#DEDEDE',
    borderBottomColor: '#DEDEDE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  title2: {
    fontSize:ptd(16),
  },
  
  topicnew:{
    fontSize:ptd(14),
    marginLeft:ptd(5),
    marginTop:ptd(2)
  },
  topicnew1:{
    fontSize:ptd(14),
    marginLeft:ptd(5),
    marginTop:ptd(2),
    color:'red',

  },
  more:{
    fontSize:8,
    fontFamily:'黑体',
    color:'#BABABA',
    marginLeft:ptd(300),
    marginTop:ptd(5),
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
  }
});
export default Releases;

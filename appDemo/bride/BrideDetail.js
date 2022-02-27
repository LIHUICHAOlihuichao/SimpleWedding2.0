import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    TextInput,
    Dimensions,
    localStorage,
    AsyncStorageq,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    Alert,
    
} from 'react-native';
import { useEffect } from 'react/cjs/react.development';
import AsyncStorage from '@react-native-community/async-storage';
import qs from 'qs'
import axios from 'axios'

const BrideDetail = ({ navigation,route}) => {
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

      const brrs = userdatas.filter(function(item,index){
        return item.user_name == userdata
    })
    //   console.log('ccc')
    //   console.log(brrs)

    const [isLoading, setLoading] = useState(true);
    //获取文章数据
    const [data, setData] = useState([]);

    const [value,setValue] = useState('');

    //获取评论
    const [replydata, setReplydata] = useState([]);

    let {itid} = route.params;
    
    console.log(itid)
    
    useEffect(() => {
        fetch('http://10.7.86.197:8080/daily/')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));

          console.log(111)
          console.log({data})
        
      }, []);

      //const arr = data.filter(obj=>obj.daily_id.find(item=>item.daily_id = {itid}))
    const arr = data.filter(function(item,index){
        return item.daily_id == itid
    })
      console.log('aaaaa')
      console.log(arr)

    //获取评论
    useEffect(() => {
        fetch('http://10.7.86.197:8080/reply/?daily_id='+itid)
          .then((response) => response.json())
          .then((json) => setReplydata(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
          //console.log({replydata})
        
      }, []);

      replydata.sort(function(a, b){
        return new Date(b.time.replace(/-/g, "/")) - new Date(a.time.replace(/-/g, "/"))
        });
        // console.log('排序')
        // console.log(replydata);
    
    const posturl = (obj, url) => {
        var instance = axios.create({ headers: {'content-type': 'application/x-www-form-urlencoded'} });
        instance.post(url, qs.stringify(obj)).then((res) => {
            // console.log(res)
            console.log('成功')
            fetch('http://10.7.86.197:8080/reply/?daily_id='+itid)
          .then((response) => response.json())
          .then((json) => setReplydata(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));    
          console.log({replydata})  
        })
    }

     //时间
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
         console.log(year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second)
         console.log(time);
     }

    //提交
    const submitData = async()=>{
        if(value==='') {
            return alert('注意：留言不能为空 !')
        }
        //alert(value);
        Alert.alert('提示','确定要提交吗？',[
            {text:'取消',onPress:()=>{}, style:'cancel'},
            {text:'确定',
                //onPress:()=>alert(value)
                onPress:()=>{
                    // submitReplyData();
                    getmyDate()
                    posturl(
                        {
                            daily_id:itid,
                            reply_content:value,
                            user_id:brrs[0].user_id,
                            time:time
                            //reply_user_id:2                      
                        },
                        'http://10.7.86.197:8080/reply/postreply'
                    )
                    console.log(time)

                },

            }
        ])
    }


       

    return (
        <ScrollView style={{backgroundColor:'white'}}>
        <TouchableOpacity
            onPress={
                () => {navigation.goBack();
                }
            }
        >                       
            <Image
                source={require('../brideImage/fanhui.png')}
                onPress={
                    () => {navigation.goBack();
                    }
                }
                style={{width:ptd(20),height:ptd(20),marginLeft:ptd(10),marginTop:ptd(5)}}
            />
        </TouchableOpacity>
        
        {/* <View>
            {isLoading ? <ActivityIndicator/> : (
                <View>
                    <View style={{marginTop:ptd(5)}}>
                        <ImageBackground 
                                source={{uri:arr[0].daily_img}} 
                                style={{width: '100%', height:ptd(230)}}
                        >
                        </ImageBackground>
                    </View>
                    <View style={{marginTop:ptd(10)}}>
                        <Text style={{fontSize:ptd(20),marginLeft:ptd(20)}}>{arr[0].daily_title}</Text>
                        <View style={{marginLeft:ptd(20),marginRight:ptd(10),marginTop:ptd(20)}}>
                            <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>{arr[0].daily_content}</Text>
                        </View>
                        <View style={{marginTop:ptd(5),marginLeft:ptd(20)}}>
                            <View style={{marginLeft:ptd(2),backgroundColor:'#faf1f3',width:ptd(100),height:ptd(25),borderRadius:ptd(50)}}>
                                <Text style={{fontSize:ptd(16),textAlign:'center',lineHeight:ptd(25),color:'#f3073f'}}>{arr[0].style_name}</Text>
                            </View>
                        </View>
                        
                    </View>

                    <View style={{height:ptd(10),backgroundColor:'#f5f5f5',marginTop:ptd(10)}}></View>

                </View>
             
             )}
        </View> */}
        <View style={{height:ptd(200)}}>
                     <ImageBackground 
                        source={require('../brideImage/zan.png')} 
                        style={{width: '100%', height:ptd(200)}}
                    >
                        {/* <TouchableOpacity
                            onPress={
                                () => {navigation.goBack();
                                }
                            }
                        >                       
                            <Image
                                source={require('../brideImage/back.png')}
                                onPress={
                                    () => {navigation.goBack();
                                    }
                                }
                                style={{width:ptd(22),height:ptd(22),marginLeft:ptd(10),marginTop:ptd(10)}}
                            />
                        </TouchableOpacity> */}
                        
                    </ImageBackground>
            </View>
            <View style={{marginTop:ptd(10)}}>
                <Text style={{fontSize:ptd(20),marginLeft:ptd(20)}}>婚礼倒计时一周需要做的20件事，5分钟查漏补缺</Text>
                <View style={{marginLeft:ptd(20),marginRight:ptd(10),marginTop:ptd(20)}}>
                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    1、再次试穿婚礼当天的婚纱礼服、内衣、婚鞋，如有不合适，立刻修改
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    2、包装好喜糖盒、伴手礼
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    3、去酒店确认一下环境、婚宴菜单和酒水，以及再次和酒店确认婚礼当天的服务细节
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    4、和主持人沟通好自己想要的流程，确定好彩排的具体时间，有在婚礼上播放的视频、爱情相册、ppt，剪辑好的音乐、歌曲都要在这个时候给主持人了
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    5、检查新娘应急包，没有的东西赶紧补补
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    6、确认好婚房布置需要的小物
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    7、清点好嫁妆的物品清单
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    8、确认双方父母婚礼当天的礼服
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    9、清点小物：酒、饮料、糖、花生、瓜子、茶叶、解酒药、签到本、签到笔
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    10、给爸爸妈妈做一个形象管理，爸爸理个头发，给妈妈准备一些配饰
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    11、有单独邀请现场乐队表演的，记得和他们再次确认好时间、表演曲目
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    12、确定婚车装饰
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    13、将零钱放入小红包，并将不同价格的红包分类放好
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    14、和婚礼策划团队再次确认婚礼当天的流程
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    15、帮助父母确认发言稿
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    16、做美甲、spa，放松一下
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    17、再次确认伴郎伴娘当天的任务
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    18、跟工作人员确认家里地址，确定好他们到家的时间
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    19、和伴娘确定好结亲的游戏
                    </Text>

                    <Text style={{fontSize:ptd(14),lineHeight:ptd(25),color:'#6a6a6a'}}>
                    20、清点游戏道具
                    </Text>
                </View>
                <View style={{marginTop:ptd(5),marginLeft:ptd(20)}}>
                    <View style={{marginLeft:ptd(2),backgroundColor:'#faf1f3',width:ptd(100),height:ptd(25),borderRadius:ptd(50)}}>
                        <Text style={{fontSize:ptd(16),textAlign:'center',lineHeight:ptd(25),color:'#f3073f'}}># 新娘日记</Text>
                    </View>
                </View>
                        
            </View>
            <View style={{height:ptd(10),backgroundColor:'white',marginTop:ptd(10)}}></View>

        <View>
            <View style={{margin:16,
                        borderWidth:1,
                        borderColor:'rgba(0,0,0,0.2)',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        borderRadius:10,
                        alignItems:'center'
                    }}>
                        <TextInput
                            placeholder='请输入评论内容'
                            underlineColorAndroid="transparent"
                            keybordType='numeric'
                            style={{height:50,width:300,fontSize:20}}
                            multiline={ true }
                            value ={value}
                            onChangeText = {(val)=>setValue(val)}
                        >
                        </TextInput>

                        <TouchableHighlight 
                            // onPress={ this._submit.bind(this) }
                            onPress={
                                submitData
                            }
                        >
                            <View style={{
                                width:90,
                                height:45,
                                backgroundColor:'#ff7454',
                                justifyContent:'center',
                                alignItems:"center",
                                borderRadius:10,
                            }}>
                                <Text style={{color:'white',fontSize:20,letterSpacing:20}}>提交</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
        </View>
        <View>
            <Text style={{marginLeft:ptd(15),fontSize:ptd(18),marginTop:ptd(5)}}>评论区：</Text>
            <View>
                {isLoading ? <ActivityIndicator/> : (
                    <FlatList
                        data={replydata}
                       
                        //keyExtractor={({ ids }, index) => ids}
                        renderItem={({ item }) => (
                            <View style={{marginTop:ptd(5)}}>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <Image
                                        source={{uri:item.user_image}}
                                        style={{width:ptd(30),height:ptd(30),borderRadius:ptd(50),marginLeft:ptd(10),marginTop:ptd(5)}}
                                    />
                                    <Text style={{fontSize:ptd(14),color:'#4a4a4a',marginTop:ptd(9),marginLeft:ptd(5)}}>{item.user_name}</Text>
                                </View>
                                <View style={{marginTop:ptd(5),width:ptd(320),marginLeft:ptd(45)}}>
                                    <Text style={{fontSize:ptd(15),color:'#6a6a6a'}}>{item.reply_content}</Text>
                                </View>
                                <Text style={{marginTop:ptd(10),marginLeft:ptd(45),color:'#8a8a8a'}}>{item.time}</Text>
                                <View style={{marginTop:ptd(10),height:ptd(3),backgroundColor:'#f5f5f5'}}></View>
                            </View>
    
    
                        )}
                    />
                )}
            </View>        
        </View>

        {/* <View style={{height:ptd(10),backgroundColor:'#f5f5f5',marginTop:ptd(10)}}></View> */}
        </ScrollView>
    )
}

export default BrideDetail

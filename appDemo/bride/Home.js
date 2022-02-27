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
    ActivityIndicator
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react/cjs/react.development';
import Icon from 'react-native-vector-icons/FontAwesome';
import '../common/global';
import TitleOne from './TitleOne';
import TitleTwo from './TitleTwo';
import TitleThree from './TitleThree';
import TitleFour from './TitleFour';
import BrideDetail from './BrideDetail';
import TitleDetail from './TitleDetail';

// import axios from 'axios'
import Release from './Release'
import Releases from './Releases'
import Topic from './Topic'
import selectPhotoTapped from './ImagePickerPage'
import  {DeviceEventEmitter} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import { connect } from 'react-redux'
import stateToProps from '../store/stateToProps'//变量
import dispatchToProps from '../store/dispatchToProps'//方法

const Stack = createStackNavigator();

const tabs = [
    {text:'精选',id:0},
    {text:'新娘日记',id:1},
    {text:'习俗',id:2},
    {text:'清单',id:3},
    {text:'婚戒',id:4},
    {text:'现场',id:5},
    {text:'新娘造型',id:6},
]

const HomePage = ({ navigation,route}) => {
    // let { inputValue4, inputChange4,
    //     inputValue5, inputChange5,
    //     inputValue6, inputChange6,
    //     inputValue7, inputChange7,
    //     inputValue8, inputChange8,
    //     inputValue9, inputChange9, clickBtn, postFun, deleteFun, getFun,getFun12, putFun,
    //     list, datanew,data12, post, } = props

    




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
    

    // const [courses, setCourses] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
   
    useFocusEffect(
        React.useCallback(() => {
            fetch('http://10.7.86.197:8080/daily/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
  
            console.log(111)
            console.log(data)
        }, [])
      );

    //   useEffect(() => {
    //     fetch('http://10.7.86.197:8080/daily/')
    //       .then((response) => response.json())
    //       .then((json) => setData(json))
    //       .catch((error) => console.error(error))
    //       .finally(() => setLoading(false));

    //       console.log(111)
    //       console.log(data)
    //   }, []);
    
    setTimeout(() => {
        SplashScreen.hide();
    }, 2000)

    const [selectTab,setSelectTab] = useState(0);
    // const [selectTabs,setSelectTabs] = useState(0);
    // const selectTabs = 0;

    //切换更新数据
    // const upDateList = async()=>{
    //     if(selectTab==0){
    //         fetch('http://10.7.86.197:8080/daily/')
    //       .then((response) => response.json())
    //       .then((json) => setData(json))
    //       .catch((error) => console.error(error))
    //       .finally(() => setLoading(false));
    //         // navigation.navigate('home',{data:{}})
    //     }        
    // }

    data.sort(function(a, b){
            return new Date(b.time.replace(/-/g, "/")) - new Date(a.time.replace(/-/g, "/"))
    });
    // console.log('排序')
    // console.log(data);

    const arr1 = data.filter(function(item,index){
        return item.style_id == 1
    })
    const arr2 = data.filter(function(item,index){
        return item.style_id == 2
    })
    

    let a = (selectTab==0)?
        <ScrollView style={{backgroundColor:'#f2f3f3'}}>    

        <View style={{flex: 1, flexDirection: 'row',marginTop:ptd(3)}}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={data}
                keyExtractor={({ daily_id }, index) => daily_id}
                numColumns ={2}
                renderItem={({ item }) => (
                    <View style={{marginLeft:ptd(11),marginTop:ptd(10),height:ptd(270),width:ptd(170),borderRadius:ptd(10)}}>
                        <TouchableOpacity
                            style={{backgroundColor:'white',borderRadius:ptd(10)}}
                            onPress={
                                ()=>{navigation.navigate(
                                    'BrideDetail',
                                    {
                                        itid:item.daily_id
                                    }
                                )}
                            }
                        >   
                            <View style={{height:ptd(220),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}>     
                                <Image
                                    source={{uri:item.daily_img}}
                                    style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                                />
                                <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>{item.daily_title}</Text>

                            </View> 
                            <View style={{height:ptd(50)}}>
                                <Image
                                    source={{uri:item.user_image}}
                                    style={{width:ptd(30),height:ptd(30),borderRadius:ptd(50),marginLeft:ptd(5),marginTop:ptd(5)}}
                                />
                                <Text style={{width:ptd(75),fontSize:ptd(14),color:'gray',marginTop:ptd(-25),marginLeft:ptd(35)}}>{item.user_name}</Text>
                                <Text style={{color:'gray',marginTop:ptd(3),fontSize:ptd(8),marginLeft:ptd(35)}}>{item.time}</Text>
                            </View>
                            
                        </TouchableOpacity>

                </View>


                )}
                />
            )}
        </View>
            <View style={{height:ptd(10),backgroundColor:'#f5f5f5',marginTop:ptd(10)}}></View>

        </ScrollView>

    :<></>

    let b = (selectTab==1)?
        <ScrollView style={{backgroundColor:'#f2f3f3'}}>    

        <View style={{flex: 1, flexDirection: 'row',marginTop:ptd(3)}}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={arr1}
                // keyExtractor={({ id }, index) => id}
                keyExtractor={({ daily_id }, index) => daily_id}
                numColumns ={2}
                renderItem={({ item }) => (
                    <View style={{marginLeft:ptd(11),marginTop:ptd(10),height:ptd(270),width:ptd(170),borderRadius:ptd(10)}}>
                        <TouchableOpacity
                            style={{backgroundColor:'white',borderRadius:ptd(10)}}
                            onPress={
                                ()=>{navigation.navigate(
                                    'BrideDetail',
                                    {
                                        itid:item.daily_id
                                    }
                                )}
                            }
                        >   
                            <View style={{height:ptd(220),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}>     
                                <Image
                                    source={{uri:item.daily_img}}
                                    style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                                />
                                <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>{item.daily_title}</Text>

                            </View> 
                            <View style={{height:ptd(50)}}>
                                <Image
                                    source={{uri:item.user_image}}
                                    style={{width:ptd(30),height:ptd(30),borderRadius:ptd(50),marginLeft:ptd(5),marginTop:ptd(5)}}
                                />
                                <Text style={{width:ptd(75),fontSize:ptd(14),color:'gray',marginTop:ptd(-25),marginLeft:ptd(35)}}>{item.user_name}</Text>
                                <Text style={{color:'gray',marginTop:ptd(3),fontSize:ptd(8),marginLeft:ptd(35)}}>{item.time}</Text>
                            </View>
                            
                        </TouchableOpacity>

                </View>


                )}
                />
            )}
        </View>
            <View style={{height:ptd(10),backgroundColor:'#f5f5f5',marginTop:ptd(10)}}></View>

        </ScrollView>

    :<></>

    let c = (selectTab==2)?
        <ScrollView style={{backgroundColor:'#f2f3f3'}}>    
            <View style={{flex: 1, flexDirection: 'row',marginTop:ptd(3)}}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={arr2}
                // keyExtractor={({ id }, index) => id}
                //keyExtractor={({ id2 }, index) => id2}
                keyExtractor={({ daily_id }, index) => daily_id}
                numColumns ={2}
                renderItem={({ item }) => (
                    <View style={{marginLeft:ptd(11),marginTop:ptd(10),height:ptd(270),width:ptd(170),borderRadius:ptd(10)}}>
                        <TouchableOpacity
                            style={{backgroundColor:'white',borderRadius:ptd(10)}}
                            onPress={
                                ()=>{navigation.navigate(
                                    'BrideDetail',
                                    {
                                        itid:item.daily_id
                                    }
                                )}
                            }
                        >   
                            <View style={{height:ptd(220),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}>     
                                <Image
                                    source={{uri:item.daily_img}}
                                    style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                                />
                                <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>{item.daily_title}</Text>

                            </View> 
                            <View style={{height:ptd(50)}}>
                                <Image
                                    source={{uri:item.user_image}}
                                    style={{width:ptd(30),height:ptd(30),borderRadius:ptd(50),marginLeft:ptd(5),marginTop:ptd(5)}}
                                />
                                <Text style={{width:ptd(75),fontSize:ptd(14),color:'gray',marginTop:ptd(-25),marginLeft:ptd(35)}}>{item.user_name}</Text>
                                <Text style={{color:'gray',marginTop:ptd(3),fontSize:ptd(8),marginLeft:ptd(35)}}>{item.time}</Text>
                            </View>
                            
                        </TouchableOpacity>

                </View>


                )}
                />
            )}
        </View>
            <View style={{height:ptd(10),backgroundColor:'#f5f5f5',marginTop:ptd(10)}}></View>

        </ScrollView>

    :<></>

    //let d = (selectTab==2)?<View><Text>333</Text></View>:<View></View>

    return (
        <View style={styles.container}>
            <View >
                <View style={{height:ptd(100)}}>
                    <Text style={{fontSize:ptd(20),marginTop
                    :ptd(5),marginLeft:ptd(5)}}>热门话题</Text>
    

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{marginLeft:ptd(10),marginTop:ptd(5)}}
                            onPress={
                               ()=>{navigation.navigate('TitleOne')}
                            }
                        >   
                            <View style={{flex: 1, flexDirection: 'row'}}>     
                                <Image
                                    source={require('../brideImage/one.jpg')}
                                    style={{width:ptd(22),height:ptd(22)}}
                                />
                                <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>大婚倒计时查漏补缺</Text>
                            </View>           
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{marginLeft:ptd(60),marginTop:ptd(5)}}
                            onPress={
                                ()=>{navigation.navigate('TitleTwo')}
                            }
                        >                   
                            <View style={{flex: 1, flexDirection: 'row'}}>     
                                <Image
                                    source={require('../brideImage/two.jpg')}
                                    style={{width:ptd(22),height:ptd(22)}}
                                />
                                <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>堵门游戏大全</Text>
                            </View> 
                        
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{marginLeft:ptd(10),marginTop:ptd(5)}}
                            onPress={
                                ()=>{navigation.navigate('TitleThree')}
                            }
                        >   
                            <View style={{flex: 1, flexDirection: 'row'}}>     
                                <Image
                                    source={require('../brideImage/three.jpg')}
                                    style={{width:ptd(22),height:ptd(22)}}
                                />
                                <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>婚礼誓词模板</Text>
                            </View>           
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{marginLeft:ptd(103),marginTop:ptd(5)}}
                            onPress={
                                ()=>{navigation.navigate('TitleFour')}
                            }
                        >                   
                            <View style={{flex: 1, flexDirection: 'row'}}>     
                                <Image
                                    source={require('../brideImage/four.jpg')}
                                    style={{width:ptd(22),height:ptd(22)}}
                                />
                                <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>婚房布置攻略</Text>
                            </View> 
                        
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                <ScrollView
                    horizontal={true}
                >
                    {
                        tabs.map(tab=>(
                            <Text 
                                onPress={
                                    ()=>{
                                        setSelectTab(tab.id)
                                        //upDateList()
                                    }
                                }
                                key={tab.id}
                                style={[
                                    styles.tabs,
                                    {borderBottomWidth:selectTab==tab.id?3:0},
                                    {fontSize:selectTab==tab.id?ptd(18):ptd(15)},
                                    {color:selectTab==tab.id?'#FB7737':'black'}
                                ]}
                            >{tab.text}</Text>
                        ))
                    }
                </ScrollView >
            
                </View>
                </View>

                
                    {
                        a
                    }

                    {
                        b
                    }
                    {
                        c
                    }


                
            


            <View style={styles.navsbox}>          
              <TouchableOpacity style={styles.nav} 
                    onPress={()=>{
                        navigation.navigate("Rel")
                    }} 
                >
                    <Image style={{width:ptd(40),height:ptd(40)}} source={require('./img/add.png')}></Image>
                            
                </TouchableOpacity> 
     
            </View>
        </View>
           
        
    )
}

const styles = StyleSheet.create({
    nav:{
        width: '15%',
        alignItems: 'center',
        paddingTop: 25,
        marginLeft:35
    },
    navsbox:{
        position:'absolute',
        right:ptd(-25),
        top:ptd(-20),
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    tabs:{
        marginTop:ptd(15),
        lineHeight: ptd(40),
        marginLeft: ptd(15),
        borderBottomColor:'#FB7737',
    },
    container:{
    flex:1,    // 属性:属性值
    backgroundColor:'white'   //背景色
  }
})

const Home = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="HomePage" component={HomePage}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="TitleOne" component={TitleOne}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="TitleTwo" component={TitleTwo}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="TitleThree" component={TitleThree}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="TitleFour" component={TitleFour}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="BrideDetail" component={BrideDetail}
            />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="TitleDetail" component={TitleDetail}
            />

            <Stack.Screen    
                options={{
                    // title:'发帖',  
                    headerTitle:()=><Text style={{width:ptd(40),marginLeft:ptd(105),marginTop:ptd(5),fontSize:20}}>发帖</Text>        
                    // headerRight:()=>< ext style={{marginRight:22,fontSize:24}}>√</Text>,           
                    
                }}    
                name="Rel" component={Releases} 
            /> 
          <Stack.Screen 
          options={{
            headerTitle:()=><Text style={{width:ptd(80),marginLeft:ptd(100),marginTop:ptd(5),fontSize:20}}>选择话题</Text> 
          }}
          name="topic" component={Topic} />
           <Stack.Screen 
         
          name="selectPhotoTapped" component={selectPhotoTapped} />
            
        </Stack.Navigator>
    )
}


export default connect(stateToProps, dispatchToProps)(Home);

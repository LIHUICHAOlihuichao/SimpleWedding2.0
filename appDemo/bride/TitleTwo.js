
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
    Alert
   
} from 'react-native';

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const tabs = [
    {text:'最热',id:0},
    {text:'最新',id:1},
]

const TitleTwo = ({ navigation,route}) => {
    const [selectTab,setSelectTab] = useState(0);

    let hot = (selectTab==0)?
    <ScrollView style={{backgroundColor:'#f2f3f3'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={{borderRadius:ptd(10),marginLeft:ptd(11),marginTop:ptd(10),backgroundColor:'white'}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei1.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>结了婚才知道婚鞋原来要这么选！</Text>

                </View>           
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginLeft:ptd(13),marginTop:ptd(10),backgroundColor:'white',borderRadius:ptd(10)}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei1.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>大婚倒计时查漏补缺</Text>
                </View>           
            </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={{borderRadius:ptd(10),marginLeft:ptd(11),marginTop:ptd(10),backgroundColor:'white'}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei1.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>结了婚才知道婚鞋原来要这么选！</Text>

                </View>           
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginLeft:ptd(13),marginTop:ptd(10),backgroundColor:'white',borderRadius:ptd(10)}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei1.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>大婚倒计时查漏补缺</Text>
                </View>           
            </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={{borderRadius:ptd(10),marginLeft:ptd(11),marginTop:ptd(10),backgroundColor:'white'}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei1.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>结了婚才知道婚鞋原来要这么选！</Text>

                </View>           
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginLeft:ptd(13),marginTop:ptd(10),backgroundColor:'white',borderRadius:ptd(10)}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei1.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>大婚倒计时查漏补缺</Text>
                </View>           
            </TouchableOpacity>
            </View>
        </ScrollView>
    
    :

    <ScrollView style={{backgroundColor:'#f2f3f3'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={{borderRadius:ptd(10),marginLeft:ptd(11),marginTop:ptd(10),backgroundColor:'white'}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei2.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>结了婚才知道婚鞋原来要这么选！</Text>

                </View>           
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginLeft:ptd(13),marginTop:ptd(10),backgroundColor:'white',borderRadius:ptd(10)}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei2.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>大婚倒计时查漏补缺</Text>
                </View>           
            </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={{borderRadius:ptd(10),marginLeft:ptd(11),marginTop:ptd(10),backgroundColor:'white'}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei2.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>结了婚才知道婚鞋原来要这么选！</Text>

                </View>           
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginLeft:ptd(13),marginTop:ptd(10),backgroundColor:'white',borderRadius:ptd(10)}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei2.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>大婚倒计时查漏补缺</Text>
                </View>           
            </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
                style={{borderRadius:ptd(10),marginLeft:ptd(11),marginTop:ptd(10),backgroundColor:'white'}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei2.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(16),marginTop:ptd(5),marginLeft:ptd(5)}}>结了婚才知道婚鞋原来要这么选！</Text>

                </View>           
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginLeft:ptd(13),marginTop:ptd(10),backgroundColor:'white',borderRadius:ptd(10)}}
                // onPress={
                //     () => {navigation.goBack();
                //     }
                // }
            >   
                <View style={{height:ptd(260),width:ptd(170),borderRadius:ptd(10)}}>     
                    <Image
                        source={require('../brideImage/bei2.jpg')}
                        style={{width:ptd(170),height:ptd(170),borderTopLeftRadius:ptd(10),borderTopRightRadius:ptd(10)}}
                    />
                    <Text style={{fontSize:ptd(14),marginTop:ptd(3),marginLeft:ptd(3)}}>大婚倒计时查漏补缺</Text>
                </View>           
            </TouchableOpacity>
        </View>
    </ScrollView>

    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={{height:ptd(180)}}>
                     <ImageBackground 
                        source={require('../brideImage/tit1.jpg')} 
                        style={{width: '100%', height:ptd(180)}}
                    >
                        <TouchableOpacity
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
                        </TouchableOpacity>
                        
                        <Text style={{color:'white',fontSize:ptd(18),marginLeft:ptd(5),marginTop:ptd(70)}}>#堵门游戏大全</Text>
                        <Text style={{color:'white',fontSize:ptd(12),marginLeft:ptd(5),marginTop:ptd(7)}}>最新堵门游戏汇总，快拿去整新郎</Text>
                    </ImageBackground>
                </View>

                <ScrollView
                    horizontal={true}
                >
                    {
                        tabs.map(tab=>(
                            <Text 
                                onPress={
                                    ()=>{
                                        setSelectTab(tab.id)
                                       
                                    }
                                }
                                key={tab.id}
                                style={[
                                    styles.tabs,
                                    {borderBottomWidth:selectTab==tab.id?3:0},
                                    {fontSize:selectTab==tab.id?20:18},
                                    {color:selectTab==tab.id?'black':'black'}
                                ]}
                            >{tab.text}</Text>
                        ))
                    }        
                </ScrollView >

                {hot}

            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    tabs:{
        marginTop:ptd(5),
        marginLeft: ptd(100),
        lineHeight:ptd(35),
        borderBottomColor:'#FF5353',
    },
    container:{
    flex:1,    // 属性:属性值
    backgroundColor:'white'   //背景色
  }
})
export default TitleTwo

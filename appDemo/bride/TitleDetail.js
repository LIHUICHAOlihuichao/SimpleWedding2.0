import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
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

const TitleDetail = ({ navigation,route}) => {
    return (
        // <View>
        //     <Text>11111111</Text>
        // </View>
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={{height:ptd(180)}}>
                     <ImageBackground 
                        source={require('../brideImage/tit0.png')} 
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
                        <Text style={{fontSize:ptd(16),textAlign:'center',lineHeight:ptd(25),color:'#f3073f'}}># 查漏补缺</Text>
                    </View>
                </View>
                        
            </View>
            <View style={{height:ptd(10),backgroundColor:'white',marginTop:ptd(10)}}></View>
        </ScrollView>
    )
}

export default TitleDetail

import 'react-native-gesture-handler';

import * as React from 'react';
// import React from 'react';
import { Component } from 'react'
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

//lijiamei
import Home from './bride/Home';

//yangyuwei
import Shouye from './jianli/Shouye';
import Sheying from './jianli/hunshasheying/Sheying';
import Sydianpu from './jianli/hunshasheying/Sydianpu';
import Sydetail from './jianli/hunshasheying/Sydetail';
import All from './jianli/hunshasheying/All';
import Cehua from './jianli/hunlicehua/Cehua';
import Lifu from './jianli/hunshalifu/Lifu';
import Lfdianpu from './jianli/hunshalifu/Lfdianpu';
import Lfdetail from './jianli/hunshalifu/Lfdetail';
import Chdianpu from './jianli/hunlicehua/Chdianpu';
import Chdetail from './jianli/hunlicehua/Chdetail';
import Shangjia from './jianli/allshop/Shangjia';
import Login1 from './jianli/login/Login1';
import Login2 from './jianli/login/Login2';
import Login3 from './jianli/login/Login3';
import Shengdi from './jianli/miyueshengdi/Shengdi';
import Location from './jianli/didian/Location';
import Goout from './jianli/hunshasheying/Goout';
import Alllocation from './jianli/hunshasheying/Alllocation';
//LiuXinTong
import './common/global';
import Mine from './Mine/Mine';
import Mymessage from './Mine/Mymessage';
import Change from './Mine/Change';
import Collect from './Mine/Collect';
import Publish from './Mine/Publish';
import Memorandum from './Mine/Memorandum';
import Bianqian from './Mine/Bianqian';
import Set from './Mine/Set';
import Calendar from './Mine/Calendar';
import Account from './Mine/Account';
import Output from './Mine/Output';
import Input from './Mine/Input';
import Game from './Mine/Game';
import JieqinContent from './Mine/JieqinContent';
import DumenContent from './Mine/DumenContent';
import JiehunContent from './Mine/JiehunContent';
import Seat from './Mine/Seat';
import Pledge from './Mine/Pledge';
import Plan from './Mine/Plan';
import Photo from './Mine/Photo';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff191a',
        labelStyle: {
          fontSize: 14
        }
      }}
    >
      <Tab.Screen
        options={{
          title: '首页',
          // tabBarIcon:({color})=><Text style={{color}}>首页</Text>  
          tabBarIcon: ({ color }) => <Icon name="envelope-open-o" size={20} style={{ color }} />
        }}
        name="shouye"
        component={Shouye}
        // name="Login2"
        // component={Login2}

      >
      </Tab.Screen>

      <Tab.Screen
        options={{
          title: '新娘圈',
          tabBarIcon: ({ color }) => <Icon name="comments-o" size={20} style={{ color }} />
        }}
        name="Home"
        component={Home}
      >
      </Tab.Screen>

      <Tab.Screen
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <Icon name="user-o" size={20} style={{ color }} />
        }}
        name="Mine"
        component={Mine}
        // name="Login3"
        // component={Login3}
      >
      </Tab.Screen>

    </Tab.Navigator>
  )
}
const RootStack = createStackNavigator();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator>
            {/* yangyuwei */}
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="login1"
              component={Login1}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="tabnav"
              component={TabNav}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="shouye"
              component={Shouye}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="sheying"
              component={Sheying}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="sydianpu"
              component={Sydianpu}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="sydetail"
              component={Sydetail}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="all"
              component={All}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="cehua"
              component={Cehua}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="lifu"
              component={Lifu}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="lfdianpu"
              component={Lfdianpu}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="lfdetail"
              component={Lfdetail}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="chdetail"
              component={Chdetail}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="chdianpu"
              component={Chdianpu}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="shangjia"
              component={Shangjia}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="shengdi"
              component={Shengdi}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="location"
              component={Location}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="goout"
              component={Goout}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="alllocation"
              component={Alllocation}
            />

            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="login2"
              component={Login2}
            />
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="login3"
              component={Login3}
            />

            {/* lijiamei */}
            <RootStack.Screen
              options={{
                headerShown: false
              }}
              name="Home"
              component={Home}
            />
            <RootStack.Screen options={{ headerShown: false }} name='Mine' component={Mine} />
            <RootStack.Screen options={{ headerShown: false }} name='Mymessage' component={Mymessage} />
            <RootStack.Screen options={{ headerShown: false }} name='Change' component={Change} />
            <RootStack.Screen options={{ headerShown: false }} name='Collect' component={Collect} />
            <RootStack.Screen options={{ headerShown: false }} name='Publish' component={Publish} />
            <RootStack.Screen options={{ headerShown: false }} name='Memorandum' component={Memorandum} />
            <RootStack.Screen options={{ headerShown: false }} name='Bianqian' component={Bianqian} />
            <RootStack.Screen options={{ headerShown: false }} name='Set' component={Set} />
            <RootStack.Screen options={{ headerShown: false }} name='Calendar' component={Calendar} />
            <RootStack.Screen options={{ headerShown: false }} name='Account' component={Account} />
            <RootStack.Screen options={{ headerShown: false }} name='Output' component={Output} />
            <RootStack.Screen options={{ headerShown: false }} name='Input' component={Input} />
            <RootStack.Screen options={{ headerShown: false }} name='Game' component={Game} />
            <RootStack.Screen options={{ headerShown: false }} name='JieqinContent' component={JieqinContent} />
            <RootStack.Screen options={{ headerShown: false }} name='DumenContent' component={DumenContent} />
            <RootStack.Screen options={{ headerShown: false }} name='JiehunContent' component={JiehunContent} />
            <RootStack.Screen options={{ headerShown: false }} name='Seat' component={Seat} />
            <RootStack.Screen options={{ headerShown: false }} name='Pledge' component={Pledge} />
            <RootStack.Screen options={{ headerShown: false }} name='Plan' component={Plan} />
            <RootStack.Screen options={{ headerShown: false }} name='Photo' component={Photo} />

          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}




export default App;


// import 'react-native-gesture-handler';

// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import { Component } from 'react'
// import { Provider } from 'react-redux';
// import store from './store/index'

// //lijiamei
// import Home from './bride/Home';

// //yangyuwei
// import Shouye from './jianli/Shouye';
// import Sheying from './jianli/hunshasheying/Sheying';
// import Sydianpu from './jianli/hunshasheying/Sydianpu';
// import Sydetail from './jianli/hunshasheying/Sydetail';
// import All from './jianli/hunshasheying/All';
// import Cehua from './jianli/hunlicehua/Cehua';
// import Lifu from './jianli/hunshalifu/Lifu';
// import Lfdianpu from './jianli/hunshalifu/Lfdianpu';
// import Lfdetail from './jianli/hunshalifu/Lfdetail';
// import Chdianpu from './jianli/hunlicehua/Chdianpu';
// import Chdetail from './jianli/hunlicehua/Chdetail';
// import Shangjia from './jianli/allshop/Shangjia';
// import Login1 from './jianli/login/Login1';
// import Login2 from './jianli/login/Login2';
// import Login3 from './jianli/login/Login3';
// import Shengdi from './jianli/miyueshengdi/Shengdi';
// import Location from './jianli/didian/Location';
// import Goout from './jianli/hunshasheying/Goout';
// import Alllocation from './jianli/hunshasheying/Alllocation';


// //LiuXinTong
// import './common/global';
// import Mine from './Mine/Mine';
// import Mymessage from './Mine/Mymessage';
// import Change from './Mine/Change';
// import Collect from './Mine/Collect';
// import Publish from './Mine/Publish';
// import Memorandum from './Mine/Memorandum';
// import Bianqian from './Mine/Bianqian';
// import Set from './Mine/Set';
// import Calendar from './Mine/Calendar';
// import Account from './Mine/Account';
// import Output from './Mine/Output';
// import Input from './Mine/Input';
// import Game from './Mine/Game';
// import JieqinContent from './Mine/JieqinContent';
// import DumenContent from './Mine/DumenContent';
// import JiehunContent from './Mine/JiehunContent';
// import Seat from './Mine/Seat';
// import Pledge from './Mine/Pledge';
// import Plan from './Mine/Plan';
// import Photo from './Mine/Photo';


// const Tab = createBottomTabNavigator();
// const TabNav = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: '#ff191a',
//         labelStyle: {
//           fontSize: 14
//         }
//       }}
//     >
//       <Tab.Screen
//         options={{
//           title: '首页',
//           // tabBarIcon:({color})=><Text style={{color}}>首页</Text>  
//           tabBarIcon: ({ color }) => <Icon name="envelope-open-o" size={20} style={{ color }} />
//         }}
//         name="shouye"
//         component={Shouye}
        
//       >
//       </Tab.Screen>

//       <Tab.Screen
//         options={{
//           title: '新娘圈',
//           tabBarIcon: ({ color }) => <Icon name="comments-o" size={20} style={{ color }} />
//         }}
//         name="Home"
//         component={Home}
//       >
//       </Tab.Screen>

//       <Tab.Screen
//         options={{
//           title: '我的',
//           tabBarIcon: ({ color }) => <Icon name="user-o" size={20} style={{ color }} />
//         }}
//         name="Mine"
//         component={Mine}
//       >
//       </Tab.Screen>

//     </Tab.Navigator>
//   )
// }
// const RootStack = createStackNavigator();


// function App() {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator>
//         {/* yangyuwei */}
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="login1"
//           component={Login1}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="tabnav"
//           component={TabNav}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="shouye"
//           component={Shouye}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="sheying"
//           component={Sheying}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="sydianpu"
//           component={Sydianpu}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="sydetail"
//           component={Sydetail}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="all"
//           component={All}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="cehua"
//           component={Cehua}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="lifu"
//           component={Lifu}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="lfdianpu"
//           component={Lfdianpu}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="lfdetail"
//           component={Lfdetail}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="chdetail"
//           component={Chdetail}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="chdianpu"
//           component={Chdianpu}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="shangjia"
//           component={Shangjia}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="shengdi"
//           component={Shengdi}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="location"
//           component={Location}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="goout"
//           component={Goout}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="alllocation"
//           component={Alllocation}
//         />

//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="login2"
//           component={Login2}
//         />
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="login3"
//           component={Login3}
//         />

//         {/* lijiamei */}
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="Home"
//           component={Home}
//         />

//         {/* LiuXinTong */}
//         <RootStack.Screen options={{ headerShown: false }} name='Mine' component={Mine} />
//             <RootStack.Screen options={{ headerShown: false }} name='Mymessage' component={Mymessage} />
//             <RootStack.Screen options={{ headerShown: false }} name='Change' component={Change} />
//             <RootStack.Screen options={{ headerShown: false }} name='Collect' component={Collect} />
//             <RootStack.Screen options={{ headerShown: false }} name='Publish' component={Publish} />
//             <RootStack.Screen options={{ headerShown: false }} name='Memorandum' component={Memorandum} />
//             <RootStack.Screen options={{ headerShown: false }} name='Bianqian' component={Bianqian} />
//             <RootStack.Screen options={{ headerShown: false }} name='Set' component={Set} />
//             <RootStack.Screen options={{ headerShown: false }} name='Calendar' component={Calendar} />
//             <RootStack.Screen options={{ headerShown: false }} name='Account' component={Account} />
//             <RootStack.Screen options={{ headerShown: false }} name='Output' component={Output} />
//             <RootStack.Screen options={{ headerShown: false }} name='Input' component={Input} />
//             <RootStack.Screen options={{ headerShown: false }} name='Game' component={Game} />
//             <RootStack.Screen options={{ headerShown: false }} name='JieqinContent' component={JieqinContent} />
//             <RootStack.Screen options={{ headerShown: false }} name='DumenContent' component={DumenContent} />
//             <RootStack.Screen options={{ headerShown: false }} name='JiehunContent' component={JiehunContent} />
//             <RootStack.Screen options={{ headerShown: false }} name='Seat' component={Seat} />
//             <RootStack.Screen options={{ headerShown: false }} name='Pledge' component={Pledge} />
//             <RootStack.Screen options={{ headerShown: false }} name='Plan' component={Plan} />
//             <RootStack.Screen options={{ headerShown: false }} name='Photo' component={Photo} />


//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }





// export default App;
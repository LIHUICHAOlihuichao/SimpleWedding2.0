// import 'react-native-gesture-handler';


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HomeYe from './zuoye/Home';
// import ShopYe from './zuoye/Shop';
// import VipYe from './zuoye/Vip';
// import CarYe from './zuoye/Car';
// import MyYe from './zuoye/My';
// import HomeCopy from './zuoye/Teacher/HomeCopy';

// import Detail1 from './zuoye/Teacher/Detail1';
// // import shou from './note/HomePage';
// import Shou from './note/Shou';
// import HomePage from './note/HomePage';
// import Test from './note/Test';
// import Greeting from './note/Greeting';

// // const ShopPage = () => {
// //   return (
// //     <View>
// //       <Text>Shop</Text>
// //     </View>
// //   );
// // }


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
//         // options={{
//         //   title: '全部',
//         //   // tabBarIcon:({color})=><Text style={{color}}>首页</Text>  
//         //   // tabBarIcon: ({ color }) => <Icon name="envelope-open-o" size={20} style={{ color }} />
//         // }}
//         name="shou"
//         component={Shou}
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
//         {/* <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="tabnav"
//           component={TabNav}
//         /> */}
//         {/* <RootStack.Screen name="deta" component={Detail1} /> */}
//         <RootStack.Screen 
//             options={{
//               headerShown: false
//             }}
//            name="home" 
//            component={Test}
//          />
         
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
//-------------------------------------------------------------------

import 'react-native-gesture-handler';


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeYe from './zuoye/Home';
import ShopYe from './zuoye/Shop';
import VipYe from './zuoye/Vip';
import CarYe from './zuoye/Car';
import MyYe from './zuoye/My';
import HomeCopy from './zuoye/Teacher/HomeCopy';

import Detail1 from './zuoye/Teacher/Detail1';
// import shou from './note/HomePage';
import Shou from './note/Shou';
import HomePage from './note/HomePage';
import Detail from './note/Detail';

// const ShopPage = () => {
//   return (
//     <View>
//       <Text>Shop</Text>
//     </View>
//   );
// }


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
        // options={{
        //   title: '全部',
        //   // tabBarIcon:({color})=><Text style={{color}}>首页</Text>  
        //   // tabBarIcon: ({ color }) => <Icon name="envelope-open-o" size={20} style={{ color }} />
        // }}
        name="shou"
        component={Shou}
      >
     
      </Tab.Screen>

    </Tab.Navigator>
  )
}
const RootStack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* <RootStack.Screen
          options={{
            headerShown: false
          }}
          name="tabnav"
          component={TabNav}
        /> */}
        {/* <RootStack.Screen name="deta" component={Detail1} /> */}
        <RootStack.Screen 
            options={{
              headerShown: false
            }}
           name="home" 
           component={HomePage}
         />
         <RootStack.Screen 
            options={{
              headerShown: false
            }}
           name="detail" 
           component={Detail} 
         />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;


//----------------------------------------------------------------------------------------------------------------------------------------

// import 'react-native-gesture-handler';


// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HomeYe from './zuoye/Home';
// import ShopYe from './zuoye/Shop';
// import VipYe from './zuoye/Vip';
// import CarYe from './zuoye/Car';
// import MyYe from './zuoye/My';
// import HomeCopy from './zuoye/Teacher/HomeCopy';

// import Detail1 from './zuoye/Teacher/Detail1';

// // const ShopPage = () => {
// //   return (
// //     <View>
// //       <Text>Shop</Text>
// //     </View>
// //   );
// // }


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
//       {/* <Tab.Screen 
//       options={{
//         title:'首页',
//         // tabBarIcon:({color})=><Text style={{color}}>首页</Text>  
//         tabBarIcon:({color})=><Icon name="envelope-open-o" size={20} style={{color}} />
//       }}
//       name="Home" 
//       component={HomeYe}
//     >
//     </Tab.Screen> */}
//       <Tab.Screen
//         options={{
//           title: '首页',
//           // tabBarIcon:({color})=><Text style={{color}}>首页</Text>  
//           tabBarIcon: ({ color }) => <Icon name="envelope-open-o" size={20} style={{ color }} />
//         }}
//         name="Home"
//         component={HomeCopy}
//       >
//       </Tab.Screen>
//       <Tab.Screen
//         options={{
//           title: '商城',
//           tabBarIcon: ({ color }) => <Icon name="shopping-bag" size={20} style={{ color }} />
//         }}
//         name="Shop"
//         component={ShopYe}
//       >
//       </Tab.Screen>

//       <Tab.Screen
//         options={{
//           title: '会员管理',
//           tabBarIcon: ({ color }) => <Icon name="street-view" size={20} style={{ color }} />
//         }}
//         name="Vip"
//         component={VipYe}
//       >
//       </Tab.Screen>

//       <Tab.Screen
//         options={{
//           title: '购物车',
//           tabBarIcon: ({ color }) => <Icon name="shopping-cart" size={20} style={{ color }} />
//         }}
//         name="Car"
//         component={CarYe}
//       >
//       </Tab.Screen>

//       <Tab.Screen
//         options={{
//           title: '我的',
//           tabBarIcon: ({ color }) => <Icon name="user-o" size={20} style={{ color }} />
//         }}
//         name="My"
//         component={MyYe}
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
//         <RootStack.Screen
//           options={{
//             headerShown: false
//           }}
//           name="tabnav"
//           component={TabNav}
//         />
//         <RootStack.Screen name="deta" component={Detail1} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------------------------------


// import 'react-native-gesture-handler';


// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from './pages/Home';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Shop from './pages/Shop';


// const ShopPage = () => {
//   return (
//     <View>
//       <Text>Shop</Text>
//     </View>
//   );
// }


// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor:'#ff191a',
//           labelStyle:{
//             fontSize:14
//           }
//         }}
//       >
//         <Tab.Screen 
//           options={{
//             title:'首页',
//             // tabBarIcon:({color})=><Text style={{color}}>首页</Text>
//             tabBarIcon:({color})=><Icon name="envelope-open-o" size={20} style={{color}} />
//           }}
//           name="Home" 
//           component={HomePage}
//         >
//         </Tab.Screen>
//         <Tab.Screen 
//           options={{
//             title:'商城',
//             tabBarIcon:({color})=><Icon name="shopping-bag" size={20} style={{color}} />
//           }}
//           name="Shop" 
//           component={Shop}
//         >
//         </Tab.Screen>

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;







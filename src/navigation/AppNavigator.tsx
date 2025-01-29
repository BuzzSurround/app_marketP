import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppIcon} from '../components/AppIcon';
import {tws} from '../utility/tailwind';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import Home, {postData} from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/EditProfile';
import {Colors} from '../constants/Colors';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import AppText from '../components/AppText';
import Search from '../screens/Search/Search';
import Notifications from '../screens/Notifications/Notifications';
import NewPost from '../screens/NewPost/NewPost';

export type TabParamList = {
  Home: {group: (typeof postData)[number]};
  Search: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type StackParamList = {
  BottomNavigation: undefined;
  Search: undefined;
  Notification: undefined;
  EditProfile: undefined;
  NewPost: undefined;
};

export type AppStackParamList<T extends keyof (TabParamList & StackParamList)> =
  NativeStackScreenProps<TabParamList & StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown:(props) => true,
        header(props) {
          return props.route.name == 'EditProfile' ? (
            <View
              style={tws(
                'flex-row items-center justify-between py-3 bg-cyan-100',
              )}>
              <View style={tws('ml-4 flex-row items-center')}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <AppIcon
                    type="MaterialCommunityIcons"
                    name="arrow-left"
                    size={20}
                  />
                </TouchableOpacity>
                <AppText style={tws('ml-6 font-bold')} size={16}>
                  Edit Profile
                </AppText>
              </View>
              <AppText style={tws('mr-4 font-bold')} size={16}>
                Save
              </AppText>
            </View>
          ) : null;
        },
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Notification" component={Notifications} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="NewPost" component={NewPost} />
    </Stack.Navigator>
  );
}

const BottomNavigation = () => {
  const route = useRoute();
  const routeName = getFocusedRouteNameFromRoute(route);
  console.log('>>>routeName', routeName);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tws('py-2 h-55px'),
        headerShown: routeName !== 'Profile' ? true : false,
        headerTitle: 'BuzzSurround',
        headerTintColor: Colors.primary,
        headerTitleStyle: [
          tws('text-lg font-bold font-serif'),
          // {fontFamily: 'JacquesFrancois-Regular', fontSize: 20},
        ],
        headerRight: () => (
          <View style={tws('justify-end flex-row items-center mr-16px')}>
            <TouchableOpacity onPress={() => {}}>
              <AppIcon
                type="MaterialIcons"
                name="near-me"
                size={30}
                color={Colors.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={tws('ml-16px')}>
              <AppIcon
                type="MaterialIcons"
                name="forum"
                size={30}
                color={Colors.secondary}
              />
            </TouchableOpacity>
          </View>
        ),
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              type="MaterialCommunityIcons"
              name="home-variant"
              size={30}
              color={focused ? Colors.primary : Colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              type="MaterialIcons"
              name="search"
              size={30}
              color={focused ? Colors.primary : Colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              type="MaterialIcons"
              name="notifications"
              size={30}
              color={focused ? Colors.primary : Colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              type="MaterialIcons"
              name="face"
              size={30}
              color={focused ? Colors.primary : Colors.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

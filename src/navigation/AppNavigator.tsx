import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppIcon} from '../components/AppIcon';
import {tws} from '../utility/tailwind';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import Home, {groupData} from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Colors} from '../constants/Colors';

export type TabParamList = {
  Groups: {group: (typeof groupData)[number]};
  Friends: undefined;
  Transactions: undefined;
  Profile: undefined;
};

export type StackParamList = {
  BottomNavigation: undefined;
  GroupDetails: undefined;
};

export type AppStackParamList<T extends keyof (TabParamList & StackParamList)> =
  NativeStackScreenProps<TabParamList & StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="GroupDetails" component={''} />
    </Stack.Navigator>
  );
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tws('py-2 h-55px'),
        headerShown: true,
        headerTitle: 'allSettld',
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
                name="search"
                size={30}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={tws('ml-16px')}>
              <AppIcon
                type="MaterialIcons"
                name="person-add"
                size={30}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
        ),
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Groups"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              type="MaterialIcons"
              name="group"
              size={30}
              color={focused ? Colors.primary : Colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={''}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              type="MaterialIcons"
              name="person"
              size={30}
              color={focused ? Colors.primary : Colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={''}
        options={{
          tabBarIcon: ({focused}) => (
            <AppIcon
              type="MaterialIcons"
              name="payments"
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

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {Colors} from '../../constants/Colors';
import {AppStackParamList} from '../../navigation/AppNavigator';

export const groupData = [
  {
    id: 1,
    name: 'Digit Buddies',
    image: '',
    emailId: 'test@test.com',
    members: [
      {
        name: 'John Doe',
        image: '',
      },
      {
        name: 'Camila Cobela',
        image: '',
      },
      {
        name: 'Victor Bhai',
        image: '',
      },
    ],
    transaction: [
      {
        id: 1,
        amount: 500,
        userName: 'John Doe',
      },
      {
        id: 2,
        amount: 2000,
        userName: 'Camila Cobela',
      },
      {
        id: 3,
        amount: 10000,
        userName: 'Victor Bhai',
      },
    ],
    lastUpdated: '11 Oct 2024',
  },
  {
    id: 1,
    name: 'No group',
    image: '',
    emailId: 'test@test.com',
    members: [
      {
        name: 'John Doe',
        image: '',
      },
      {
        name: 'Camila Cobela',
        image: '',
      },
      {
        name: 'Victor Bhai',
        image: '',
      },
    ],
    lastUpdated: '11 Oct 2024',
  },
];

type Props = AppStackParamList<'Groups'>;

export default function Home({navigation}: Props) {
  return (
    <View style={tws('flex-1 bg-white px-4 py-2')}>
      {/* <View style={tws('mt-2 border-b-2 border-[#e7eff1] pb-4')}></View> */}
      <View style={tws('')}>
        <View style={tws('mt-4')}>
          {/* <FlatList
            keyExtractor={(item, index) => `friends-tab-${index}`}
            data={groupData}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) =>{

            }}
          /> */}
        </View>
      </View>
    </View>
  );
}

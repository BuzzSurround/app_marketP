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
  const onGroupPress = (item: (typeof groupData)[number]) => {
    navigation.navigate('GroupDetails', {group: item});
  };

  const _renderGroupItem = (
    item: (typeof groupData)[number],
    index: number,
  ) => {
    return (
      <TouchableOpacity
        key={`friends-${index}`}
        onPress={() => onGroupPress(item)}
        style={tws(
          'flex flex-row justify-between border-b border-[#e7eff1] py-4',
        )}>
        <View style={tws('flex flex-row')}>
          <Image
            source={{
              uri: item.image ? item.image : 'https://i.pravatar.cc/300',
            }}
            // source={require('./assets/blue_profile.png')}
            style={tws('w-45px h-45px rounded-full')}
          />
          <View style={tws('ml-3 gap-1')}>
            <AppText bold size={15} color={Colors.primary}>
              {item.name}
            </AppText>
            {item.transaction?.map(val => (
              <View style={tws('flex flex-row items-center')}>
                <AppText bold size={12} color={Colors.secondary}>
                  {val.userName} {val.amount > 0 ? 'Owns you' : 'You owe'}
                </AppText>
                <AppText
                  bold
                  size={12}
                  color={val.amount >= 0 ? Colors.green : Colors.red}>
                  {` ₹ ${val.amount.toLocaleString('en-IN')}`}
                </AppText>
              </View>
            ))}
          </View>
        </View>
        <View style={tws('flex items-center')}>
          <AppText bold size={12} color={Colors.secondary}>
            {item.lastUpdated}
          </AppText>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={tws('flex-1 bg-white px-4 py-2')}>
      <View style={tws('mt-2 border-b-2 border-[#e7eff1] pb-4')}>
        <AppText bold size={15} color={Colors.secondary}>
          Summary
        </AppText>
        <AppText size={32} color={Colors.primary} style={tws('font-extrabold')}>
          ₹ 100,000
        </AppText>
      </View>
      <View style={tws('')}>
        <View style={tws('mt-4')}>
          <FlatList
            keyExtractor={(item, index) => `friends-tab-${index}`}
            data={groupData}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => _renderGroupItem(item, index)}
          />
        </View>
      </View>
    </View>
  );
}

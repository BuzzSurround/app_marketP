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
import BuzzItem from '../../components/BuzzItem';
import {postData} from '../../constants/constants';
import {AppIcon} from '../../components/AppIcon';

type Props = AppStackParamList<'Home'>;

export default function Home({navigation}: Props) {
  return (
    <View style={tws('flex-1 bg-white pb-2')}>
      {/* <View style={tws('mt-2 border-b-2 border-[#e7eff1] pb-4')}></View> */}
      <View style={tws('')}>
        <View style={tws('mt-4')}>
          <FlatList
            keyExtractor={(item, index) => `friends-tab-${index}`}
            data={postData}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => <BuzzItem item={item} />}
          />
        </View>
      </View>
      {/* New Post */}
      <TouchableOpacity
        style={[
          tws(
            'bg-blue-500 absolute w-10 h-10 rounded-full justify-center items-center bottom-6 right-4',
          ),
          {elevation: 4},
        ]}
        onPress={() => navigation.navigate('NewPost')}>
        <AppIcon name="add" type="MaterialIcons" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

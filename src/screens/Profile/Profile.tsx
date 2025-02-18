import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  VirtualizedList,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {AppIcon} from '../../components/AppIcon';
import {Colors} from '../../constants/Colors';
import {posts, userDetails, userStats} from './Contants';
import BuzzItem from '../../components/BuzzItem';

export default function Profile({navigation}: any) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const headerIconsContainer = tws(
    `backdrop-blur border-transparent bg-[${Colors.borderGray}] rounded-full p-[2px]`,
  );

  const handleScroll = (event: Object) => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={tws(`flex-1 bg-[${Colors.white}]`)}>
      <ScrollView onScroll={handleScroll} stickyHeaderHiddenOnScroll={true}>
        <View style={tws('')}>
          <View style={tws('w-full h-36 top-[-2] justify-center items-center')}>
            <Image
              style={tws('w-full h-36')}
              source={{
                uri: userDetails?.coverImage,
              }}
            />
          </View>
          <View
            style={tws(
              'absolute -bottom-6.5 w-full pl-2 flex-row justify-between',
            )}>
            <Image
              style={tws('w-18 h-18 rounded-full items-center')}
              source={{
                uri: userDetails?.profileImage,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
              style={tws(
                'justify-center h-8 top-12 right-4 border border-black px-2 rounded-md',
              )}>
              <AppText size={14} bold>
                {'Edit Profile'}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={tws('mt-10 ml-2 mr-2')}>
          <AppText size={18} bold>
            {userDetails?.fullName}
          </AppText>
          <AppText size={14} color={Colors.secondary}>
            {`@${userDetails?.userName}`}
          </AppText>

          <AppText size={14} style={tws('mt-2')}>
            {userDetails?.bio}
          </AppText>

          <AppText color={Colors.secondary} size={14} style={tws('mt-2')}>
            {`${userDetails?.VdcMunicipality}, ${userDetails?.Province}`}
          </AppText>

          <AppText size={14} bold style={tws('mt-2')}>
            {`${userDetails?.followers}`}{' '}
            <AppText size={14} color={Colors.secondary}>
              {'Followers'}
              {'   '}
            </AppText>
            <AppText size={14} bold>
              {'|'}
              {'   '}
            </AppText>
            <AppText size={14} bold>
              {userDetails.following}{' '}
            </AppText>
            <AppText size={14} color={Colors.secondary}>
              {'Following'}
            </AppText>
          </AppText>
        </View>
        <View style={tws('')}>
          <View style={tws('mt-4')}>
            <FlatList
              keyExtractor={(item, index) => `friends-tab-${index}`}
              data={posts}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => <BuzzItem item={item} />}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={[
          tws(`absolute top-0 w-full flex-row justify-between p-2`),
          {
            backgroundColor:
              scrollPosition <= 87 ? 'transparent' : Colors.transparent,
          },
        ]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={headerIconsContainer}>
          <AppIcon type={'MaterialIcons'} name={'arrow-back'} size={24} />
        </TouchableOpacity>
        <View style={tws('flex-row')}>
          <TouchableOpacity onPress={() => {}} style={headerIconsContainer}>
            <AppIcon type={'MaterialCommunityIcons'} name={'share'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[headerIconsContainer, tws('ml-3')]}>
            <AppIcon type={'MaterialIcons'} name={'search'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[headerIconsContainer, tws('ml-3')]}>
            <AppIcon type={'MaterialIcons'} name={'settings'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

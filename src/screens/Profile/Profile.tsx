import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {AppIcon} from '../../components/AppIcon';
import {Colors} from '../../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {posts, userDetails, userStats} from './Contants';

export default function Profile({navigation}: any) {
  const headerIconsContainer = tws(
    `backdrop-blur border-transparent bg-[${Colors.borderGray}] rounded-full p-[2px]`,
  );

  return (
    <ScrollView style={tws('flex-1 bg-white')}>
      <View style={tws('flex-1')}>
        <Image
          style={tws('w-full h-36')}
          source={{
            uri: userDetails?.coverImage,
          }}
        />
        <View style={tws('absolute w-full flex-row justify-between z-999 p-2')}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={headerIconsContainer}>
            <AppIcon type={'MaterialIcons'} name={'arrow-back'} size={24} />
          </TouchableOpacity>
          <View style={tws('flex-row')}>
            <TouchableOpacity onPress={() => {}} style={headerIconsContainer}>
              <AppIcon
                type={'MaterialCommunityIcons'}
                name={'share'}
                size={24}
              />
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
        <View style={tws(' pl-4 z-999 bg-cyan-200 ')}>
          <View
            style={tws(
              'absolute top-[-9] w-full pl-2  flex-row justify-between',
            )}>
            <Image
              style={tws(' w-18 h-18 rounded-full items-center')}
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
          <View style={tws('mt-10')}>
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
        </View>
        <View style={tws('mt-10 px-4')}>
          {posts.map((post, index) => {
            return (
              <View key={index} style={tws('mt-10 bg-green-100')}>
                <AppText size={24} bold>
                  {post.text}
                </AppText>
                <Image
                  style={tws('w-80% h-36')}
                  source={{
                    uri: post.image,
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

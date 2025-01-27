import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {AppIcon} from '../../components/AppIcon';
import {Colors} from '../../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {posts, user} from './Contants';

export default function Profile() {
  return (
    <ScrollView style={tws('flex-1 bg-white')}>
      <View>
        <Image
          style={tws('w-full h-36')}
          source={{
            uri: user?.coverImage,
          }}
        />
        <View style={tws(' pl-4 z-999 bg-cyan-200 ')}>
          <View
            style={tws(
              'absolute top-[-9] w-full pl-2  flex-row justify-between',
            )}>
            <Image
              style={tws(' w-18 h-18 bg-red-200 rounded-full items-center')}
              source={{
                uri: user?.profileImage,
              }}
            />
            <TouchableOpacity
              onPress={() => {}}
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
              {user?.fullName}
            </AppText>
            <AppText size={14} color={Colors.secondary}>
              {`@${user?.userName}`}
            </AppText>

            <AppText size={14} style={tws('mt-2')}>
              {user?.bio}
            </AppText>

            <AppText color={Colors.secondary} size={14} style={tws('mt-2')}>
              {`${user?.VdcMunicipality}, ${user?.Province}`}
            </AppText>

            <AppText size={14} bold style={tws('mt-2')}>
              {`${user?.followers}`}{' '}
              <AppText size={14} color={Colors.secondary}>
                {'Followers'}
                {'   '}
              </AppText>
              <AppText size={14} bold>
                {'|'}
                {'   '}
              </AppText>
              <AppText size={14} bold>
                {user.following}{' '}
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

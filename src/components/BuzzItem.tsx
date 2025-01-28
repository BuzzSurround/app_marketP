import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {tws} from '../utility/tailwind';
import AppText from './AppText';
import {AppIcon} from './AppIcon';
import moment from 'moment';
import {screenHeight, screenWidth} from '../utility/constants';

type Props = {
  item: any;
};

export default function BuzzItem({item}: Props) {
  let time = moment(item.date).format('h:mm a');
  return (
    <View style={tws('px-4 border-b border-b-gray-200 py-2 mt-1')}>
      {/* User Info */}
      <View style={tws('flex-row justify-between items-center')}>
        <View style={tws('flex-row items-center')}>
          {/* user avatar */}
          <View
            style={tws('bg-slate-500 w-6 h-6 rounded-full overflow-hidden')}>
            <Image
              source={{uri: item.profileImage}}
              style={tws('w-full h-full')}
            />
          </View>
          {/* user name */}
          <View style={tws('w-[40%] justify-center ml-2')}>
            <AppText bold numberOfLines={1}>
              {item.username}
            </AppText>
          </View>
        </View>
        {/* Time posted */}
        <View style={tws('flex-row items-center')}>
          <AppText color="gray">{time}</AppText>
          <View style={tws('w-1 h-1 rounded-full bg-gray-300 mx-2')} />
          <AppText color="green">{item.views}</AppText>
        </View>
      </View>
      {/* Post Content */}
      <View style={tws('mt-2 mb-2')}>
        <AppText size={14} bold numberOfLines={2}>
          {item.postTitle}
        </AppText>
        <AppText size={14} numberOfLines={3}>
          {item.content}
        </AppText>
      </View>
      {/* Post Image */}
      {item.postImage && (
        <View
          style={[
            {height: screenWidth},
            tws(
              'w-full h-[] border border-gray-200 rounded-lg my-2 overflow-hidden',
            ),
          ]}>
          <Image source={{uri: item.postImage}} style={tws('w-full h-full')} />
        </View>
      )}
      {/* Buttons */}
      <View style={tws('flex-row justify-between items-center my-2')}>
        <View
          style={tws(
            'flex-row items-center border border-gray-300 rounded-xl px-2 py-1',
          )}>
          {/* Upvote Button */}
          <TouchableOpacity
            style={tws(
              'flex-row items-center border-r border-r-gray-200 pr-2 mr-2',
            )}>
            <AppIcon
              type="MaterialCommunityIcons"
              name="arrow-up-thick"
              size={18}
              color="#000"
            />
            <Text style={tws('ml-1')}>{item.upvotes}</Text>
          </TouchableOpacity>

          {/* Downvote Button */}
          <TouchableOpacity style={tws('flex-row items-center')}>
            <AppIcon
              type="MaterialCommunityIcons"
              name="arrow-down-thick"
              size={18}
              color="#000"
            />
          </TouchableOpacity>
        </View>

        {/* Comments Button */}
        <TouchableOpacity
          style={tws(
            'flex-row items-center ml-4 border border-gray-300 rounded-xl px-2 py-1',
          )}>
          <AppIcon
            type="MaterialIcons"
            name="mode-comment"
            size={14}
            color="#000"
          />
          <Text style={tws('ml-2')}>{item.replies}</Text>
        </TouchableOpacity>

        {/* Menu Button */}
        <TouchableOpacity style={tws('ml-auto')}>
          <AppIcon
            type="MaterialIcons"
            name="more-horiz"
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

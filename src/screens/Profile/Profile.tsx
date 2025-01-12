import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {AppIcon} from '../../components/AppIcon';

export default function Profile() {
  return (
    <View style={tws('flex-1 bg-white px-4 py-4')}>
      <AppText size={18} bold>
        Profile
      </AppText>
      <View
        style={tws(
          'flex-row gap-4 mt-4 justify-between border-b border-b-gray-200 pt-2 pb-4',
        )}>
        <View style={tws('flex-row gap-4')}>
          <View style={tws('w-12 h-12 bg-red-200 rounded-full items-center')} />
          <View style={tws('')}>
            <AppText size={16}>Harsh</AppText>
            <AppText size={14} color="gray">
              9876543211
            </AppText>
          </View>
        </View>
        <TouchableOpacity>
          <AppIcon type="MaterialIcons" name="edit" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={tws('flex-row items-center gap-4 py-4 px-2')}>
          <AppIcon type="MaterialIcons" name="qr-code-scanner" size={30} />
          <AppText size={14}>Scan Code</AppText>
        </TouchableOpacity>
        <TouchableOpacity style={tws('flex-row items-center gap-4 py-3 px-2')}>
          <AppIcon type="MaterialIcons" name="report" size={30} />
          <AppText size={14}>Contact US</AppText>
        </TouchableOpacity>
        <TouchableOpacity style={tws('flex-row items-center gap-4 py-3 px-2')}>
          <AppIcon type="MaterialIcons" name="star" size={30} />
          <AppText size={14}>Rate Us</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {Colors} from '../../constants/Colors';
import {useUserStore} from '../../store/userStore';

export default function Settings() {
  const setUserState = useUserStore(state => state.setUserState);
  return (
    <View style={tws('flex-1 justify-end items-center')}>
      <TouchableOpacity
        style={tws('bottom-40')}
        onPress={() => {
          setUserState({token: null, userData: null});
        }}>
        <AppText size={14} bold color={Colors.red}>
          Log Out
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

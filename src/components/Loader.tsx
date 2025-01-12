import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoaderKit from 'react-native-loader-kit';
import AppText from './AppText';
import {tws} from '../utility/tailwind';

type Props = {
  loading: boolean;
};

export default function Loader({loading}: Props) {
  if (!loading) return null;
  return (
    <Modal visible={loading} transparent>
      <View style={tws('h-full justify-center items-center bg-[#000000cc]')}>
        <LoaderKit
          style={tws('w-[40px] h-[40px]')}
          name={'LineScaleParty'}
          color={'white'}
        />
        <AppText style={tws('text-white mt-3')}>Loading</AppText>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});

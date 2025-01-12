import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import {tws} from '../utility/tailwind';

type Props = {
  label?: string;
  type?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const $buttonStyle = tws('bg-[#db3f3f] rounded-[8px] py-2.5 items-center');

const $secondaryButtonStyle = tws(
  'bg-[#2fb15d] rounded-[8px] py-2.5 items-center',
);

export default function AppButton({
  style,
  label,
  type = 'primary',
  onPress,
}: Props) {
  if (type === 'secondary') {
    return (
      <TouchableOpacity
        style={[$secondaryButtonStyle, style]}
        onPress={onPress}>
        <AppText style={tws('text-white font-bold')}>{label}</AppText>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={[$buttonStyle, style]} onPress={onPress}>
      <AppText style={tws('text-white font-bold')}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

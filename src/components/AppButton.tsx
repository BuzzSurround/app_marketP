import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppText from './AppText';
import {tws} from '../utility/tailwind';
import {Colors} from '../constants/Colors';

type Props = {
  label?: string;
  type?: 'primary' | 'secondary';
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const $buttonStyle = tws(
  `bg-[${Colors.primary}] rounded-[8px] py-3 items-center`,
);

const $secondaryButtonStyle = tws(
  'border border-blue-400 rounded-[8px] py-3 items-center',
);

export default function AppButton({
  style,
  label,
  type = 'primary',
  labelStyle,
  onPress,
}: Props) {
  if (type === 'secondary') {
    return (
      <TouchableOpacity
        style={[$secondaryButtonStyle, style]}
        onPress={onPress}>
        <AppText
          style={[tws('text-blue-400 text-[14px] font-bold'), labelStyle]}>
          {label}
        </AppText>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={[$buttonStyle, style]} onPress={onPress}>
      <AppText style={[tws('text-white text-[14px]'), labelStyle]}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

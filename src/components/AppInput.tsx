import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {tws} from '../utility/tailwind';
import {Colors} from '../constants/Colors';

type Props = {
  style?: StyleProp<ViewStyle>;
  right?: React.ReactNode;
  marginHorizontal?: number;
} & TextInputProps;

const $inputStyle = 'border-[1px] rounded-[8px] flex-row items-center';

export default function AppInput({
  style,
  right,
  keyboardType,
  marginHorizontal,
  ...props
}: Props) {
  return (
    <View
      style={[
        tws($inputStyle),
        style,
        styles.container,
        {marginHorizontal: marginHorizontal},
      ]}>
      <TextInput
        {...props}
        style={styles.input}
        textAlignVertical={props.multiline ? 'top' : 'center'}
        placeholderTextColor={Colors.gray}
        keyboardType={keyboardType}
      />
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // width: 270,
    flex: 1,
    // marginVertical: 4,
    paddingHorizontal: 12,
    // marginVertical: 2,
    paddingVertical: 8,
    fontSize: 14,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginVertical: 8,
    // backgroundColor: 'lightblue',
    borderColor: Colors.gray,
  },
});

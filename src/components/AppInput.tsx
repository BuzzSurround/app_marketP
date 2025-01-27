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
} & TextInputProps;

const $inputStyle = `border-[1px] border-[${Colors.borderGray}] rounded-[8px] flex-row items-center py-1 px-1`;

export default function AppInput({style, right, ...props}: Props) {
  return (
    <View style={[tws($inputStyle), style]}>
      <TextInput
        {...props}
        style={styles.input}
        textAlignVertical={props.multiline ? 'top' : 'center'}
      />
      {right}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // width: '100%',
    flex: 1,
    paddingHorizontal: 12,
    // marginVertical: 2,
    paddingVertical: 12,
    fontSize: 14,
  },
});

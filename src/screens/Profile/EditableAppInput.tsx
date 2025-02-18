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
import {tws} from '../../utility/tailwind';
import {Colors} from '../../constants/Colors';
import AppText from '../../components/AppText';

type Props = {
  style?: StyleProp<ViewStyle>;
  right?: React.ReactNode;
  editable?: boolean;
  label?: string;
  value?: string;
} & TextInputProps;

const $inputStyle = `border-b border-[${Colors.borderGray}] flex-row items-center`;

export default function EditableAppInput({
  style,
  right,
  editable = true,
  label,
  value,
  ...props
}: Props) {
  return (
    <View style={tws('mb-4')}>
      {!!label && (
        <AppText size={13} style={tws(`text-[${Colors.secondary}]`)}>
          {label}
        </AppText>
      )}
      <View style={[tws($inputStyle), style]}>
        <TextInput
          selectTextOnFocus={true}
          editable
          value={value}
          {...props}
          style={styles.input}
          textAlignVertical={props.multiline ? 'top' : 'center'}
        />
        {right}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // width: '100%',
    flex: 1,
    paddingRight: 12,
    letterSpacing: 1,
    // marginVertical: 2,
    paddingVertical: 8,
    fontSize: 14,
  },
});

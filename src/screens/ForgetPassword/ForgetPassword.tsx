import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {$container} from '../../styles/GlobalStyle';
import AppText from '../../components/AppText';
import {tws} from '../../utility/tailwind';
import {Controller, useForm} from 'react-hook-form';
import AppInput from '../../components/AppInput';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import AppButton from '../../components/AppButton';
import {AuthStackScreenProps} from '../../navigation/AuthNavigator';

type Props = AuthStackScreenProps<'ForgetPassword'>;

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
});

export default function ForgetPassword({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <View style={$container}>
      <View style={tws('px-4 py-8 h-[25%] justify-center items-center')}>
        <Text
          style={tws(
            'text-3xl font-bold text-green-600 border-b border-green-600',
          )}>
          BuzzSurround
        </Text>
      </View>
      <View style={tws('pt-[20%] px-4')}>
        <AppText size={14} weight="bold">
          Enter Registerd Email
        </AppText>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Email"
              onBlur={onBlur}
              onChangeText={onChange}
              style={tws('mt-4')}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={tws('text-red-500 text-sm ml-2 mt-2')}>
            {errors.email.message}
          </Text>
        )}
        <AppButton
          label="Submit"
          style={tws('mt-4')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={tws('flex-row items-center mt-4 justify-center')}>
        <AppText style={tws('text-xs')}>Don't have an account?</AppText>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <AppText style={tws('text-blue-600 ml-1')}>Sign Up</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

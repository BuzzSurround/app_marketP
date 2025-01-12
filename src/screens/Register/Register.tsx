import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';
import {$container} from '../../styles/GlobalStyle';
import {tws} from '../../utility/tailwind';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AuthStackScreenProps} from '../../navigation/AuthNavigator';
import {useUserStore} from '../../store/userStore';
import Toast from 'react-native-toast-message';
import {registerUser} from '../../api/Login/LoginApi';

type Props = AuthStackScreenProps<'Register'>;

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  mobile: yup.string().required('Mobile is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export type RegisterFormData = yup.InferType<typeof schema>;

export default function Register({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const setUserState = useUserStore(state => state.setUserState);

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    setUserState({loading: true});
    try {
      const result = await registerUser(data);
      if (result) {
        Toast.show({
          text1: 'Registered Successfully! Login with your account',
        });
        navigation.navigate('Login');
      }
    } catch (err: any) {
      console.log(err);
      Toast.show({text1: err.message, type: 'error'});
    }
    setUserState({loading: false});
  };

  return (
    <View style={$container}>
      <View style={tws('px-4 py-8 bg-green-600 rounded-br-3xl')}>
        <AppText style={tws('text-white text-xl font-bold')}>
          Create New account
        </AppText>
        <AppText style={tws('text-white text-sm')}>
          Enter your details to get started
        </AppText>
      </View>
      <View style={tws('pt-[20%] px-4')}>
        <AppText size={16} weight="bold">
          Register
        </AppText>
      </View>
      <View style={tws('pt-5 px-4')}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.name.message}
          </AppText>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Mobile"
              onBlur={onBlur}
              style={tws('mt-4')}
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="mobile"
        />
        {errors.mobile && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.mobile.message}
          </AppText>
        )}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Email"
              onBlur={onBlur}
              style={tws('mt-4')}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.email.message}
          </AppText>
        )}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Password"
              style={tws('mt-4')}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.password.message}
          </AppText>
        )}

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Confirm Password"
              onBlur={onBlur}
              style={tws('mt-4')}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.confirmPassword.message}
          </AppText>
        )}
        <AppButton
          onPress={handleSubmit(onSubmit)}
          label="Create new account"
          style={tws('mt-4')}
        />
        <View style={tws('flex-row items-center mt-4 justify-center')}>
          <AppText style={tws('text-xs')}>Already have an account?</AppText>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <AppText style={tws('text-blue-600 ml-1')}>Login</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

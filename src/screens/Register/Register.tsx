import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {registerUser} from '../../api/Auth/LoginApi';
import {Colors} from '../../constants/Colors';

type Props = AuthStackScreenProps<'Register'>;

const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  phone_number: yup.string().required('Phone number is required'),
  age: yup.number().required('Age is required').min(18).max(100),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  gender: yup.string().required('Gender is required'),
});

export type RegisterFormData = yup.InferType<typeof schema>;

export default function Register({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const setUserState = useUserStore(state => state.setUserState);

  const onSubmit = async (data: RegisterFormData) => {
    navigation.navigate('Location', {registerData: data});
  };
  return (
    <ScrollView
      style={$container}
      contentContainerStyle={tws('pb-[40%]')}
      showsVerticalScrollIndicator={false}>
      <View style={tws('px-4 py-8 h-[25%] justify-center items-center')}>
        <Text
          style={tws(
            'text-3xl font-bold text-green-600 border-b border-green-600',
          )}>
          BuzzSurround
        </Text>
      </View>
      <View style={tws('px-4 gap-1')}>
        <AppText size={22} weight="bold">
          Create Account
        </AppText>
        <AppText size={14}>Sign up to get started</AppText>
      </View>
      <View style={tws('pt-5 px-4')}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Full Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="fullName"
        />
        {errors.fullName && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.fullName.message}
          </AppText>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Mobile Number"
              onBlur={onBlur}
              style={tws('mt-4')}
              keyboardType="number-pad"
              onChangeText={onChange}
              value={value}
              maxLength={10}
            />
          )}
          name="phone_number"
        />
        {errors.phone_number && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.phone_number.message}
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
        <Controller
          name="gender"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={tws('flex-row justify-between')}>
              {['Male', 'Female', 'Other'].map((item, index) => (
                <AppButton
                  key={index}
                  type={value === item ? 'primary' : 'secondary'}
                  onPress={() => onChange(item)}
                  label={item}
                  labelStyle={{
                    color: value === item ? Colors.white : Colors.gray,
                  }}
                  style={[
                    tws('mt-4 w-[30%] border-gray-400'),
                    {
                      backgroundColor:
                        value === item ? '#938dfc' : Colors.white,
                    },
                  ]}
                />
              ))}
            </View>
          )}
        />
        {errors.gender && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.gender.message}
          </AppText>
        )}
        <Controller
          name="age"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Age"
              onBlur={onBlur}
              style={tws('mt-4')}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={onChange}
              value={value?.toString()}
            />
          )}
        />
        {errors.age && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.age.message}
          </AppText>
        )}
        <AppButton
          onPress={handleSubmit(onSubmit)}
          label="Create new account"
          style={tws('mt-8')}
        />

        <View style={tws('mt-6 justify-center')}>
          <AppText style={tws('self-center')}>Already have an account?</AppText>
          <AppButton
            onPress={() => navigation.navigate('Login')}
            label="Login"
            type="secondary"
            style={tws('mt-4')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

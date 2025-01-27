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
import {registerUser, sendOtp} from '../../api/Login/LoginApi';
import {Colors} from '../../constants/Colors';

type Props = AuthStackScreenProps<'Location'>;

const schema = yup.object().shape({
  state: yup.string().required('Location is required'),
  city: yup.string().required('City is required'),
  district: yup.string().required('District is required'),
});

export type LocationDetailsFormData = yup.InferType<typeof schema>;

export default function LocationDetails({navigation, route}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const registerData = route.params.registerData;
  const setUserState = useUserStore(state => state.setUserState);

  const onSubmit = async (data: LocationDetailsFormData) => {
    setUserState({loading: true});
    try {
      const result = await registerUser({...data, ...registerData});
      if (result) {
        ToastAndroid.show('Registration Success', ToastAndroid.SHORT);
        const result = await sendOtp(registerData.email);
        if (result?.status === 'success') {
          navigation.navigate('OtpVerification', {email: registerData.email});
        }
      }
    } catch (err: any) {
      console.log(err);
      ToastAndroid.show(err.message, ToastAndroid.SHORT);
    }
    setUserState({loading: false});
  };
  return (
    <ScrollView
      style={$container}
      contentContainerStyle={tws('pb-[30%]')}
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
          Finish Account Setup
        </AppText>
        <AppText size={14}>Enter your Location</AppText>
      </View>
      <View style={tws('pt-5 px-4')}>
        <Controller
          name="city"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter City"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.city && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.city.message}
          </AppText>
        )}
        <Controller
          name="district"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter District"
              onBlur={onBlur}
              style={tws('mt-4')}
              onChangeText={onChange}
              value={value}
              maxLength={10}
            />
          )}
        />
        {errors.district && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.district.message}
          </AppText>
        )}

        <Controller
          name="state"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter State"
              onBlur={onBlur}
              style={tws('mt-4')}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.district && (
          <AppText style={tws('text-red-600 mt-2 ml-2 text-sm')}>
            {errors.district.message}
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

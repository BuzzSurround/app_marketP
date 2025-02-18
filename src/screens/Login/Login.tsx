import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw, {tws} from '../../utility/tailwind';
import {$container} from '../../styles/GlobalStyle';
import AppText from '../../components/AppText';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import {AuthStackScreenProps} from '../../navigation/AuthNavigator';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {AppIcon} from '../../components/AppIcon';
import {useUserStore} from '../../store/userStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserData, loginUser, sendOtp} from '../../api/Auth/LoginApi';
import {Colors} from '../../constants/Colors';

interface Props extends AuthStackScreenProps<'Login'> {}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export default function Login({navigation}: Props) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema)});
  const setUserState = useUserStore(state => state.setUserState);

  const onSubmit = async (data: any) => {
    setUserState({loading: true});
    try {
      const result = await loginUser(data);
      if (result.status === 'success') {
        AsyncStorage.setItem('token', result?.data?.access_token || '');
        const userData = await getUserData();
        if (userData.data) {
          setUserState({
            userData: userData.data,
            token: result?.data?.access_token,
          });
          ToastAndroid.show('Login Success', ToastAndroid.SHORT);
          AsyncStorage.setItem(
            'refreshToken',
            result?.data?.refresh_token || '',
          );
        }
      } else if (result.message === 'Account not verified') {
        const result = await sendOtp(data.email);
        if (result?.status === 'success') {
          navigation.navigate('OtpVerification', {email: data.email});
        }
      } else {
        ToastAndroid.show(result.message || '', ToastAndroid.SHORT);
      }
    } catch (err: any) {
      console.log(err);
      ToastAndroid.show(err.message, ToastAndroid.SHORT);
    }
    setUserState({loading: false});
  };

  const onGoogleLogin = async () => {
    // setUserState({isLoading: true});
    // try {
    //   GoogleSignin.configure({
    //     webClientId:
    //       '1047818849508-eacmhp6b78ifu5book035gi39njk0bbj.apps.googleusercontent.com',
    //   });
    //   const signInResult = await GoogleSignin.signIn();
    //   const idToken = signInResult.data?.idToken;
    //   const googleCredentials = auth.GoogleAuthProvider.credential(
    //     idToken || '',
    //   );
    //   const userCredentials = await auth().signInWithCredential(
    //     googleCredentials,
    //   );
    //   const firebaseIdToken = await userCredentials.user.getIdToken();
    //   if (firebaseIdToken) {
    //     setUserState({token: firebaseIdToken});
    //     const result = await getUserData();
    //     if (result.data) {
    //       await AsyncStorage.setItem('token', firebaseIdToken);
    //       setUserState({userData: result.data});
    //       ToastAndroid.show('Login Success', ToastAndroid.SHORT);
    //     }
    //   }
    // } catch (err: any) {
    //   console.log(err);
    //   ToastAndroid.show(err.message, ToastAndroid.SHORT);
    // }
    // setUserState({isLoading: false});
  };
  return (
    <ScrollView style={$container}>
      <View style={tws('mx-4 my-8 h-[25%] justify-center items-center')}>
        <AppText size={30} weight="bold" color={Colors.primary}>
          BuzzSurround
        </AppText>
      </View>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={tws('px-4  gap-1')}>
        <AppText size={22} weight="bold">
          Welcome Back!
        </AppText>
        <AppText size={14}>Login to your account</AppText>
      </View>
      <View style={tws('pt-5 px-4')}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Email"
              onBlur={onBlur}
              onChangeText={onChange}
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

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <AppInput
              placeholder="Enter Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={tws('mt-4')}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={tws('text-red-500 text-sm ml-2 mt-2')}>
            {errors.password.message}
          </Text>
        )}

        <AppButton
          onPress={handleSubmit(onSubmit)}
          label="Login"
          style={tws('mt-4')}
        />
        <TouchableOpacity
          style={tws('self-end mt-4')}
          onPress={() => navigation.navigate('ForgetPassword')}>
          <AppText style={tws('text-xs text-blue-400 font-bold')}>
            Forgot Password?
          </AppText>
        </TouchableOpacity>
        <View style={tws(' mt-4 justify-center')}>
          <AppText style={tws('self-center')}>Don't have an account?</AppText>
          <AppButton
            onPress={() => navigation.navigate('Register')}
            label="Register Now"
            type="secondary"
            style={tws('mt-4')}
          />
        </View>
        <View style={tws('mt-4 pt-2 border-t border-t-gray-200')}>
          <TouchableOpacity
            onPress={onGoogleLogin}
            style={tws(
              'flex-row px-4 bg-blue-400 rounded-lg mt-4 items-center justify-center py-3 gap-4',
            )}>
            <AppIcon
              type="MaterialCommunityIcons"
              name="google"
              size={20}
              color="white"
            />
            <AppText style={tws('text-[14px] text-white')}>
              Sign In With Google
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

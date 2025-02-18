import {StatusBar, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect} from 'react';
import {AuthStackScreenProps} from '../../navigation/AuthNavigator';
import {$container} from '../../styles/GlobalStyle';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {OtpInput} from 'react-native-otp-entry';
import AppButton from '../../components/AppButton';
import {useUserStore} from '../../store/userStore';
import {verifyOtp} from '../../api/Auth/LoginApi';

type Props = AuthStackScreenProps<'OtpVerification'>;

export default function OtpVerification({route, navigation}: Props) {
  const {email} = route.params;
  const [otp, setOtp] = React.useState<string>('');
  const setUserState = useUserStore(state => state.setUserState);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      ToastAndroid.show('Please enter a valid OTP', ToastAndroid.SHORT);
      return;
    }
    setUserState({loading: true});
    try {
      const result = await verifyOtp(email, otp);
      if (result?.status === 'success') {
        ToastAndroid.show('Verification Success', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } else {
        ToastAndroid.show(result?.message || '', ToastAndroid.SHORT);
      }
    } catch (err: any) {
      console.log(err);
      ToastAndroid.show(err.message, ToastAndroid.SHORT);
    }
    setUserState({loading: false});
  };

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
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={tws('px-4 gap-1')}>
        <AppText size={22} weight="bold">
          OTP Sent!
        </AppText>
        <AppText size={14}>
          Kindly enter the OTP that has been sent to{' '}
          <AppText bold size={14}>
            {email}
          </AppText>
        </AppText>
      </View>
      <View style={tws('px-4 mt-8')}>
        <OtpInput numberOfDigits={6} onTextChange={text => setOtp(text)} />
      </View>
      <View style={tws('px-4 mt-8')}>
        <AppButton label="Verify" onPress={handleVerify} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

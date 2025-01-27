import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register, {RegisterFormData} from '../screens/Register/Register';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import LocationDetails from '../screens/Register/Location';
import OtpVerification from '../screens/Register/OtpVerification';

type StackParamList = {
  Login: undefined;
  Register: undefined;
  ForgetPassword: undefined;
  Location: {registerData: RegisterFormData};
  OtpVerification: {email: string};
};

export type AuthStackScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="Location" component={LocationDetails} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

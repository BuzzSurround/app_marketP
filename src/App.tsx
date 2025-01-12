import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Loader from './components/Loader';
import Toast from 'react-native-toast-message';

export default function App() {
  const loading = false;
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        {false ? <AppNavigator /> : <AuthNavigator />}
        <Loader loading={loading} />
      </GestureHandlerRootView>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Loader from './components/Loader';
import Toast from 'react-native-toast-message';
import {useUserStore} from './store/userStore';

export default function App() {
  const loading = useUserStore(state => state.loading);
  const token = useUserStore(state => state.token);
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        {token ? <AppNavigator /> : <AuthNavigator />}
        <Loader loading={loading} />
      </GestureHandlerRootView>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

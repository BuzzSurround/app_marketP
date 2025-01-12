import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLogo}>
        <Text style={styles.logoStyles}>BuzzSurround</Text>
        {/* <Image
          style={styles.headerLogo}
          source={require('../../assets/images/BuzzSurround.png')}
          resizeMode="contain"
        /> */}
      </View>
      <Text style={{fontFamily: 'Muli-Regular', fontSize: 24}}>Login with</Text>
      {/* <Text>Login</Text> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLogo: {
    width: 300,
    height: 54,
  },
  logoStyles: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.primary,
    fontFamily: 'LilitaOne-Regular',
    textAlign: 'center',
  },
});

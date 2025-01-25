import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import AppInput from '../../components/AppInput';
import AppText from '../../components/AppText';
import {AppIcon} from '../../components/AppIcon';
import {Icon} from '../../components/Icon';

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
      <Text style={{fontFamily: 'Muli-Regular', fontSize: 22}}>Login with</Text>
      {/* <View> */}
      <AppInput
        placeholder="Enter your email ID"
        keyboardType="email-address"
        marginHorizontal={32}
        style={{marginTop: 18}}
      />
      <AppInput
        placeholder="Password"
        marginHorizontal={32}
        style={{marginTop: 18}}
      />
      <AppText color={Colors.primary} style={{marginTop: 16}}>
        Forgot Password?
      </AppText>
      <View style={{flexDirection: 'row', marginTop: 32}}>
        <TouchableOpacity style={{}} onPress={() => {}}>
          <Icon
            type="MaterialCommunityIcons"
            name="google"
            size={30}
            // color={Colors.primary}
          />
        </TouchableOpacity>
        <Icon
          type="MaterialCommunityIcons"
          name="home"
          size={30}
          color={Colors.primary}
        />
      </View>
      {/* </View> */}
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

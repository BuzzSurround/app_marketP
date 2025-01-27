import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {tws} from '../../utility/tailwind';
import EditableAppInput from './EditableAppInput';
import {userDetails} from './Contants';
import {AppIcon} from '../../components/AppIcon';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function EditProfile() {
  return (
    <ScrollView style={tws('flex-1 bg-white')}>
      <View>
        <TouchableOpacity
          onPress={() => {}}
          style={tws('w-full h-36 justify-center items-center')}>
          <Image
            blurRadius={4}
            style={tws('w-full h-36')}
            source={{
              uri: userDetails?.coverImage,
            }}
          />
          <View style={tws('absolute w-9 flex-wrap z-999')}>
            <AppIcon
              type={'MaterialCommunityIcons'}
              name={'camera-plus-outline'}
              size={32}
              color={Colors.white}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={tws('flex-1 z-999')} onPress={() => {}}>
          <View
            style={tws(' absolute top-[-9] pl-2 items-center justify-center')}>
            <Image
              blurRadius={4}
              style={tws(' w-18 h-18 rounded-full items-center')}
              source={{
                uri: userDetails?.profileImage,
              }}
            />
            <View style={tws('absolute w-8 flex-wrap z-999')}>
              <AppIcon
                type={'MaterialCommunityIcons'}
                name={'camera-plus-outline'}
                size={32}
                color={Colors.white}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tws('flex-1 items-center mt-16')}>
        {/* {Object.keys(userDetails).map((item, index) => {
          console.log(index, item);
          return ( */}
        <EditableAppInput
          label={'Name'}
          style={tws('w-96%')}
          value={'Dipankar Giri'}
        />

        <EditableAppInput
          label="Bio"
          style={tws('w-96%')}
          value={'Dummy bio'}
        />

        <EditableAppInput
          label="Website"
          style={tws('w-96%')}
          value={'https://www.buzzsurround.com'}
        />

        <EditableAppInput
          label="Date of birth"
          style={tws('w-96%')}
          value={'01/01/2001'}
        />

        <EditableAppInput
          style={tws('w-96%')}
          label="Email"
          value={'6gUW2@example.com'}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

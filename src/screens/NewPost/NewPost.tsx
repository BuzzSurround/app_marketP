import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {$container} from '../../styles/GlobalStyle';
import {AppIcon} from '../../components/AppIcon';
import {tws} from '../../utility/tailwind';
import AppButton from '../../components/AppButton';
import {screenHeight} from '../../utility/constants';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {Colors} from '../../constants/Colors';

type Props = AppStackParamList<'NewPost'>;

export default function NewPost({navigation}: Props) {
  return (
    <View style={$container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {/* Header */}
      <View style={tws('flex-row justify-between mx-4')}>
        <View style={tws('w-[20%]')}>
          <TouchableOpacity
            style={tws('py-2')}
            onPress={() => navigation.goBack()}>
            <AppIcon type="MaterialIcons" name="close" size={26} />
          </TouchableOpacity>
        </View>
        <View style={tws('')}>
          <AppButton
            type="secondary"
            label="Post"
            style={tws(`py-1 my-2 px-4 border-[${Colors.primary}]`)}
            labelStyle={tws(`text-[${Colors.primary}]`)}
          />
        </View>
      </View>
      {/* Text Area */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tws('mx-4 mt-4 flex-row gap-2 w-full')}>
          <View style={tws('w-10 h-10 bg-gray-100 rounded-full')}></View>
          <TextInput
            multiline
            placeholder="Whats Happening?"
            style={[
              tws('w-[78%]'),
              {height: screenHeight * 0.6, textAlignVertical: 'top'},
            ]}
            numberOfLines={10}
          />
        </View>
      </ScrollView>
      <View
        style={tws(
          'px-4 pt-2 mb-4 flex-row items-center border-t border-t-gray-300',
        )}>
        <View style={tws('flex-row gap-6')}>
          <TouchableOpacity style={tws('')}>
            <AppIcon
              type="MaterialIcons"
              name="add-photo-alternate"
              size={26}
              color={Colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={tws('')}>
            <AppIcon
              type="MaterialIcons"
              name="location-on"
              size={26}
              color={Colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

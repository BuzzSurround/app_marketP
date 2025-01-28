import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {tws} from '../../utility/tailwind';
import AppText from '../../components/AppText';
import {Colors} from '../../constants/Colors';
import {AppStackParamList} from '../../navigation/AppNavigator';
import BuzzItem from '../../components/BuzzItem';

export const postData = [
  {
    id: 1,
    username: 'Pankaj',
    profileImage:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    postImage:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Caption 1',
    upvotes: 10,
    downvotes: 5,
    replies: 2,
    date: '2022-01-01',
    views: '48.8k',
    postTitle: 'Very bad interview experience with EY for Java developer role',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus dapibus commodo. Suspendisse molestie, sapien non luctus molestie, magna tortor tempus orci, et vehicula magna justo et ipsum. Phasellus a lobortis tellus, quis posuere lorem. Vestibulum neque turpis, vehicula eget sem non, rhoncus ornare ex.',
  },
  {
    id: 2,
    username: 'Alice',
    profileImage:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    // postImage:
    //   'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Caption 2',
    upvotes: 25,
    downvotes: 3,
    replies: 10,
    date: '2022-02-15',
    views: '12.3k',
    postTitle: 'How to prepare for a technical interview in 2023',
    content:
      'Curabitur eget nisl at nunc tincidunt tincidunt. Integer nec nisi nec nisi tincidunt tincidunt. Nulla facilisi. Sed euismod, nisl nec tincidunt tincidunt, nunc nisl tincidunt nisl, nec tincidunt nisl nisl nec nisl.',
  },
  {
    id: 3,
    username: 'Bob',
    profileImage:
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    // postImage:
    //   'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Caption 3',
    upvotes: 50,
    downvotes: 2,
    replies: 15,
    date: '2022-03-20',
    views: '78.5k',
    postTitle: 'My journey to becoming a full-stack developer',
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec euismod, nisl nec tincidunt tincidunt, nunc nisl tincidunt nisl, nec tincidunt nisl nisl nec nisl. Sed euismod, nisl nec tincidunt tincidunt, nunc nisl tincidunt nisl, nec tincidunt nisl nisl nec nisl.',
  },
  {
    id: 4,
    username: 'Charlie',
    profileImage:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    postImage:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    caption: 'Caption 4',
    upvotes: 100,
    downvotes: 10,
    replies: 30,
    date: '2022-04-25',
    views: '102.4k',
    postTitle: 'Top 10 programming languages to learn in 2023',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec euismod, nisl nec tincidunt tincidunt, nunc nisl tincidunt nisl, nec tincidunt nisl nisl nec nisl. Sed euismod, nisl nec tincidunt tincidunt, nunc nisl tincidunt nisl, nec tincidunt nisl nisl nec nisl.',
  },
];

type Props = AppStackParamList<'Home'>;

export default function Home({navigation}: Props) {
  return (
    <View style={tws('flex-1 bg-white pb-2')}>
      {/* <View style={tws('mt-2 border-b-2 border-[#e7eff1] pb-4')}></View> */}
      <View style={tws('')}>
        <View style={tws('mt-4')}>
          <FlatList
            keyExtractor={(item, index) => `friends-tab-${index}`}
            data={postData}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => <BuzzItem item={item} />}
          />
        </View>
      </View>
    </View>
  );
}

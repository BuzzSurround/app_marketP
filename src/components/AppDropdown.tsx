import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {Icon} from './Icon';
import AppText from './AppText';
import Colors from '../utils/colors';

interface ItemSelectorModalProps {
  onClose?: (item: any | null) => void;
  items: any[];
  dataKey: string;
  selected?: any;
  postfix?: string;
  onSelectItem?: (item: any) => void;
}

const AppDropdown: React.FC<ItemSelectorModalProps> = ({
  onClose = () => {},
  items,
  dataKey,
  selected,
  postfix = '',
  onSelectItem = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleSelect = (item: any) => {
    setIsVisible(false);
    onSelectItem(item);
  };

  const handleConfirm = () => {
    onClose(selected);
  };

  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <AppText style={styles.title}>Select an Item</AppText>
            <TouchableOpacity
              className="absolute items-end right-3 top-3"
              onPress={() => setIsVisible(false)}>
              <Icon type="MaterialIcons" name="close" size={25} />
            </TouchableOpacity>
            <FlatList
              data={items}
              keyExtractor={item => item[dataKey]?.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  className="flex-row justify-between items-center py-2 px-6 border-b border-b-gray-200"
                  style={[
                    selected &&
                      selected[dataKey] === item[dataKey] &&
                      styles.selectedItem,
                  ]}
                  onPress={() => handleSelect(item)}>
                  <AppText>{item[dataKey]}</AppText>
                  <Icon type="MaterialIcons" name="chevron-right" size={20} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <View className="">
        <TouchableOpacity
          className={`border-[#f9d4d4] border-[1px] rounded-[8px] py-[12px] px-[12px] flex-row justify-between items-center`}
          onPress={() => setIsVisible(true)}>
          <AppText
            className="text-[12px]"
            style={{color: selected?.[dataKey] ? 'black' : Colors.grey}}>
            {selected?.[dataKey] || 'Select an Item'}{' '}
            {selected?.[dataKey] && (
              <AppText color={Colors.grey}>{' ' + postfix}</AppText>
            )}
          </AppText>
          <Icon type="MaterialCommunityIcons" name="chevron-down" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (styles omitted for brevity)
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 16,
    width: '95%',
    marginBottom: 16,
    maxHeight: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  selectedItem: {
    backgroundColor: '#fa7083',
  },
});

export default AppDropdown;

import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {tws} from '../utility/tailwind';
import AppText from './AppText';
import {screenHeight} from '../utility/constants';
import {AppIcon} from './AppIcon';

const modalHeight = screenHeight * 0.5;

interface Props {
  isVisible: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

export default function AppModal({
  isVisible,
  onClose = () => {},
  title = 'Some Title',
  children,
}: Props) {
  return (
    <Modal visible={isVisible} onDismiss={onClose} transparent>
      <View
        style={tws(
          'w-full h-full items-center bg-[#00000091] rounded-md justify-end',
        )}>
        <View
          style={tws(
            `bg-white w-full min-h-[${modalHeight}px] px-4 py-2 rounded-tl-lg rounded-tr-lg`,
          )}>
          <AppText size={16} bold style={tws('mt-3')}>
            {title}
          </AppText>
          <TouchableOpacity
            onPress={onClose}
            style={tws(
              'absolute top-4 right-4 p-1.5 bg-gray-200 rounded-full',
            )}>
            <AppIcon type="MaterialIcons" name="close" />
          </TouchableOpacity>
          <View style={tws('mt-4')}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

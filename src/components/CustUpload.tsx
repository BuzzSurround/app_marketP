import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from './AppText';
import {Icon} from './Icon';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';

interface FileUploadProps {
  file: DocumentPickerResponse | null; // File prop can be a DocumentPickerResponse or null
  onFileUpload: (file: DocumentPickerResponse) => void; // Callback function prop
}

export default function CustUpload({
  file,
  onFileUpload = () => {},
}: FileUploadProps) {
  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images, DocumentPicker.types.video], // You can specify file types here
      });

      // Call the upload callback with the selected file
      onFileUpload(res); // Pass the file object to the parent component
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User canceled the picker');
      } else {
        console.error('Error picking file: ', err);
      }
    }
  };

  return (
    <View>
      {file ? (
        <TouchableOpacity
          onPress={pickFile}
          className="flex-row justify-between border border-[#F9D3D3] rounded-[8px] px-2 py-3 items-center mb-4">
          <AppText className="ml-2 text-[12px] text-green-700" size={12}>
            {file.name}
          </AppText>
          <Icon
            type="MaterialIcons"
            name="check-circle"
            size={20}
            color="green"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={pickFile}
          className="flex-row justify-center border border-[#F9D3D3] rounded-[8px] px-4 py-1 items-center bg-[#F1EEEE]">
          <Icon type="MaterialIcons" name="upload" size={30} color="black" />
          <AppText className="ml-2 text-[12px]" size={12}>
            Upload Media
          </AppText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

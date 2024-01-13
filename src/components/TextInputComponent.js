import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TextInputComponent = ({placeholder, onChangeText}) => {
  return (
    <View style={{marginBottom: hp(2)}}>
      <TextInput
        placeholder={placeholder}
        style={{
          width: wp(75),
          paddingHorizontal: wp(3),
          borderWidth: wp(0.1),
          borderColor: '#bbb',
        }}
        placeholderTextColor={'#bbb'}
        onChangeText={e => onChangeText(e)}
      />
    </View>
  );
};

export default TextInputComponent;

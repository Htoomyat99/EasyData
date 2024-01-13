import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BtnComponent = ({btnText, bgColor, textColor, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={{marginTop: hp(5)}}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text
        style={{
          backgroundColor: bgColor,
          color: textColor,
          fontSize: hp(2),
          paddingVertical: wp(1.5),
          paddingHorizontal: wp(4),
          borderRadius: wp(1),
        }}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnComponent;

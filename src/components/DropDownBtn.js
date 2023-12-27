import {View, Text} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DropDownBtn = ({
  placeholder,
  items,
  value,
  setValue,
  open,
  setOpen,
  width,
}) => {
  return (
    <View>
      <DropDownPicker
        placeholder={placeholder}
        items={items}
        value={value}
        setValue={setValue}
        open={open}
        setOpen={setOpen}
        textStyle={{fontSize: hp(1.6)}}
        labelProps={{style: {color: '#666', fontSize: hp(1.6)}}}
        arrowIconStyle={{tintColor: '#666'}}
        maxHeight={hp(20)}
        props={{
          style: {
            borderWidth: wp(0.2),
            borderColor: '#666',
            width: width,
            height: hp(4),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: wp(2.5),
            borderRadius: wp(1),
          },
        }}
      />
    </View>
  );
};

export default DropDownBtn;

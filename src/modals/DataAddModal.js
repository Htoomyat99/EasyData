import {View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import React, {useState} from 'react';
import DropDownBtn from '../components/DropDownBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {style} from './style';

const DataAddModal = ({
  monthList,
  monthValue,
  setMonthValue,
  monthOpen,
  setOpen,
  typeItem,
  typeValue,
  setTypeValue,
  typeOpen,
  setTypeOpen,
  textInputvalue,
  onChangeText,
  cancelPress,
  addOnPress,
}) => {
  return (
    <Modal
      animationType="fade"
      style={{backgroundColor: 'pink'}}
      transparent={true}
      visible={true}>
      <View style={style.mainContainer}>
        <View style={style.container}>
          <Text style={style.headerText}>ADD YOUR DATA</Text>

          <View style={style.monthContainer}>
            <Text style={style.monthText}>Month</Text>
            <DropDownBtn
              placeholder="Month"
              items={monthList}
              value={monthValue}
              setValue={setMonthValue}
              open={monthOpen}
              setOpen={setOpen}
              width={wp(25)}
            />
          </View>

          <View style={style.typeContainer}>
            <Text style={style.typeText}>Type</Text>
            <DropDownBtn
              placeholder="Type"
              items={typeItem}
              value={typeValue}
              setValue={setTypeValue}
              open={typeOpen}
              setOpen={setTypeOpen}
              width={wp(25)}
            />
          </View>

          <View style={style.valueContainer}>
            <Text style={style.valueText}>Value</Text>

            <TextInput
              style={style.textInput}
              selectionColor={'#fff'}
              keyboardType="number-pad"
              placeholder="Value"
              value={textInputvalue}
              onChangeText={onChangeText}
            />
          </View>

          <View style={style.btnContainer}>
            <TouchableOpacity onPress={cancelPress} style={style.cancelContent}>
              <Text style={{fontSize: hp(2), color: '#fff'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={item => addOnPress(item)}
              style={style.addContent}>
              <Text style={{fontSize: hp(2), color: '#fff'}}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DataAddModal;

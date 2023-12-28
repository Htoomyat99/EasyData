import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DataAddModal from '../modals/DataAddModal';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../store/counter/dataSlice';

const Example = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  const [openModal, setOpenModal] = useState(false);
  const [monthValue, setMonthValue] = useState(null);
  const [monthOpen, setMonthOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [typeOpen, setTypeOpen] = useState(false);
  const [textInputvalue, setTextInputValue] = useState('');

  const [monthList, setMonthList] = useState([
    {label: 'All', value: 'All'},
    {label: 'Jan', value: 'Jan'},
    {label: 'Feb', value: 'Feb'},
    {label: 'Mar', value: 'Mar'},
    {label: 'Apr', value: 'Apr'},
    {label: 'May', value: 'May'},
    {label: 'June', value: 'June'},
    {label: 'July', value: 'July'},
    {label: 'Aug', value: 'Aug'},
    {label: 'Sep', value: 'Sep'},
    {label: 'Oct', value: 'Oct'},
    {label: 'Nov', value: 'Nov'},
    {label: 'Dec', value: 'Dec'},
  ]);

  const [typeItem, setTypeItem] = useState([
    {label: 'All', value: 'all'},
    {label: 'Type 1', value: 'type1'},
    {label: 'Type 2', value: 'type2'},
    {label: 'Type 3', value: 'type3'},
    {label: 'Type 4', value: 'type4'},
  ]);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const addHandler = () => {
    setOpenModal(false);
    dispatch(addData({id: Date.now(), typeValue, monthValue, textInputvalue}));
  };

  const cancelHandler = () => {
    setOpenModal(false);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <TouchableOpacity
        onPress={openModalHandler}
        style={{
          backgroundColor: 'pink',
          width: wp('15%'),
          alignItems: 'center',
          paddingVertical: wp('2%'),
          margin: hp('5%'),
        }}>
        <Text>ADD</Text>
      </TouchableOpacity>

      {/* modal */}
      {openModal && (
        <DataAddModal
          monthList={monthList}
          monthValue={monthValue}
          setMonthValue={setMonthValue}
          monthOpen={monthOpen}
          setOpen={() => setMonthOpen(!monthOpen)}
          typeItem={typeItem}
          typeValue={typeValue}
          setTypeValue={setTypeValue}
          typeOpen={typeOpen}
          setTypeOpen={() => setTypeOpen(!typeOpen)}
          textInputvalue={textInputvalue}
          onChangeText={value =>
            setTextInputValue(value.replace(/[^0-9]/g, ''))
          }
          addOnPress={addHandler}
          cancelPress={cancelHandler}
        />
      )}

      {data.length > 1 &&
        data.map(item => {
          return (
            <View key={item.id}>
              <Text>{item.monthValue}</Text>
              <Text>{item.typeValue}</Text>
              <Text>{item.textInputvalue}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'teal',
                  width: wp(10),
                  alignItems: 'center',
                  alignSelf: 'flex-end',
                  marginBottom: hp(3),
                  paddingVertical: hp(1),
                  marginLeft: wp(5),
                }}>
                <Text>Edit</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: wp(100),
                  height: wp(0.1),
                  backgroundColor: 'black',
                }}></View>
            </View>
          );
        })}
    </SafeAreaView>
  );
};

export default Example;

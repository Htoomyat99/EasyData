import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackIcon from '../../assets/icons/BackIcon';
import {useDispatch, useSelector} from 'react-redux';
import {addData} from '../store/counter/dataSlice';
import {fetchGetByToken} from '../utils/fetchData';
import apiUrl from '../utils/apiUrl';

const HomeDetailScreen = ({route, navigation}) => {
  const {monthName, yearName} = route.params;
  const dispatch = useDispatch();
  const state = useSelector(state => state.data.value);

  const [month, setMonth] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  let controller = new AbortController();
  const signal = controller.signal;

  // useEffect(() => {
  //   let fullMonth;
  //   switch (data) {
  //     case 'Jan':
  //       fullMonth = 'January';
  //       break;
  //     case 'Feb':
  //       fullMonth = 'February';
  //       break;
  //     case 'Mar':
  //       fullMonth = 'March';
  //       break;
  //     case 'Apr':
  //       fullMonth = 'April';
  //       break;
  //     case 'May':
  //       fullMonth = 'May';
  //       break;
  //     case 'Jun':
  //       fullMonth = 'June';
  //       break;
  //     case 'Jul':
  //       fullMonth = 'July';
  //       break;
  //     case 'Aug':
  //       fullMonth = 'August';
  //       break;
  //     case 'Sep':
  //       fullMonth = 'September';
  //       break;
  //     case 'Oct':
  //       fullMonth = 'October';
  //       break;
  //     case 'Nov':
  //       fullMonth = 'November';
  //       break;
  //     case 'Dec':
  //       fullMonth = 'December';
  //       break;
  //     default:
  //       fullMonth = 'Error Unknown';
  //       break;
  //   }
  //   setMonth(fullMonth);
  // }, [data]);

  useEffect(() => {
    const monthMap = {
      Jan: 'January',
      Feb: 'February',
      Mar: 'March',
      Apr: 'April',
      May: 'May',
      Jun: 'June',
      Jul: 'July',
      Aug: 'August',
      Sep: 'September',
      Oct: 'October',
      Nov: 'November',
      Dec: 'December',
    };

    setMonth(monthMap[monthName] || 'Error Unknown');
  }, [monthName]);

  const backHandler = () => {
    navigation.goBack();
  };

  const addDataHanler = () => {
    const addedData = {
      year: yearName,
      data: [
        {
          month: monthName,
          type: 'type1',
          value: 20,
        },
      ],
    };
    dispatch(addData(addedData));
  };

  // const fetchPokenCart = async () => {
  //   const response = await fetchGetByToken(apiUrl.cards, signal);
  //   console.log('response >>>', response);
  // };

  const editHandler = () => {
    console.log('value Edit');
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: 'teal',
          paddingVertical: hp(1.5),
          paddingHorizontal: wp(7),
          marginVertical: hp(1),
          width: wp(85),
          borderRadius: wp(3),
        }}>
        <Text style={{marginBottom: hp(1), color: '#fff'}}>
          {item.type} {item.value}
        </Text>
        <Text style={{marginBottom: hp(1), color: '#fff'}}></Text>
        <Text style={{marginBottom: hp(1), color: '#fff'}}></Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#fff'}}>
            {item.year}
            {item.month}
          </Text>
          <TouchableOpacity
            onPress={editHandler}
            activeOpacity={0.8}
            style={{
              backgroundColor: '#fff',
              paddingVertical: wp(0.2),
              paddingHorizontal: wp(4),
              borderRadius: wp(3),
            }}>
            <Text style={{color: 'teal', fontSize: hp(1.5)}}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={backHandler}
        style={{
          position: 'absolute',
          top: hp(2.5),
          left: wp(6),
          paddingVertical: wp(1),
          paddingHorizontal: wp(2),
        }}>
        <BackIcon width={wp(5.5)} height={wp(5.5)} />
      </TouchableOpacity>
      <Text style={{fontSize: hp(2), marginTop: hp(3)}}>
        {month} Data Detail
      </Text>

      {Object.entries(state).length > 0 ? (
        <FlatList
          style={{marginTop: hp(3)}}
          data={state}
          keyExtractor={item => item.toString()}
          renderItem={renderItem}
        />
      ) : (
        <View
          style={{
            marginTop: hp(25),
            marginBottom: hp(50),
          }}>
          <Text style={{fontSize: hp(2.2), color: '#bbb'}}>
            No Data at the moment
          </Text>
        </View>
      )}

      <View
        style={{
          width: wp(85),
          marginBottom: hp(3),
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={addDataHanler}
          style={{
            backgroundColor: 'teal',
            padding: wp(2),
            width: wp(20),
            alignItems: 'center',
            borderRadius: wp(1),
          }}>
          <Text style={{fontSize: hp(1.8), color: '#fff'}}>Add Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeDetailScreen;

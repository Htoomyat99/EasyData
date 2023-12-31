import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackIcon from '../../assets/icons/BackIcon';

const yearData = [
  {id: 2024, year: '2024'},
  {id: 2025, year: '2025'},
  {id: 2026, year: '2026'},
  {id: 2027, year: '2027'},
  {id: 2028, year: '2028'},
  {id: 2029, year: '2029'},
  {id: 2030, year: '2030'},
];

const YearScreen = ({navigation}) => {
  const yearDetailAction = item => {
    navigation.navigate('YearDetail', {data: item.year});
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => yearDetailAction(item)}
        activeOpacity={0.8}
        style={{
          backgroundColor: 'teal',
          marginVertical: wp(2),
          paddingVertical: hp(3),
          paddingHorizontal: wp(5),
          width: wp(85),
          borderRadius: wp(1.5),
          shadowOffset: {width: 0, height: 3},
          shadowColor: '#000',
          shadowOpacity: 0.3,
          elevation: 3,
          shadowRadius: wp(1.5),
        }}>
        <Text style={{fontSize: hp(1.8), color: '#fff'}}>{item.year}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
      <Text style={{fontSize: hp(2), marginTop: hp(3)}}>Easy Data</Text>

      <FlatList
        style={{marginTop: hp(5)}}
        data={yearData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default YearScreen;

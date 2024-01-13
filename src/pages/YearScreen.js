import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../context/Context';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  backgroundMessage,
  foregroundMessage,
  requestUserPermission,
} from '../utils/firebaseService';
import {appStorage} from '../utils/appStorage';

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
  const {getAuth} = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestUserPermission();
    foregroundMessage();
    backgroundMessage();
  }, []);

  const yearDetailAction = item => {
    navigation.navigate('YearDetail', {data: item.year});
  };

  const logOutAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      auth().signOut();
      getAuth(null);
      appStorage.deleteItem('@userData');
    }, 1000);
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
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
      <Text style={{fontSize: hp(2), marginTop: hp(3)}} onPress={logOutAction}>
        Log Out
      </Text>

      <FlatList
        style={{marginTop: hp(5)}}
        data={yearData}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {loading && (
        <ActivityIndicator
          size={'large'}
          color={'white'}
          style={{
            position: 'absolute',
            top: hp(12),
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default YearScreen;

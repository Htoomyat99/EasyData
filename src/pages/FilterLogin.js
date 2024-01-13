import {View, Text, ActivityIndicator, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInput from '../components/TextInputComponent';
import BtnComponent from '../components/BtnComponent';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../context/Context';
import {appStorage} from '../utils/appStorage';

const FilterLogin = ({navigation}) => {
  const {getAuth} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const goRegister = () => {
    navigation.navigate('FilterRegister');
  };

  const onChangeEmail = e => {
    setEmail(e);
  };

  const onChangePass = e => {
    setPass(e);
  };

  const loginAction = () => {
    const userData = {
      email: email,
      pass: pass,
    };
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        // console.log('userAccount Sign in');
        getAuth(userData);
        appStorage.setItem('@userData', JSON.stringify(userData));
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // console.log('email address is already in used');
          setLoading(false);
          Alert.alert('Error', 'email address is already in used');
        }
        if (error.code === 'auth/invalid-credential') {
          // console.log('that email address is invalid');
          setLoading(false);
          Alert.alert('Error', 'email or password is incorrect');
        }
        console.log('error >>>', error);
        setLoading(false);
        Alert.alert('Error', 'email or password is incorrect');
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: hp(2), fontWeight: 'bold', marginBottom: hp(5)}}>
        Login Screen
      </Text>

      <TextInput placeholder={'Email'} onChangeText={onChangeEmail} />

      <TextInput placeholder={'Password'} onChangeText={onChangePass} />

      <Text
        style={{color: 'red', marginLeft: wp(40), fontSize: hp(1.5)}}
        onPress={goRegister}>
        Not a member, Register
      </Text>

      <BtnComponent
        btnText={'Log In'}
        bgColor={email && pass ? 'teal' : '#ddd'}
        textColor={'white'}
        onPress={loginAction}
        disabled={!email && !pass ? true : false}
      />

      {loading && (
        <ActivityIndicator
          size={'large'}
          color={'blue'}
          style={{
            position: 'absolute',
            top: hp(18),
          }}
        />
      )}
    </View>
  );
};

export default FilterLogin;

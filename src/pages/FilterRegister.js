import {View, Text, Alert, ActivityIndicator} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInput from '../components/TextInputComponent';
import BtnComponent from '../components/BtnComponent';
import {AuthContext} from '../context/Context';
import auth from '@react-native-firebase/auth';
import {appStorage} from '../utils/appStorage';

const FilterRegister = ({navigation}) => {
  const {getAuth} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const goLogin = () => {
    navigation.goBack();
    setEmail('');
    setPass('');
  };

  const onChangeEmail = e => {
    setEmail(e);
  };

  const onChangePass = e => {
    setPass(e);
  };

  const registerAction = () => {
    const userData = {
      email: email,
      pass: pass,
    };
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        // console.log('userAccount created and Sign in');
        getAuth(email);
        appStorage.setItem('@userData', userData);
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // console.log('email address is already in used');
          setLoading(false);
          Alert.alert('Error', 'email address is already in used');
        }
        if (error.code === 'auth/invalid-email') {
          // console.log('that email address is invalid');
          setLoading(false);
          Alert.alert('Error', 'email or password is incorrect');
        }
        console.log('error >>>', error);
        setLoading(false);
        Alert.alert('Error', JSON.stringify(error));
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
        Register Screen
      </Text>

      <TextInput placeholder={'Email'} onChangeText={onChangeEmail} />

      <TextInput placeholder={'Password'} onChangeText={onChangePass} />

      <Text
        style={{color: 'red', marginLeft: wp(40), fontSize: hp(1.5)}}
        onPress={goLogin}>
        Already a member, Log In
      </Text>

      <BtnComponent
        btnText={'Sign Up'}
        bgColor={email && pass ? 'teal' : '#ddd'}
        textColor={'white'}
        onPress={registerAction}
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

export default FilterRegister;

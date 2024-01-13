import messaging from '@react-native-firebase/messaging';
import {appStorage} from './appStorage';
import {Alert} from 'react-native';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = appStorage.getItem('@FcmToken');
  console.log('the old token >>>', fcmToken);
  if (!fcmToken) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('the new token', fcmToken);
        appStorage.setItem('@FcmToken', fcmToken);
      }
    } catch (error) {
      console.log('token Error >>>', error);
    }
  }
};

export const backgroundMessage = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
};

export const foregroundMessage = () => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert(
      JSON.stringify(remoteMessage.notification.title),
      JSON.stringify(remoteMessage.notification.body),
    );
  });

  return unsubscribe;
};

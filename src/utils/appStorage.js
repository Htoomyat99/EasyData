import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const appStorage = {
  setItem: (key, value) => {
    try {
      if (typeof key == 'undefined' || typeof value == 'undefined') {
        console.log('key >>>', key);
        console.log('value >>>', value);
      } else {
        storage.set(key, value);
      }
    } catch (error) {
      console.log('error >>', error);
    }
  },

  getItem: key => {
    if (storage.contains(key)) {
      return storage.getString(key);
    } else {
      console.log("Can't get data >>>", key);
      return undefined;
    }
  },

  deleteItem: key => storage.delete(key),

  containItem: key => {
    return storage.contains(key);
  },

  getAllKey: () => {
    return storage.getAllKeys();
  },
};

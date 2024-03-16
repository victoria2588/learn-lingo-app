import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);

const db = getDatabase();

export const addData = data => {
  set(ref(db, 'items/'), data);
};

export const getData = data => {
  return get(ref(db, 'items')).then(snapshot => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('No data available');
    }
  });
};


import {DB} from './config';
import firebase from 'firebase';

firebase.initializeApp(DB);
const database = firebase.firestore();

export const addCollection = (ref, data) => {
    return database.collection(ref).doc().set(data);
}

export const getCollections = (ref) => {
    return database.collection(ref).orderBy('score', 'desc').limit(10).get();
}
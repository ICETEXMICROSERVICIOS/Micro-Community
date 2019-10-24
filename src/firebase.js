// componente que contiene los datos de conexion con firebase
import firebase from 'firebase';
const config = {
   apiKey: "AIzaSyCin4n4APBPOIJhTne2PUDb69NADPBIMAY",
   projectId: "microcommunity",
   storageBucket: "",
   messagingSenderId: "303235290172"
};
firebase.initializeApp(config);
export default firebase;

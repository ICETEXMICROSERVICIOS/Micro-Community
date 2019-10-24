import React from 'react';
import firebase from "./firebase";
class Getcomunidades extends React.Component {

  constructor() {
    super();
    this.state = {
     nombre: "",
     estado: ""
    };
  }
  render() {
    
    const db = firebase.firestore();
   
    db.collection('comunidades').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
       
        
      });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });


    return (
      <p>
      
    </p>

    
        );
      }
   }
export default Getcomunidades; 

//nombre: 'Martha',
     //   activo: true
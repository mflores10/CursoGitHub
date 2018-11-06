firebase.initializeApp({
  apiKey: 'AIzaSyCMjGpto4xT4qRYha86Im2eiCP1JLgi7sA',
  authDomain: 'usuario1-7381f.firebaseapp.com',
  projectId: 'usuario1-7381f'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});





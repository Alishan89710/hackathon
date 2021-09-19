const firebaseConfig = {
    apiKey: "AIzaSyCH0pMbH3ZXBlmTsu0CTadMC665O1z6D0w",
    authDomain: "chartapp-76eb5.firebaseapp.com",
    projectId: "chartapp-76eb5",
    storageBucket: "chartapp-76eb5.appspot.com",
    messagingSenderId: "1009974553910",
    appId: "1:1009974553910:web:4518881a4c519cdebfd797",
    measurementId: "G-T353STYN6X"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fairbase = firebase.firestore()
console.log(firebase.database)









function login() {
    let user = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    console.log(user + password)
// function get() {
//     firebase.database().raf(user , password).on("value", function(data ){
// console.log(data.val())        
//     })
// }

};
function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(res => alert(res))
}

















function signup() {
    const Na = document.getElementById("a_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pop").value;

    console.log(Na + email + password);
    auth.createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    // var user = Na + email + password;
    // if (user == Na && email && password) {
    //     window.location.hraf = "index.html"

    // }
    // else {
    //     alert("sudar ja password sahi dal ")
    // }
}
function  signin() {
    
}





import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCQLSr9ve6r4jCDLfg_2w1aMhnqlZCJVDM",
  authDomain: "x48-691ca.firebaseapp.com",
  databaseURL: "https://x48-691ca.firebaseio.com"
});

export function loggedIn() {
  let authenticated = false;
  for (let key in localStorage) {
    if(key.startsWith("firebase:authUser:")) {
      authenticated = true;
      return true;
      this.props.authUser(JSON.parse(localStorage[key]));
    }
  }
  return false;
}


export default firebase;

importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');
firebase.initializeApp({
    // 'messagingSenderId': '364314151779'
    apiKey: "AIzaSyCAO__95vTA48qmYzPTF0gDPT1GPGQTu7Q",
    authDomain: "choicesnew-a0046.firebaseapp.com",
    databaseURL: "https://choicesnew-a0046.firebaseio.com",
    projectId: "choicesnew-a0046",
    storageBucket: "choicesnew-a0046.appspot.com",
    messagingSenderId: "364314151779",
    appId: "1:364314151779:web:b30016de7684ae346a6156",
    measurementId: "G-96YKNTXWM0"
});
const messaging = firebase.messaging();

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    console.log(event);
    const myPromise = new Promise(function(resolve, reject) {
      // Do you work here
        
      // Once finished, call resolve() or  reject().
      resolve();
    });
  
    event.waitUntil(myPromise);
  });
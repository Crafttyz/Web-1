// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyA-Icr4BO9QhdVyTHf-2cPxWBmmgQBuHAc",
  authDomain: "rug-auction-web.firebaseapp.com",
  projectId: "rug-auction-web",
  storageBucket: "rug-auction-web.firebasestorage.app",
  messagingSenderId: "680702076741",
  appId: "1:680702076741:web:6b3b6eef3c7035bef3402c",
  measurementId: "G-3JQG94Y3JE"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        // icon: 'https://www.veroxai.io/logo16.png'

    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.notifyUser = functions.firestore
    .document('chat/{chatId}')
    .onCreate((snap, context) => {
        
    const message = snap.data();
    const userId = message.receiver
    console.log(userId);

    // Message details for end user
    const payload = {
        notification: {
            title: `${message.senderName}`,
            body: `${message.message}`,
            sound: "default",
            click_action: `/tabs/inbox/chat/${message.sender}/${message.senderName}`
            // icon: 'https://goo.gl/Fz9nrQ'
          },
          
        data : {
            sender : `${message.sender}`
          }
    } 

    // ref to the parent document
    const db = admin.firestore()
    const userRef = db.collection('users').doc(userId)


    // get users tokens and send notifications
    return userRef.get()
        .then(snapshot => snapshot.data() )
        .then(user => {
            
            const tokens = user.fcmTokens ? Object.keys(user.fcmTokens) : []

            if (!tokens.length) {
               throw new Error('User does not have any tokens!')
            }

            return admin.messaging().sendToDevice(tokens, payload)
        })
        .then("succesfully sent notification")
        .catch(err => console.log(err, 'is an error') )
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

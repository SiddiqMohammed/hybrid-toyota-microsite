/* eslint-disable max-len */
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");

admin.initializeApp();
require("dotenv").config();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const {SENDER_EMAIL, SENDER_PASSWORD}= process.env;

exports.sendEmailNotification=functions.firestore.document("dfc/{docID}")
    .onCreate((snap, ctx)=>{
      const data=snap.data();
      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });
      authData.sendMail({
        from: "'Toyota Autofest' <toyota-autofest@gmail.com>",
        to: `${data.email}`,
        subject: "Sign up emailer",
        text: "Hello" + `${data.FirstName}`,
        html: `<p>Hello ${data.FirstName},</p>
        <p>Thank you for visiting Al-Futtaim Toyota at the Autofest 2021 and signing up at our booth.</p>
        <a href="https://thehanginghouse.com/toyota-hybrid-heroes/static/media/tc.eba3a9a6.pdf">Terms and Conditions</a>
        <br>
        <p>Regards,</p>
        <p>Team Toyota</p>`,
      });
    });

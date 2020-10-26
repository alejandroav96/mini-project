var admin = require("firebase-admin");

var serviceAccount = require("../keys/mini-project-a8159-firebase-adminsdk-v77zc-ee757ed6da.json");

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mini-project-a8159.firebaseio.com"
});
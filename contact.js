  
// Initialize Firebase (ADD YOUR OWN DATA)
 var firebaseConfig = {
    apiKey: "AIzaSyBME_9zqj_rRdTcB7iZ5s3LhaYErF5_CtM",
    authDomain: "contactform-e55b1.firebaseapp.com",
    databaseURL: "https://contactform-e55b1.firebaseio.com",
    projectId: "contactform-e55b1",
    storageBucket: "contactform-e55b1.appspot.com",
    messagingSenderId: "625792057471",
    appId: "1:625792057471:web:e2b5203e502aaedaa93f4a",
    measurementId: "G-WGLFJDEYW0"
  };
firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
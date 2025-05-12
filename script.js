// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT2OoN5T5CdV1trwHp9bKW0JneCjAQuQQ",
  authDomain: "test-6b0db.firebaseapp.com",
  projectId: "test-6b0db",
  storageBucket: "test-6b0db.firebasestorage.app",
  messagingSenderId: "766154141135",
  appId: "1:766154141135:web:f715b370369485f0fcf6ba"
};

const firebaseConfig = {

    apiKey: "AIzaSyCT2OoN5T5CdV1trwHp9bKW0JneCjAQuQQ",

    authDomain: "test-6b0db.firebaseapp.com",

    projectId: "test-6b0db",

    storageBucket: "test-6b0db.firebasestorage.app",

    messagingSenderId: "766154141135",

    appId: "1:766154141135:web:f715b370369485f0fcf6ba"

  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Handle form submission
document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const statusElement = document.getElementById('status');
    statusElement.style.display = 'none';
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    try {
        // Add a new document to the "submissions" collection
        await db.collection('submissions').add({
            name: name,
            email: email,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        // Show success message
        statusElement.textContent = 'Data submitted successfully!';
        statusElement.className = 'success';
        statusElement.style.display = 'block';
        
        // Reset form
        document.getElementById('dataForm').reset();
        
    } catch (error) {
        console.error('Error adding document: ', error);
        statusElement.textContent = 'Error submitting data: ' + error.message;
        statusElement.className = 'error';
        statusElement.style.display = 'block';
    }
});

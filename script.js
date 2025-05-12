// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu5_4b9FPPkICfTENRExmm0fDlCfFUZm0",
    authDomain: "webbackend-9bc2c.firebaseapp.com",
    projectId: "webbackend-9bc2c",
    storageBucket: "webbackend-9bc2c.firebasestorage.app",
    messagingSenderId: "386812881122",
    appId: "1:386812881122:web:df367aa286b70365d316bb"
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

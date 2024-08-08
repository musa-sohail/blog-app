import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzg0g9pIfLcMxGXe9njIJ85y1YcoZ7JL0",
  authDomain: "blog-app-c4d23.firebaseapp.com",
  projectId: "blog-app-c4d23",
  storageBucket: "blog-app-c4d23.appspot.com",
  messagingSenderId: "1083272344022",
  appId: "1:1083272344022:web:1f8124e530cccff0c33477",
  measurementId: "G-QK2P2Y057J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Analytics only if supported
if (typeof window !== 'undefined') {
  isSupported().then(supported => {
    if (supported) {
      const analytics = getAnalytics(app);
    }
  });
}

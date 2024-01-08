import { createApp } from 'vue'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:process.env.API_KEY,
    authDomain:process.env.AUTH_DOMAIN,
    projectId:process.env.PROJECT_ID ,
    storageBucket:process.env.STORAGE_BUCKETS,
    messagingSenderId:process.env.MESSAGE_SENDING_ID,
    appId:process.env.APPID,
    measurementId:process.env.MEASUREMENT_ID
  };

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
createApp(App).use(router).mount('#app')

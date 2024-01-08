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
// const firebaseConfig = {
//     apiKey:process.env.API_KEY,
//     authDomain:process.env.AUTH_DOMAIN,
//     projectId:process.env.PROJECT_ID ,
//     storageBucket:process.env.STORAGE_BUCKETS,
//     messagingSenderId:process.env.MESSAGE_SENDING_ID,
//     appId:process.env.APPID,
//     measurementId:process.env.MEASUREMENT_ID
//   };
const firebaseConfig = {
        apiKey: "AIzaSyAwsmAZZ2PG9y2dMMUiMZU0tZp7WGimwQc",
        authDomain: "vue-auth-98113.firebaseapp.com",
        projectId: "vue-auth-98113",
        storageBucket: "vue-auth-98113.appspot.com",
        messagingSenderId: "2023800674",
        appId: "1:2023800674:web:9c16111f8817967128763b",
        measurementId: "G-Z0R9GZ3XV9"
    };

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
createApp(App).use(router).mount('#app')

<template>
    <div @click="handleSubmit" class="image-container">
        <img :src="require('../../assets/facebook.png')" alt="Mi Imagen" class="img-fluid" width="50" height="50">
      </div>
</template>

<script lang="ts" setup>
 import { FacebookAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const facebookProvider = new FacebookAuthProvider()
const auth = getAuth()
const UserFacebook = 'UserFcebook'

const handleSubmit = () => {
    signInWithPopup(auth,facebookProvider).then((result)=>{
        const credentials = FacebookAuthProvider.credentialFromResult(result)
        
        const token = credentials?.accessToken
        console.log({token});
        
        console.log('logeado exitosamente');
    }).catch((error)=>{
        
        console.log({error});
        
    })
    localStorage.setItem('user',UserFacebook)
}

</script>

<style scoped>

</style>
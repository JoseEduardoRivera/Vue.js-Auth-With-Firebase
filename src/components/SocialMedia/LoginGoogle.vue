<template>
    <div @click="handleSubmit" class="image-container">
        <img :src="require('../../assets/google.png')" alt="Mi Imagen" class="img-fluid" width="50" height="50">
      </div>
</template>

<script lang="ts" setup>
    import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

        const googleProvider = new GoogleAuthProvider()
        const auth = getAuth()
        const googleUser = 'GoogleUser'

        const handleSubmit = () => {
            signInWithPopup(auth,googleProvider).then((result)=>{
                const credentials = GoogleAuthProvider.credentialFromResult(result)
                
                const token = credentials?.accessToken
                console.log({token});
                
                console.log('logeado exitosamente');
            }).catch((error)=>{
                
                console.log({error});
                
            })
            localStorage.setItem('user',googleUser)
        }

</script>

<style scoped>

</style>
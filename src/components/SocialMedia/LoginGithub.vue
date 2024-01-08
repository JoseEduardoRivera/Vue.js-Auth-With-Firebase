<template>
    <div @click="handleSubmit" class="image-container">
        <img :src="require('../../assets/github.png')" alt="Mi Imagen" class="img-fluid" width="50" height="50">
      </div>
</template>

<script lang="ts" setup>
import { GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const githHubProvider = new GithubAuthProvider()
const auth = getAuth()
const githubUser = 'GitUser'

const handleSubmit = () => {
    signInWithPopup(auth,githHubProvider).then((result)=>{
        const credentials = GithubAuthProvider.credentialFromResult(result)
        
        const token = credentials?.accessToken
        console.log({token});
        
        console.log('logeado exitosamente');
    }).catch((error)=>{
        
        console.log({error});
        
    })
    localStorage.setItem('user',githubUser)
}

</script>

<style scoped>

</style>
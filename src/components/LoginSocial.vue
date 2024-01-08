<template>
    <div class="container-fluid d-flex justify-content-around mb-4">
        <LoginGoogle/>
        <LoginFacebook/>
        <LoginX/>
        <LoginGithub/>
    </div>
</template>

<script lang="ts" setup>
import LoginGoogle from "./SocialMedia/LoginGoogle.vue"
import LoginFacebook from "./SocialMedia/LoginFacebook.vue"
import LoginX from "./SocialMedia/LoginX.vue"
import LoginGithub from "./SocialMedia/LoginGithub.vue";

</script>

<style scoped>

</style>
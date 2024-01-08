<template>
    <div class="container">
      <LoginForm/>
      <div v-if="storedUser !== null">
        <p>Bienvenido {{ storedUser }}</p>
        <div class="divider-container mb-3">
          <div class="divider"></div>
          <a>Redes sociales</a>
          <div class="divider"></div>
        </div>
        <LoginSocial/>
      </div>
      <div class="divider-container mb-3">
        <div class="divider"></div>
        <a>O inicia sesión con</a>
        <div class="divider"></div>
      </div>
      <div class="container d-flex justify-content-around mb-4">
        <LoginFirebase/>
        <LoginAWSVue/>
        <LoginAzureVue/>
      </div>
        
    </div>
  </template>

<script lang="ts" setup>

import LoginForm from '@/components/LoginForm.vue';
import LoginFirebase from '@/components/LoginFirebase.vue';
import { ref, onMounted } from 'vue';
import LoginSocial from '@/components/LoginSocial.vue';
import LoginAWSVue from '@/components/CloudLogin/LoginAWS.vue';
import LoginAzureVue from '@/components/CloudLogin/LoginAzure.vue';

const storedUser = ref<string | null>(null);

onMounted(() => {
  // Obtener el valor guardado en el Local Storage
  const storedUsername = localStorage.getItem('user');

  // Actualizar la referencia para que se refleje en el componente
  storedUser.value = storedUsername;
});



</script>

<style>
.divider-container {
  display: flex;
  align-items: center;
}

.divider {
  flex: 1;
  height: 1px;
  background-color: #ccc;
  margin: 0 10px; /* Espaciado horizontal entre el divisor y el texto */
}
</style>
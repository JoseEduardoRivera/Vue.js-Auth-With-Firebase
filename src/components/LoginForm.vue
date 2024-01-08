<template>

  <div class="container">
    <input id="signup_toggle" type="checkbox">
    <form @submit.prevent="handleSubmit" class="form">
        <div class="form_front">
            <div class="form_details">Login</div>
            <input type="text" class="input" placeholder="Username" v-model="identifier">
            <input type="text" class="input" placeholder="Password" v-model="password">
            <button class="btn" type="submit">Login</button>
        </div>
    </form>
</div>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import {authCtrl} from "@/api"
import {User} from "../interfaces/user.interface"

    let identifier:Ref<string> = ref('correo@correo.com')
    let password:Ref<string> = ref('123456')
    let authenticatedUser: Ref<User | null> = ref(null);
  

      const handleSubmit = async () => {
        try {

          console.log({identifier,password});
          
          // Llamar a la función authLogin con las credenciales del formulario
          const user = await authCtrl.login({
            identifier:identifier.value,
            password:password.value
          });

          // Lógica para manejar el éxito (puedes redirigir a otra página, guardar el usuario en el estado, etc.)
          console.log('Inicio de sesión exitoso:', user);
          // Guardar el token en algún lugar, como en el localStorage
          localStorage.setItem('token', user.jwt);
          localStorage.setItem('user',user.user.username)
          authenticatedUser.value = user.user
        } catch (error) {
          // Lógica para manejar el error (puedes mostrar un mensaje de error, redirigir a otra página, etc.)
          console.error('Error en el inicio de sesión:', error);
        }
      };


</script>

<style scoped>

.container-button{
  margin-top: 15px;
  margin-bottom: 15px;
}

button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #23c483;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transition: all 1s ease;
}

.form .form_front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  backface-visibility: hidden;
  padding-top: 15px !important;
  padding: 65px 45px;
  border-radius: 15px;
  box-shadow: inset 2px 2px 10px rgba(0,0,0,1),
  inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}


.form_details {
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 10px;
  color: white;
}

.input {
  width: 245px;
  min-height: 45px;
  color: #fff;
  outline: none;
  transition: 0.35s;
  padding: 0px 7px;
  background-color: #212121;
  border-radius: 6px;
  border: 2px solid #212121;
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(87, 255, 174, 0.6);
}

.input::placeholder {
  color: #999;
}

.input:focus.input::placeholder {
  transition: 0.3s;
  opacity: 0;
}

.input:focus {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(255, 255, 255, 0.6),
  inset 2px 2px 10px rgba(0,0,0,1),
  inset -1px -1px 5px rgba(107, 255, 164, 0.6);
}

.btn {
  padding: 10px 35px;
  cursor: pointer;
  background-color: #212121;
  border-radius: 6px;
  border: 2px solid #212121;
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(255, 255, 255, 0.6);
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  transition: 0.35s;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(255, 255, 255, 0.6),
  inset 2px 2px 10px rgba(0,0,0,1),
  inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.btn:focus {
  transform: scale(1.05);
  box-shadow: 6px 6px 10px rgba(0,0,0,1),
  1px 1px 10px rgba(255, 255, 255, 0.6),
  inset 2px 2px 10px rgba(0,0,0,1),
  inset -1px -1px 5px rgba(255, 255, 255, 0.6);
}

.form .switch {
  font-size: 13px;
  color: white;
}


.container #signup_toggle {
  display: none;
}

.container #signup_toggle:checked + .form {
  transform: rotateY(-180deg);
}

</style>
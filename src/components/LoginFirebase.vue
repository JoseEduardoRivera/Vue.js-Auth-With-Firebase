<template>
    <div>
      <div @click="toggleCollapse" class="image-container">
        <img :src="require('../assets/firebase.png')" alt="Mi Imagen" class="img-fluid" width="40" height="40">
      </div>
      <div class="collapse" ref="myCollapse">
        <div class="card card-body ">
            <form @submit.prevent="">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-secondary mt-2" @click.prevent="authUser">Submit</button>
            </form>
        </div>
      </div>
    </div>
  </template>


  <script lang="ts" setup>
  import { Ref, ref } from 'vue';
  import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'


  let email:Ref<string> = ref('josecar@demovue.com')
  let password:Ref<string> = ref('123456')

  const firebaseUser = 'usuarioFirebase'

    const authUser = () =>{
        try {

            const auth = getAuth()
            signInWithEmailAndPassword(auth,email.value,password.value).then(()=> {
                console.log('logeado exitosamente');
                
            }).catch((error)=> {
                console.log('algo ha salido mal');
                console.log(error.message);
                
                
            })

            localStorage.setItem('user',firebaseUser)
        } catch (error) {
            console.log(error);
            
        }
    
}


  
  
  const myCollapse = ref<HTMLElement | null>(null);
  
  const toggleCollapse = () => {
    if (myCollapse.value) {
      myCollapse.value.classList.toggle('show');
    }
  };
  </script>
  
  <style lang="scss">
  .collapse {
    display: none;
    &.show {
      display: block;
      animation: fadeIn 1.5s ease; /* Ajusta el tiempo según tus preferencias */
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  </style>
  
  
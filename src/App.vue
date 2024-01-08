<template>
  <div class="container">
    <div class="logo">
        <img :src="require('../src/assets/logo.png')" alt="Mi Imagen" class="img-fluid" width="50" height="50">
      </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/auth">Access</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffff;
  background: linear-gradient(25deg, hsla(224, 19%, 27%, 1) 0%, hsla(134, 36%, 53%, 1) 100%);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #24473c;
    
    &.router-link-exact-active {
      color: #ffff;
    }
  }
}

.image-container {
  cursor: pointer;
  backdrop-filter: blur(10px);
  overflow: auto;
  height: 80px;
  width: 80px;
  border-radius: 10px;
  transition: box-shadow 0.3s ease; /* Agrega una transición a la sombra para un efecto suave */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ajusta según tus preferencias */
  display: flex; /* Usa flexbox para centrar la imagen */
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
}

.image-container:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Ajusta según tus preferencias */
  transition: 0.5s;
  background-color: rgb(47, 85, 75);
}

.container{
  padding-bottom: 15px;
}


</style>

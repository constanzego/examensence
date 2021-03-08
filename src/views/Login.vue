<template>
  <div class="Login">
    <Navbar msg="" />
    <h1  class= "titulo">Login</h1>
    <input type="text" name="username" v-model="user_ingresado" placeholder="Username" />
    <input type="password" name="username" v-model="id_ingresado" placeholder="id" />
    <button @click="login()"> Ingresar</button>
    <output>{{error}}</output>
    <p>{{username}}</p>
    <p>{{id}}</p>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'Login',
  data(){
    return{
      username:"",
      id:"",
      error:"",
    }
  },
  components: {
    Navbar
  },
  mounted(){
    axios.get("https://inforcap2020.github.io/front-end/api/v2/login.json").then(resultado =>{
      console.log(resultado.data.data)
      this.username = resultado.data.username;
      this.id = resultado.data.id;
    });
  },
  methods:{
    login: function(){
      if(this.username == this.user_ingresado){
        true;
      }else{
        this.error ="Usuario no existe";
        return "";
      }
       if(this.id == this.id_ingresado){
         true;
      }else{
        this.error ="Clave erronea";
        return "";
      }
    window.location.href = '/home'
    }

    }
}
</script>

<style scoped>
img {
  width: 200px;
  height: 100px;
}
</style>

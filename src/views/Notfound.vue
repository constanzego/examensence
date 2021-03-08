<template>
  <div class="about">
    <Navbar msg="" />
    <h1>Not Found</h1>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'Home',
  data(){
    return{
      cursos:[],
    }
  },
  components: {
    Navbar
  },
  mounted(){
    axios.get("https://inforcap2020.github.io/front-end/api/v1/courses/courses.json").then(resultado =>{
      console.log(resultado.data.data)
      this.cursos = resultado.data.data;
    });
  },
  
}
</script>

<style scoped>
img {
  width: 200px;
  height: 100px;
}
</style>

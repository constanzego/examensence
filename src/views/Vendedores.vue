<template>
  <div class="Vendedores">
        <Navbar msg="" />
        <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Vendedores</b-breadcrumb-item>
  </b-breadcrumb>
    <h1  class= "titulo">Monitor de Vendedores</h1>

            <table>
              <tr>
        <th>Id Vendedor</th>
        <th>Vendedor</th>
        <th>Venta Unidades</th>
        <th>Venta Pesos</th>
        <th>Meta Venta</th>
        <th>Cumplimiento Meta</th>
      </tr>
      <tr v-for="(vendedor, index) in vendedores" v-bind:key="index">
        <td>{{ vendedor.id_vendedor}}</td>
        <td>{{ vendedor.nombre}}</td>
        <td>{{ vendedor.venta_unid}}</td>
        <td>{{ vendedor.venta_pesos}}</td>
        <td>{{ vendedor.meta_venta}}</td>
        <td>{{retorno_porcentaje(vendedor.meta_venta, vendedor.venta_pesos)}}%</td>
      </tr>  

    </table> 

  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
    name: 'Vendedores',
    data(){
    return{
        vendedores:[],
        pagedResult:"",
    }
  },
  components: {
    Navbar
  },
  mounted(){
    axios.get("https://inforcap2020.github.io/front-end/api/v2/vendedores.json").then(resultado =>{
      console.log(resultado.data)
      this.vendedores = resultado.data["vendedores:"];
      this.pagedResult = resultado.data.pagedResult;

      
    });
  },
      methods:{
    retorno_porcentaje(meta, total){
      return Math.floor(total*100/meta) ;
    }
  }
  
}
</script>

<style scoped>
table{
    margin-left: auto;
    margin-right: auto;
    min-width:1000px;
    margin-bottom:30px;
}

table tr:nth-child(odd){
    background:#2c3e5014;
}
</style>

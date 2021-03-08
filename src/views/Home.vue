<template>
  <div class="home">
    <Navbar msg="" />
            <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item>
  </b-breadcrumb>
    <h1  class= "titulo">Bienvenido</h1>
    <h4>Bienvenido al sistema de Gestión de ventas de WorldParts</h4><br>
  <div class="dashboard">
    <div>
      <h3>Venta Mensual</h3>
      <table>
      <th>{{retorno_porcentaje(kpis[0].venta_mensual.meta, kpis[0].venta_mensual.valor)}}%</th>
      <th>{{kpis[0].venta_mensual.valor}}</th>
      <th>{{kpis[0].venta_mensual.meta}}</th>
       <tr>
         <td> </td>
        <td>Ventas del mes </td>
        <td>Meta ventas del mes</td>
      </tr>
      </table>
    </div>
    <div>
    <h3>Venta Anual</h3> 
    <table>
      <th>{{retorno_porcentaje(kpis[1].venta_anual.meta, kpis[1].venta_anual.valor)}}%</th>
    <th>{{kpis[1].venta_anual.valor}}</th>
    <th>{{kpis[1].venta_anual.meta}}</th> 
     <tr>
       <td> </td>
        <td>Ventas del Año</td>
        <td>Meta Ventas del Año</td>
      </tr> 
    </table>  
    </div>


  </div>
      <div class="tablas">
        <div>
        <h2>Ranking de Vendedores</h2>
        <table id="vendedores">
      <tr>
        <th>Id Vendedor</th>
        <th>Vendedor</th>
        <th>Monto</th>
        <th>Unidades</th>
      </tr>
      <tr v-for="(ranking_vendedor, index) in ranking_vendedores" v-bind:key="index">
        <td>{{ ranking_vendedor.id_vendedor}}</td>
        <td>{{ ranking_vendedor.nombre}}</td>
        <td>{{ ranking_vendedor.monto}}</td>
        <td>{{ ranking_vendedor.unidades}}</td>
      </tr>  
    </table> 
    </div>
    <div>
    <h2>Ranking de Productos</h2>
    <table id="productos">
      <tr>
        <th>Cod Producto</th>
        <th>Producto</th>
        <th>Unidades</th>
      </tr>
      <tr v-for="(ranking_producto, index) in ranking_productos" v-bind:key="index">
        <td>{{ ranking_producto.cod_producto}}</td>
        <td>{{ ranking_producto.poducto}}</td>
        <td>{{ ranking_producto.unidades}}</td>
      </tr>  
    </table> 
    </div>

      </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'Home',
  data(){
    return{
      kpis:[],
      ranking_vendedores:[],
      ranking_productos:[],
    }
  },
  components: {
    Navbar
    //HelloWorld
  },
  mounted(){
    axios.get("https://inforcap2020.github.io/front-end/api/v2/dashboard.json").then(resultado =>{
      console.log(resultado)
      this.kpis = resultado.data.kpis;
      this.ranking_vendedores = resultado.data.ranking_vendedores;
      this.ranking_productos = resultado.data.ranking_productos;
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
    min-width:600px;
    margin-bottom:30px;
}

table tr:nth-child(odd){
    background:#2c3e5014;
}
.tablas div{
    width:50%;
    display: inline-block;
    padding: 10px 0px;
    margin:0;
    background:white;
}

.dashboard div{
    width:50%;
    display: inline-block;
    padding: 10px 0px;
    margin:0;
    background:white;
}
</style>
<template>
  <div class="Vendedor">
    <Navbar msg="" />
     <b-breadcrumb>
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">Vendedores</b-breadcrumb-item>
  <b-breadcrumb-item href="#foo">Perfil</b-breadcrumb-item>
  </b-breadcrumb>
    <h1 class= "titulo">Ficha Vendedor</h1>
    <h2>{{vendedor.nombre}}</h2>

    <div>
  <b-tabs content-class="mt-3">
    <b-tab title="General" active>
            <table id="vendedor">
      <tr>
        <p>Id: {{ vendedor.id}}</p>
        <p>Nombre: {{ vendedor.nombre}}</p>
        <p>Email: {{ vendedor.email}}</p>
        <p>Fono: {{ vendedor.fono}}</p>
        <p>Oficina: {{ vendedor.oficina}}</p>
        <p>Manager: {{ vendedor.Manager}}</p>
      </tr>  
    </table> 
    </b-tab>
      
    <b-tab title="Cartera Clientes">
    <table id="cartera">
                     <tr>
        <th>Id Vendedor</th>
        <th>Nombre</th>
        <th>Segmento</th>
        <th>color</th>
        <th>Venta Periodo</th>
        <th>Meta Periodo</th>
        <th>Cumplimiento</th>
      </tr>
      <tr v-for="(carter, index) in cartera" v-bind:key="index">
        <td>{{ carter.id_cliente}}</td>
        <td>{{ carter.nombre}}</td>
        <td>{{ carter.Segmento}}</td>
        <td v-html="color(carter.meta, carter.venta)"></td>
        <td>{{ carter.venta}}</td>
        <td>{{ carter.meta}}</td>
        <td>{{retorno_porcentaje(carter.meta, carter.venta)}}%</td>
      </tr>  
    </table> </b-tab>
    <b-tab title="Cumplimiento">
      <table id="cumplimiento">
        <tr>
        <th>Periodo</th>
        <th>Venta Unid.</th>
        <th>Venta Pesos</th>
        <th>Color</th>
        <th>Meta Periodo</th>
        <th>Cumplimiento</th>
      </tr>
      <tr v-for="(cumplimient, index) in cumplimiento" v-bind:key="index">
        <td>{{ cumplimient.periodo}}</td>
        <td>{{ cumplimient.venta_unidades}}</td>
        <td>{{ cumplimient.venta_pesos}}</td>
        <td v-html="color(cumplimient.meta, cumplimient.venta_pesos)"></td>
        <td>{{ cumplimient.meta}}</td>
         <td>{{retorno_porcentaje(cumplimient.meta, cumplimient.venta_pesos)}}%</td>
      </tr>  
    </table> 
    </b-tab>
  </b-tabs>
</div>

    <br>
    
    <br>

  </div>
</template>
<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: 'Vendedor',
  data(){
    return{
      vendedor:[],
      cartera:[],
      cumplimiento:[],
    }
  },
  components: {
    Navbar
  },
  mounted(){
    axios.get("https://inforcap2020.github.io/front-end/api/v2/ficha_vendedor.json").then(resultado =>{
      console.log(resultado.data.data)
      this.vendedor = resultado.data.vendedor;
      this.cartera = resultado.data.cartera;
      this.cumplimiento = resultado.data.cumplimiento;
    });
  },
  methods:{
    retorno_porcentaje(meta, total){
      return total*100/meta;
    },
    color(meta,venta){
      var total = this.retorno_porcentaje(meta, venta);
      if (total >= 100){
        total = "green"
      }
      else if (total >= 50) {
        total = "yellow"
      }
      else if (total < 50) {
        total = "red"
      }
      return "<span class='color "+total+"'> </span>";
    }
  }
  
}
</script>

<style>
table{
    margin-left: auto;
    margin-right: auto;
    min-width:1000px;
    margin-bottom:30px;
}
table tr:nth-child(odd){
    background:#2c3e5014;
}
span.color.green {
    background: green;
}
span.color.yellow {
    background: yellow;
}
span.color.red {
    background: red;
}
span.color{
    padding: 1px 10px;
    content: "";
    width: 100%;
}
</style>

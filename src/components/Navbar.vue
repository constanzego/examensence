<template>
<div id="app">
  <div id="nav">
  <h1>{{ msg }}</h1>
  <template>
<b-navbar toggleable="sm" type="dark" variant="dark">
  <b-navbar-brand href="/"></b-navbar-brand>
  

  <b-navbar-toggle target="navbar-toggle-collapse">
    <template v-slot:default="{ expanded }">
      <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
      <b-icon v-else icon="chevron-bar-down"></b-icon>
    </template>
  </b-navbar-toggle>

  <b-collapse id="navbar-toggle-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/home"> Home </b-nav-item>
      <b-nav-item href="/vendedores">Vendedores</b-nav-item>
      <b-nav-item href="/vendedor">Perfil</b-nav-item>
        <b-nav-item href="/">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </template>
    </div>
    <router-view />
  </div>
  </template>

  <script>
  export default {
        name: 'Navbar',
        props: {
            title: String
        }
    }
  </script>
  <style>
  h3 {
        margin: 00px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    } 
    #img{
      max-width: 45px;
    }
  </style>
<template>
   <div class="search"> 
       <SearchProperty></SearchProperty>
       
       <hr>
       </div>
  <div class="wrapper">
   
   
    <div v-for="item in propiedades" :key="item.id" class="item text-center">
      <h1>{{ item.Title }} </h1>
      <h2>{{ item.Location }} </h2>
      <h3>{{ item.Description }} </h3>
      <h2>$ {{ item.Value }} </h2>
      
      <div>
        <router-link :to="{ name: 'DetailView', params: { id: item.id } }" class="btn btn-success">Show Detail</router-link>

      </div>
  
    </div>
  </div>
</template>

<script>

import DetailView from './DetailView.vue';
import {properties} from '../assets/db';
import SearchProperty from '../components/icons/SearchProperty.vue';

export default {
    data() {
        return {
            count: 1,
            propiedades: [],
            showDetailView: false,
            selectedProperty: null, // Define selectedProperty property
        };
    },
    components() {
        DetailView;
        SearchProperty;
    },
    methods: {
        ShowDetail(property) {
            this.selectedProperty = property;
            this.showDetailView = true;
        },
        loadPropriedades() {
            this.propiedades = properties;
        }
    },
    mounted() {
        this.loadPropriedades();
    }
   
}
</script>

<style>
body {
  padding: 0 24px;
  margin: 0;
  height: 100vh;
}
.search{
  background-color: blue;
  margin: 30px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}

.item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 4px;
  background-color: rgb(228, 221, 221);
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  padding: auto;
  margin: 10px;
}

.botao {
  min-width: 130px;
  margin: 30px;

}
</style>

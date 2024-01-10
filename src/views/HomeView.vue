
<script>

import DetailView from './DetailView.vue';
import { properties } from '../assets/db';
import SearchProperty from '../components/icons/SearchProperty.vue';

export default {
  data() {
    return {
      count: 1,
      propiedades: [],
      showDetailView: false,
      selectedProperty: null,
      searchModel: {
        beds: 1,
        bath: 1,
        park: 1,
        price: 250000

      }
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
    },
    filterProps() {
      // Extract the filter criteria from the form fields
      const { beds, bath, park, price } = this.searchModel;

      // Use the `filter` method to filter the properties based on the criteria
      this.propiedades = properties.filter((property) => {
        return (
          property.beds >= beds &&     // Adjusted property names to lowercase
          property.bath >= bath &&
          property.park >= park &&
          property.Value <= price    // Assuming "Value" is the price property
        );
      });
    },

    updateValue(event) {
      this.price = event.target.value;
    }
  },
  mounted() {
    this.loadPropriedades();
  },

}
</script>

<template>
  <div class="mt-5">
    <form @submit.prevent="filterProps" class="search-form">
      <div class="form-group">
        <label for="beds" class="form-label">Bedrooms:</label>
        <input type="number" class="form-control" id="beds" v-model="searchModel.beds">
      </div>

      <div class="form-group">
        <label for="bath" class="form-label">Bathrooms:</label>
        <input type="number" class="form-control" id="bath" v-model="searchModel.bath">
      </div>

      <div class="form-group">
        <label for="park" class="form-label">Parking:</label>
        <input type="number" class="form-control" id="park" v-model="searchModel.park">
      </div>

      <div class="form-group">
        <label for="price" class="form-label">Price Range: $ {{ searchModel.price }}</label>
        <input type="range" class="form-control" id="price" name="price" min="50000" max="800000" step="10000"
          @input="updateValue" v-model="searchModel.price">
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary mt-2">Search</button>
      </div>
    </form>
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

<style scoped>
body {
  padding: 0 24px;
  margin: 0;
  height: 100vh;
}

.search-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}

.item {
  flex: 0 0 calc(33.33% - 20px);
  box-sizing: border-box;
  padding: 20px;
  background-color: rgb(228, 221, 221);
  margin: 10px;
}

.botao {
  min-width: 130px;
  margin: 30px;
}
</style>

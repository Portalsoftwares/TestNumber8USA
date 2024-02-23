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
        <input type="range" class="form-control" id="price" name="price" min="50000" max="800000" step="10000" @input="updateValue" v-model="searchModel.price">
      </div>

      <div class="form-group d-flex justify-content-center">
        <button type="submit" class="btn btn-primary mt-2">Search</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.search-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.form-group {
  flex: 1 0 20%; /* Adjust as needed */
  margin-right: 10px;
}

@media (max-width: 768px) {
  .form-group {
    flex: 1 0 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>

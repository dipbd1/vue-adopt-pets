<template>
  <div>
    <h1>{{ speciesToShow }} For Adoption</h1>
    <b-table striped hover :items="data">
      <template v-slot:cell(name)="data">
        <router-link v-bind:to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      speciesToShow: '',
    };
  },
  props: {
    species: String,
    data: Array,
  },
  mounted() {
    this.speciesToShow = this.species.charAt(0).toUpperCase() + this.species.slice(1);
  },
};
</script>

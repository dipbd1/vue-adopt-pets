<template>
  <div v-if="showPet">
    <h1>{{ animal.name }} ({{ this.$route.params.species }})</h1>
    <p>{{ animal.age }} years old</p>
    <p>{{ animal.breed }}</p>
    {{ showPet }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Pet',
  data() {
    return {
      animal: {},
      showPet: false,
    };
  },
  watch: {
    $route() {
      if (Object.keys(this.$route.params).length === 0) {
        this.showPet = false;
        this.animal = null;
      }
    },
  },
  computed: {
    ...mapState(['cats', 'dogs']),
  },
  mounted() {
    this.showPet = true;
    const animalFromComponent = this[this.$route.params.species][this.$route.params.id];
    this.animal = animalFromComponent;
  },
};
</script>

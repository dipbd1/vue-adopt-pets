<template>
  <div class="home">
    <h1>Add a Friend in your Home</h1>
    <!-- {{getAllCats.length}} -->
    <h3>Current Animals: {{animalsCount}}</h3>
    <br/>
    <button class="btn btn-primary" v-on:click="togglePetForm">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="formData.age"
          required
          min="0"
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      showPetForm: false,
      formData: { name: '', age: 0, species: null },
    };
  },
  computed: {
    ...mapGetters(['animalsCount', 'getAllCats']),
  },
  methods: {
    ...mapActions(['addPet']),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, name, age } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      this.addPet(payload);
      // Reset form after Submit
      this.formData = { name: '', age: 0, species: null };
    },
  },
};
</script>

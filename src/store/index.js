import Vue from 'vue';
import Vuex from 'vuex';

import cats from '@/data/cats';
import dogs from '@/data/dogs';

import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats,
    dogs,
    pets: [...cats, ...dogs],
  },
  mutations: {
    appendPet: (state, { species, pet }) => {
      state[species].push(pet);
    },
  },
  actions: {
    addPet: (context, payload) => {
      context.commit('appendPet', payload);
    },
  },
  getters,
  modules: {},
});

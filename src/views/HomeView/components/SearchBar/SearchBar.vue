<template>
  <div>
    <v-subheader class="d-flex justify-space-between">
      Headline
      <v-btn dark @click="openFilter"> FITTER </v-btn>
    </v-subheader>
    <v-navigation-drawer :value.sync="isOpenFilter" absolute right temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Filter option </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="search.q"
              counter
              maxlength="50"
              label="Keyword"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-autocomplete
            v-model="search.source"
            label="Source"
            clearable
          ></v-autocomplete>
        </v-list-item>
        <v-list-item class="d-flex justify-end">
          <v-btn dark @click="findNews(search)"> FITTER </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SearchBar',
  computed: {
    ...mapState({
      isOpenFilter: (state) => state.isOpenFilter,
      search: (state) => state.search,
    }),
  },
  methods: {
    ...mapActions(['findNews', 'openFilter']),
  },
};
</script>

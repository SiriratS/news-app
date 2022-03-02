<template>
  <div>
    <v-subheader class="d-flex justify-space-between px-5 py-3">
      <div data-testid="home-sub-header">
        <v-btn text data-testid="home-button" @click="findNews()"> Headline </v-btn>
        <span v-if="isExistingSearchParams()">
          / <v-btn text @click="findNews(search)"> {{ searchCriteria }} </v-btn>
        </span>
      </div>
    </v-subheader>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'SearchHistory',
  computed: {
    ...mapState({
      search: (state) => state.search,
      searchCriteria: (state) => state.searchCriteria,
    }),
  },
  methods: {
    ...mapActions(['findNews']),

    ...{
      isExistingSearchParams() {
        return (
          !!this.search?.q
          || !!this.search?.sources?.length
          || this.search?.country?.value
          || this.search?.category?.value
        );
      },
    },
  },
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <SearchBar />
        <SearchHistory />
      </v-col>
    </v-row>
    <v-row v-if="newsItems.length && !errorMessage">
      <v-col cols="12" sm="6" xs="12" lg="3" v-for="(item, index) in newsItems" :key="item.title">
        <NewsItem v-bind:data="item" v-bind:index="index" />
      </v-col>
    </v-row>
    <v-row v-if="(!newsItems.length || errorMessage)  && !isLoading">
      <v-col cols=12>
        <GeneralError
          :message="errorMessage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import GeneralError from '@/component/GeneralError/GeneralError.vue';
import SearchBar from './components/SearchBar/SearchBar.vue';
import NewsItem from './components/NewsItem/NewsItem.vue';
import SearchHistory from './components/SearchHistory/SearchHistory.vue';

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    NewsItem,
    GeneralError,
    SearchHistory,
  },
  methods: {
    ...mapActions(['findNews']),
  },
  computed: mapState(['newsItems', 'errorMessage', 'isLoading']),
  created() {
    this.findNews();
  },
};
</script>

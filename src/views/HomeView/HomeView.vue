<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <SearchBar />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="12" lg="4">
        <NewsItem />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBar from './components/SearchBar/SearchBar.vue';
import NewsItem from './components/NewsItem/NewsItem.vue';

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    NewsItem,
  },
  data() {
    return {
      newsItems: [],
    };
  },
};
</script>

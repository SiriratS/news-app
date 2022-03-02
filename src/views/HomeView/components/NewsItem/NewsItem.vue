<template>
  <v-card data-test="news-item" class="mx-auto d-flex flex-column news-item" height="100%">
    <v-img
      :src="data.urlToImage"
      lazy-src="../../../../assets/default.jpeg"
      class="align-end font-color-white flex-grow-1 flex-shrink-1"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title class="text-caption" v-text="data.title"></v-card-title>
    </v-img>

    <v-card-actions class="d-flex justify-space-between flex-grow-0 flex-shrink-0">
      <span class="primary--text text-caption" v-html="data.author"></span>
      <span class="text-caption flex-grow-0 flex-shrink-0 align-self-end ml-15">
        {{ formatDate(data.publishedAt) }}
      </span>
    </v-card-actions>

    <v-overlay class="news-item-overlay" absolute color="#036358">
      <div class="d-flex flex-column">
        <EditTitleDialog :title="data.title" :index="index" />
        <v-btn :to="'/news/' + index">See more info</v-btn>
      </div>
    </v-overlay>
  </v-card>
</template>

<script lang="ts">
import { Headline } from '../../../../interface/headline';
import EditTitleDialog from './components/EditTitleDialog.vue';

export default {
  name: 'NewsItem',
  components: {
    EditTitleDialog,
  },
  props: {
    data: Object as () => Headline,
    index: Number,
  },
  methods: {
    formatDate(date: string) {
      return new Date(date).toDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "NewsItem.scss";
</style>

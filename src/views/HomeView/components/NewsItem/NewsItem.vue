<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto d-flex flex-column" height="100%">
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

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358">
            <v-btn :to="'/news/' + index">See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script lang="ts">
import { Headline } from '../../../../interface/headline';

export default {
  name: 'NewsItem',
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

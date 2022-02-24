<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto" max-width="344">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

        <v-card-text>
          <h2 class="text-h6 primary--text">{{ data.title }}</h2>
          {{ data.description }}
        </v-card-text>

        <v-card-title class="d-flex justify-space-between">
          <span class="primary--text text-caption">{{ data.author }}</span>
          <span class="text-caption">{{ formatDate(data.publishedAt) }}</span>
        </v-card-title>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358">
            <v-btn  to="/news/0">See more info</v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'NewsItem',
  data() {
    return {
      data: {
        publishedAt: new Date().toISOString(),
        title: 'xxxxxxxx',
        author: 'aaaaa bbbbbb',
        description: 'asdfmalfdmalksefnalksnflksef',
      },
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "NewsItem.scss";
</style>

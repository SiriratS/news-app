<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
          class="align-end font-color-white"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <v-card-title v-text="data.title"></v-card-title>
        </v-img>

        <v-card-actions class="d-flex justify-space-between">
          <span class="primary--text text-caption">{{ data.author }}</span>
          <span class="text-caption">{{ formatDate(data.publishedAt) }}</span>
        </v-card-actions>

        <v-fade-transition>
          <v-overlay v-if="hover" absolute color="#036358">
            <v-btn to="/news/0">See more info</v-btn>
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

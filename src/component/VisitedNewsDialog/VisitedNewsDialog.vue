<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" outlined v-bind="attrs" v-on="on" v-if="visitedNews.length">
        Show visited news
      </v-btn>
    </template>
    <v-card class="visited-news">
      <v-card-title>Visited news</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="visited-news-list">
        <v-list dense>
          <v-list-item v-for="(newsTitle, index) in visitedNews" :key="index">
            <v-list-item-title v-text="newsTitle"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn text @click="toggleDialog(dialog)"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  name: 'VisitedNewsDialog',
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    toggleDialog(dialog: boolean) {
      this.dialog = !dialog;
    },
  },
  computed: mapState(['visitedNews']),
};
</script>

<style lang="scss" scoped>
@import "VisitedNewsDialog.scss";
</style>

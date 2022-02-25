<template>
  <v-app>
    <v-app-bar dense dark app>News</v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: mapState(['isLoading']),
};
</script>

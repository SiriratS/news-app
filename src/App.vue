<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>News</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
})
export default class App extends Vue {}
</script>

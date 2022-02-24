<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-subheader>
          <v-btn dark @click="back()">← Go Back</v-btn>
        </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewsDetailView',
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
    back() {
      this.$router.go(-1);
    },
    formatDate(date) {
      return new Date(date).toDateString();
    },
  },
};
</script>

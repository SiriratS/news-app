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
        <v-card>
          <div class="d-flex flex-column flex-md-row justify-md-space-between">
            <v-img class="align-self-center align-md-self-center"
              :src="data.urlToImage" max-width="500">
            </v-img>
            <div class="d-flex flex-column justify-md-space-between">
              <div>
                <v-card-title class="text-h5" v-text="data.title"></v-card-title>
                <v-card-subtitle class="d-flex justify-space-between">
                  <span class="primary--text text-caption">{{ data.author }}</span>
                  <span class="text-caption">{{ formatDate(data.publishedAt) }}</span>
                </v-card-subtitle>
                <v-card-text>{{data.content}}</v-card-text>
              </div>
              <v-card-actions class="d-flex justify-end">
                <v-btn dark target="_blank" :href="data.url">See more →</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
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
        url: 'https://www.prnewswire.com/news-releases/truecar-releases-analysis-of-february-industry-sales-301490441.html',
        content: `After a volatile 2021 in terms of pricing and supply, 
          this month we're seeing signs of stability. From a supply standpoint, 
          we're seeing industry new listings roughly in line with January. Additiona… [+19234 chars]`,
        urlToImage: 'https://mma.prnewswire.com/media/1754090/TruearNewCarListingGraph.jpg?p=facebook',
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

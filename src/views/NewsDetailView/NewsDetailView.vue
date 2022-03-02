<template>
  <v-container fluid v-if="news">
    <v-row>
      <v-col cols="12">
        <SubHeader />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row>
            <v-col sm="6" xs="12">
              <v-img class="align-self-center align-md-self-center"
                :src="news.urlToImage"
                width="100%"
                height="100%"
                lazy-src="../../assets/default.jpeg"
              >
              </v-img>
            </v-col>
            <v-col sm="6" xs="12" class="d-flex flex-column justify-md-space-between">
              <div>
                <v-card-title class="text-h5" v-text="news.title"></v-card-title>
                <v-card-subtitle class="d-flex justify-space-between flex-grow-0 flex-shrink-0">
                  <span class="primary--text text-caption" v-html="news.author"></span>
                  <span class="text-caption flex-grow-0 flex-shrink-0 align-self-end ml-15">
                    {{ formatDate(news.publishedAt) }}
                  </span>
                </v-card-subtitle>
                <v-card-text>{{news.content}}</v-card-text>
              </div>
              <v-card-actions class="d-flex justify-end">
                <v-btn dark target="_blank" :href="news.url">See more →</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SubHeader from '@/component/SubHeader/SubHeader.vue';

export default {
  name: 'NewsDetailView',
  components: {
    SubHeader,
  },
  methods: {
    ...mapActions(['findNewsByIndex']),
    ...{
      formatDate(date) {
        return new Date(date).toDateString();
      },
    },
  },
  computed: mapState(['news']),
  created() {
    this.findNewsByIndex(+this.$route.params.index);
    if (!this.news) {
      this.$router.push('/');
    }
  },
};
</script>

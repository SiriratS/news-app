<template>
  <div>
    <v-card outlined class="d-flex justify-space-between px-5 py-3">
      <div data-testid="home-sub-header">
        <v-btn
          outlined
          data-testid="home-button"
          @click="findNews()"
        > Headline </v-btn>
        <span v-if="isExistingSearchParams()">
          / <v-btn outlined @click="findNews(search)"> {{ searchCriteria }} </v-btn>
        </span>
      </div>
      <v-btn
        dark
        @click="toggleFilter(isOpenFilter)"
        data-testid="filter-button"
      > FITTER </v-btn>
    </v-card>
    <v-navigation-drawer
      :value.sync="isOpenFilter"
      fixed
      right
      temporary
      @transitionend="toggleFilter(isOpenFilter)"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 d-flex justify-space-between">
            <span class="d-flex align-self-center">Filter option</span>
            <v-btn
              icon
              color="black"
              data-testid="close-filter-button"
              @click="toggleFilter(isOpenFilter)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-text-field
              v-model="searchForm.q"
              counter
              data-testid="keyword"
              maxlength="50"
              label="Keyword"
            ></v-text-field>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-autocomplete
            v-model="searchForm.sources"
            label="Source"
            :items="sources"
            :disabled="!!searchForm.country || !!searchForm.category"
            item-text="label"
            item-value="value"
            multiple
            small-chips
            clearable
            data-testid="sources"
            return-object
          ></v-autocomplete>
        </v-list-item>
        <v-list-item>
          <v-autocomplete
            v-model="searchForm.country"
            label="Country"
            :disabled="!!(searchForm.sources && searchForm.sources.length) || !!searchForm.category"
            :items="countries"
            item-text="label"
            item-value="value"
            clearable
            data-testid="country"
            return-object
          ></v-autocomplete>
        </v-list-item>
        <v-list-item>
          <v-autocomplete
            v-model="searchForm.category"
            label="Category"
            :disabled="!!(searchForm.sources && searchForm.sources.length) || !!searchForm.country"
            :items="categories"
            item-text="label"
            item-value="value"
            clearable
            data-testid="category"
            return-object
          ></v-autocomplete>
        </v-list-item>
        <v-list-item class="d-flex justify-end">
          <v-btn dark
            data-testid="submit-filter-button"
            @click="submit(searchForm)">
            FITTER
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

function formReset() {
  return {
    q: '',
    sources: [],
    country: '',
    category: '',
  };
}

export default {
  name: 'SearchBar',
  data() {
    return {
      searchForm: formReset(),
    };
  },
  computed: {
    ...mapState({
      isOpenFilter: (state) => state.isOpenFilter,
      search: (state) => state.search,
      searchCriteria: (state) => state.searchCriteria,
      countries: (state) => state.countries,
      sources: (state) => state.sources,
      categories: (state) => state.categories,
    }),
  },
  methods: {
    ...mapActions(['findNews', 'toggleFilter', 'fetchSource']),

    ...{
      isExistingSearchParams() {
        return !!this.search?.q
          || !!this.search?.sources?.length
          || this.search?.country?.value
          || this.search?.category?.value;
      },

      submit(searchForm) {
        this.findNews(searchForm);
        this.searchForm = formReset();
      },
    },
  },
  created() {
    if (this.countries && this.sources && this.countries) {
      return;
    }

    this.fetchSource();
  },
};
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-subheader>
          <v-btn data-testid="back-button" dark @click="back()">← Go Back</v-btn>
        </v-subheader>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <GeneralError
          message="404 Page not found"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GeneralError from '@/component/GeneralError/GeneralError.vue';

export default {
  name: 'ErrorView',
  components: {
    GeneralError,
  },
  methods: {
    ...{
      back() {
        this.$router.go(-1);
      },
    },
  },
};
</script>

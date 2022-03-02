<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <SubHeader />
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
import SubHeader from '@/component/SubHeader/SubHeader.vue';

export default {
  name: 'ErrorView',
  components: {
    GeneralError,
    SubHeader,
  },
};
</script>

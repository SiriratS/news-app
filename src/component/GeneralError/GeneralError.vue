<template>
  <v-card>
    <v-row>
      <v-col sm="6" xs="12">
        <v-img
          class="align-self-center align-md-self-center"
          src="../../assets/sad-face.png"
          width="100%"
          height="100%"
        >
        </v-img>
      </v-col>
      <v-col sm="6" xs="12" class="d-flex flex-column justify-center">
        <v-card-title class="text-h1">Sorry</v-card-title>
        <v-card-text data-testid="error-message" class="text-h5">{{ message }}</v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'GeneralError',
  props: {
    message: null,
  },
};
</script>

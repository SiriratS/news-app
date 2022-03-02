<template>
  <v-subheader>
    <v-btn dark class="mr-5" @click="back()">← Go Back</v-btn>
    <VisitedNewsDialog />
  </v-subheader>
</template>

<script lang="ts">
import VisitedNewsDialog from '@/component/VisitedNewsDialog/VisitedNewsDialog.vue';

export default {
  name: 'SubHeader',
  components: {
    VisitedNewsDialog,
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

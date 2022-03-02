<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn data-testid="edit-title-button"
        v-bind="attrs"
        v-on="on"
        class="mb-5"
      >Edit title</v-btn>
    </template>
    <v-card>
      <v-card-title>
          Edit title
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="editingTitle"
          counter
          data-testid="title"
          maxlength="255"
          label="Title"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text
          data-testid="edit-title-submit-button"
          color="teal"
          @click="submit()"
        > Submit </v-btn>
        <v-btn text color="gray" @click="cancel()"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'EditTitleDialog',
  props: {
    index: Number,
    title: String,
  },
  data() {
    return {
      dialog: false,
      editingTitle: '',
    };
  },
  methods: {
    ...mapActions(['submitNewsTitle']),
    ...{
      cancel() {
        this.dialog = false;
        this.editingTitle = this.title;
      },
      submit() {
        this.submitNewsTitle({
          title: this.editingTitle,
          index: this.index,
        });

        this.dialog = false;
      },
    },
  },
  created() {
    this.editingTitle = this.title;
  },
};
</script>

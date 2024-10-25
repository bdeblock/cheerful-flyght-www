<script setup>
  function validEmail() {return false}
</script>

<template>
  <v-btn class="mx-2" rounded="xl" variant="text">Nous contacter
    <v-dialog activator="parent" max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">
              Nous contacter
            </div>
            <v-btn
              icon="mdi-close"
              variant="text"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-title>
          <v-card-text class="text-body-2 text-sm-body-1">
            <v-list>
              <v-list-item
                append-icon="mdi-message-text"
                prepend-icon="mdi-phone"
                title=""
                href="tel:+33662246879"
              >06 62 24 68 79</v-list-item>
              <v-divider inset></v-divider>
              <v-list-item
                prepend-icon="mdi-email"
                title=""
                href="mailto:gaetan@lenvolee-vins.fr"
              >gaetan@lenvolee-vins.fr</v-list-item>
              <v-divider inset></v-divider>
              <v-list-item
                prepend-icon="mdi-map-marker"
                title=""
              >Domaine l'Envolée, 30 rue de l'Onglée <br /> 49290 Chalonnes-sur-Loire</v-list-item>
            </v-list>
            <v-divider class="mt-2"></v-divider>
            <div class="mb-2">Message (300 caractères maxi)</div>
            <v-textarea
              :counter="300"
              class="mb-2"
              rows="3"
              variant="outlined"
              persistent-counter
            ></v-textarea>
            <v-text-field
              v-model="email"
              label="Email* (obligatoire)"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="d-flex justify-end">
            <v-btn
              class="text-none"
              color="primary"
              rounded="xl"
              text="Envoyer"
              variant="flat"
              @click="isActive.value = false"
              :disabled="validEmail"
            ></v-btn>
            <v-btn
              class="text-none bg-secondary"
              rounded="xl"
              text="Annuler"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-btn>
</template>
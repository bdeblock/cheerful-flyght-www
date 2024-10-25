<template>
  <v-btn class="mx-2" rounded="xl" variant="text">CGV
    <v-dialog activator="parent" max-width="800" scrollable>
      <template v-slot:default="{ isActive }">
        <v-card class="bg-surface-variant" rounded="lg" fluid>
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">
              Conditions Générales de Vente
            </div>
            <v-btn
              icon="mdi-close"
              variant="text"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-title>
          <v-row dense class="px-8">
            <!--v-col cols="12">
              <v-img class="rounded-pill" src="images/carteDuVignoble.png"/>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="10">
              <v-img class="rounded-xl" src="images/carteDeFrance.png"/>
            </v-col-->
          </v-row>
        </v-card>
      </template>
    </v-dialog>
  </v-btn>
</template>
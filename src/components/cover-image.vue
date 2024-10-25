<template>
  <v-sheet class="mt-n16 mt-lg-0">
    <v-skeleton-loader type="image">
      <v-parallax
        class="height-screen h-sm-screen"
        src="src/images/couverture_red2.jpg"
        max-height="750px"
        position="absolute top-0 left-0"
        cover
      ></v-parallax>
      <v-card class="fill-height w-100 position-absolute mt-12 mt-sm-0" color="transparent">
      <v-img
          max-height="75%"
          src="src/images/logo-removebg.png"
          alt="logo L'Envolée"
          class="mb-auto mt-lg-12"
        ></v-img>
        <div class="d-flex justify-space-evenly mb-6">
          <v-btn class="text-sm-h6" color="#d8897c" readonly>Naturel</v-btn>
          <v-btn class="text-sm-h6" color="#d58a50" readonly>Partage</v-btn>
          <v-btn class="text-sm-h6" color="#a1a781" readonly>Convivialité</v-btn>
        </div>
      </v-card>
    </v-skeleton-loader>
  </v-sheet>
</template>

<style scoped>
.v-parallax {
    filter: sepia(80%);
  }
</style>
<script setup>
  const { ref, computed } = Vue
  const { createVuetify } = Vuetify
  const vuetify = createVuetify()
  
  const drawer = ref(vuetify.display.lgAndUp.value)
  const lienFacebook = "https://facebook.com/share/cHcCKP4YVB8xDH3P/";
  const lienTwitter = "https://www.instagram.com/domainelenvolee?igsh=eDBobmZ0a2hmbmNr/";
</script>

<template>
  <div v-if="!$vuetify.display.lgAndUp && !drawer">
    <v-app-bar flat class="bg-transparent px-md-4">
      <v-app-bar-nav-icon
        class="bg-white"
        @click="drawer = !drawer"
        base-color="surface-variant" elevation="3" size="large"
      >
        <template v-slot:prepend>
          <v-btn icon="$menu"></v-btn>
        </template>
      </v-app-bar-nav-icon>
    </v-app-bar>
  </div>
  <v-navigation-drawer
    v-model="drawer"
    expand-on-hover
    :rail="$vuetify.display.lgAndUp"
  >
    <v-list class="d-flex flex-column fill-height" density="compact" nav>
      <v-list>
        <v-list-item prepend-avatar="src/images/v2.png" title="Domaine l'Envolée">
          <template v-slot:prepend>
            <v-avatar class="ml-n2" rounded="lg"></v-avatar>
          </template>
          <v-list-item-subtitle class="pl-4 opacity-80">
            <v-img :width="100" src="src/images/logo-removebg.png"></v-img>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>		    	
      <div class="mb-auto">
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="Nous connaître"
          value="nousConnaitre"
          href="#nousConnaitre"
          @click="drawer= $vuetify.display.lgAndUp || !drawer"
        ></v-list-item>
        <v-list-item
          prepend-icon="fa-solid fa-champagne-glasses"
          title="Nos Vins" value="nosVins"
          href="#nosVins"
          @click="drawer= $vuetify.display.lgAndUp || !drawer"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-cart"
          title="Commander"
          value="commander"
          href="#commander"
          @click="drawer= $vuetify.display.lgAndUp || !drawer"
        ></v-list-item>
      </div>
      <v-list-item
        prepend-icon="mdi-earth"
        value="nousSuivre"
        href="#nousSuivre"
        @click="drawer= $vuetify.display.lgAndUp || !drawer"
      >
        <v-list-item-title class="pl-3 mt-auto">Nous suivre :</v-list-item-title>
          <v-btn icon="mdi-facebook" variant="text" :href="lienFacebook" value="facebook"></v-btn>
          <v-btn icon="mdi-instagram" variant="text" :href="lienTwitter" value="twitter"></v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
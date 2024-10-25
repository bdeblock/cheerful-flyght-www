<!-- js/vue-components/vue-footer.vue -->

<script setup>
  import FooterContactUs from "./footer-contact-us.vue"
  import FooterCgv from "./footer-cgv.vue"
  import FooterTermsOfService from "./footer-terms-of-service.vue"
  const {inject} = Vue
  //const lienFacebook = "https://facebook.com/share/cHcCKP4YVB8xDH3P/";
  const lienFacebook = inject('lienFacebook')
  const lienTwitter = "https://www.instagram.com/domainelenvolee?igsh=eDBobmZ0a2hmbmNr/";
  
  defineProps({
    compo: {
      type: String,
      default: '0',
    },
  })
</script>

<template>
  <v-footer class="d-flex flex-column pt-2 pa-sm-2 elevation-10" id="nousSuivre">
    <v-row  class="" justify="center" no-gutters>
      <v-col cols="0" sm="1" md="2" lg="3"></v-col>
      <v-col cols="12" sm="10" md="8" lg="6" class="d-flex align-center text-center px-4">
        <strong>Rejoignez nous sur les réseaux sociaux !</strong>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-facebook" class="mx-4" variant="plain" :href="lienFacebook" value="facebook"></v-btn>
        <v-btn icon="mdi-instagram" class="mx-4" variant="plain" :href="lienTwitter" value="twitter"></v-btn>
      </v-col>
      <v-col cols="0" sm="1" md="2" lg="3"></v-col>
      
      <footer-contact-us></footer-contact-us>
      <footer-cgv></footer-cgv>
      <footer-terms-of-service></footer-terms-of-service>

  <!--Copyright &copy; $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-->
      <v-col class="px-4 py-2 text-center w-100" cols="12">
        Copyright <v-icon icon="mdi-copyright"></v-icon> {{ new Date().getFullYear() }} <strong>L'Envolée</strong>  — 
        Tous droits réservés à <strong>L'Envolée</strong>
      </v-col>
      <v-col class="text-body-2 text-red" cols="12">
        <!--{{colorList}}-->
      </v-col>
    </v-row>
  </v-footer>
</template>
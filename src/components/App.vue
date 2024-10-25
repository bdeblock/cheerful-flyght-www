<script setup>
  import VueNavigation from "./vue-navigation.vue"
  import CoverImage from "./cover-image.vue"
  import DiscoverUs from "./discover-us.vue"
  import OurWines from "./our-wines.vue"
  import Order from "./order.vue"
  import FooterMain from "./footer-main.vue"
  const { ref, computed, provide } = Vue

  const nomTheme = 'light'
  provide('lienFacebook', "https://facebook.com/share/cHcCKP4YVB8xDH3P/")

/*  const message = 'Hello World !!'
  const headline = 'Vue Main Component Headline'
  const count = ref(0)
  const computedMessage = computed(() => {
    return 'Hello'
  })*/

  /*defineOptions({
    layout: FooterMain
  })*/
  
</script>
<!-- js/vue-components/vue-main-component.vue -->

<template>
  <v-app :theme="nomTheme">
    <v-responsive class="align-center fill-height mx-auto"  max-width="1600">
        <vue-navigation></vue-navigation>
        <v-main>
        <cover-image></cover-image>
        <discover-us></discover-us>
        <our-wines></our-wines>
        <order></order>
        </v-main>
        <footer-main></footer-main>
        <!--div>
          <h2>{{ headline }}</h2>
          <vue-footer compo="main"></vue-footer>
          <p>{{message}} {{computedMessage}}</p>
          <v-btn @click="count++">Add 1</v-btn>
          <p>Count is: {{ count }}</p>
        </div-->
    </v-responsive>
  </v-app>
</template>



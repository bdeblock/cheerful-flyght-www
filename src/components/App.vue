<script setup>
  import VueNavigation from "./vue-navigation.vue"
  import FooterMain from "./footer-main.vue"
  const { ref, computed, provide } = Vue

  const nomTheme = 'dark'
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
    <v-responsive class="align-center fill-height"  max-width="1600">
        <vue-navigation></vue-navigation>
        <v-main>
          <!--home></home-->
          <router-view></router-view>
          <!--router-view class="bg-surface-variant" v-slot="{ Component }">
            <component
            :is="Component"
            message="message test"
            />
          </router-view-->
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



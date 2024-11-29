// js/vue-app.js
//https://webdeasy.de/en/vue-app-without-build-tool/

const { createApp, onMounted } = Vue;
const { loadModule } = window['vue3-sfc-loader'];
const { createVuetify } = Vuetify

const vuetify = createVuetify()

/*const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})*/

const options = {
  moduleCache: {
    vue: Vue,
  },
  getFile(url) {
    return fetch(url).then((resp) =>
      resp.ok ? resp.text() : Promise.reject(resp)
    );
  },
  addStyle(styleStr) {
    const style = document.createElement('style');
    style.textContent = styleStr;
    const ref = document.head.getElementsByTagName('style')[0] || null;
    document.head.insertBefore(style, ref);
  },
  log(type, ...args) {
    console.log(type, ...args);
  },
};

const app = createApp({
  setup() {
    onMounted(() => {
      const message = 'the component is now mounted.';
      console.log(message)
    })
  },
  components: {
    MainApp: Vue.defineAsyncComponent(() =>
      loadModule('src/components/App.vue', options)
    ),
  },
}).use(vuetify).mount('#app');  //.use(router).mount('#app');

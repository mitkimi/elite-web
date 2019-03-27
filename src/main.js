// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import VueHighlightJS from 'vue-highlightjs'
import App from './App'
import router from './router'

// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'
import 'highlight.js/styles/github.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.use(mavonEditor)
Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    vue
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// by mitkimi

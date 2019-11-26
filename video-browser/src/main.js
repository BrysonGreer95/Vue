import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   render: function(createElement){
//     return createElement(App);
//   }
// This block of code above does the same thing as what is below
new Vue({
  render: h => h(App)
}).$mount('#app');

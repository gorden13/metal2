import Vue from 'vue'

Vue.filter('formatNumberMain', (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
})
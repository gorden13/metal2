import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

// настройки плагина
const settings = { 
  apiKey: 'ca913e0d-396f-41fb-aba4-8537720869c5',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1' 
} 

Vue.use(YmapPlugin, settings);
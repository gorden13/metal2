<template>
  <yandex-map
    v-if="showMap"
    :coords="coords"
    :controls="[]"
    :zoom="zoom"
    @map-was-initialized="initHandler"
    :options="{ 
      suppressMapOpenBlock: true,
      autoFitToViewport: 'always'
    }"
    :cluster-options="{
    1: { 
      clusterDisableClickZoom: false, 
      hasBalloon: false 
    }}"
  >
    <ymap-marker
      v-for="(location, index) in placemarks"
      :key="index"
      :marker-id="index"
      marker-type="placemark"
      :coords="location"
      @click="getDataOfCoords"
      cluster-name="1"
    ></ymap-marker>
  </yandex-map>
</template>

<script>
export default {
  data: () => {
    return {
      showMap: false
    }
  },
  props: {
    placemarks: {
      type: Array,
      required: true
    },
    coords: {
      type: Array,
      required: true
    },
    zoom: {
      type: Number,
      default: 12,
      required: true
    }
  },
  methods: {
    initHandler(obj) {
      this.map = obj
    },
    getDataOfCoords(e) {
      // console.log(e);
      // this.$emit("set-coords", obj.get("coords"));
      // const coords = obj.get("coords").join();
      // const clust = this.map.geoObjects.get(0);

      // this.$bus.$emit("get-data-point", coords);
    }
  },
  mounted() {
    this.showMap = true
  }
}
</script>
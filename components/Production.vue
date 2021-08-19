<template>
  <section class="production">
    <div class="production_wrap">
      <h2 class="production__title">
        У нас собственное производство, работаем без посредников
      </h2>
      <p class="production__description">
        Выполняем заказы на изготовление навесов любых размеров<br/> и вариантов конструкции, по типовым или индивидуальным проектам
      </p>
      <div class="production__slider-block">
        <VueSlickCarousel 
          :infinite="true"
          :draggable="false"
          :slidesToShow="2" 
          :slidesToScroll="2" 
          :speed="500" 
          :fade="false" 
          :edgeFriction="0.35" 
          :arrows="true" 
          :dots="true"
        >
          <div><img src="~/assets/images/production/p1.png" alt="Производство 1"></div>
          <div><img src="~/assets/images/production/p2.png" alt="Производство 2"></div>
          <div><img src="~/assets/images/production/p1.png" alt="Производство 1"></div>
          <div><img src="~/assets/images/production/p2.png" alt="Производство 2"></div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {
    VueSlickCarousel
  }
}
</script>
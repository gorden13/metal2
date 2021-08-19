<template>
  <section class="about">
    <div class="about_wrap">
      <div class="about__left-block">
        <h2 class="about__title">Изготовим и установим навес под ключ в Самаре и области от 49 840₽ за 14 дней с гарантией до 15 лет</h2>
        <ul class="about__items">
          <li class="about__item"  
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="about__item_img">
              <img :src="require(`~/assets/images/about/${item.img}.svg`)" />
            </div>
            <div class="about__item_right">
              <h4>{{ item.title }}</h4>
              <p>{{ item.priceText }}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="about__right-block">
        <UIEstimationForm />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { img: 'auto', title: 'для авто', priceText: 'от 4 800 ₽/м²' },
        { img: 'forged', title: 'кованные', priceText: 'от 6 200 ₽/м² ' },
        { img: 'awnings', title: 'навесы', priceText: 'от 4 630 ₽/м² ' },
        { img: 'gazebos', title: 'беседки', priceText: 'от 119 800 ₽/м² ' },
      ]
    }
  }
}
</script>
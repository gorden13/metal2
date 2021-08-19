<template>
  <section id="constructions" class="constructions">
    <div class="constructions__wrap">
      <h2 class="constructions__title">
        Делаем навесы и беседки любой сложности
      </h2>
      <div class="constructions__gallery">
        <div class="constructions__gallery_item"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="constructions__gallery_item-img">
            <img :src="require(`~/assets/images/constructions/${item.img}.png`)" :alt="item.title">
          </div>
          <div class="constructions__gallery_item-info">
            <h4>{{ item.title }}</h4>
            <div class="constructions__gallery_item-info__price-block">
              <span>Цена от</span>
              <p>{{ item.price }}</p>
            </div>
          </div>
          <div class="constructions__gallery_item-btn-block">
            <button type="button" @click="openPopupForm(item)">
              узнать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- todo separate  -->
    <Popup 
      :type="'form'"
      v-if="isVisibleFormPopup" 
      @close-hard="isVisibleFormPopup = false" 
      @close-popup="closePopupForm"
    >
      <template #title>
        <h4 class="from__title">
          {{ title }}
        </h4>
      </template>
      <template #text>
        <p class="form__text">
          Оставьте заявку и наш менеджер произведёт точные расчёты для Вашего навеса!
        </p>
      </template>
      <template #fields>
        <div class="form__fields">
          <div class="form__field w100">
            <label>Ваше имя</label>
            <input
              v-model="name"
              type="text" 
              placeholder="Укажите ваше имя"
            >
          </div>
          <div class="form__field w100">
            <label>Ваш телефон</label>
            <input
              v-model="phone"
              type="text" 
              placeholder="Укажите ваш телефон"
            >
          </div>
        </div>
        <div class="form__conf-block">
          <input 
            v-model="confChecked"
            id="conf2" 
            type="checkbox" 
            class="custom-checkbox"
          >
          <label for="conf2">Я согласен(а) с условиями передачи информации</label>
        </div>
      </template>
      <template #btn-block>
        <div class="popup__btn-block">
          <button type="button" @click="closePopupForm">
            заказать расчёт
          </button>
        </div>
      </template>
    </Popup>
    <Popup 
      v-if="isVisiblePopup" 
      @close-hard="isVisiblePopup = false" 
      @close-popup="isVisiblePopup = false"
    >
      <template #title>
        <h4 class="simple__title">
          Спасибо за заявку!
        </h4>
      </template>
      <template #text>
        <p class="simple__text">
          в ближайшее время с вами свяжется наш менеджер
        </p>
      </template>
      <template #btn-block>
        <div class="popup__btn-block">
          <button type="button" @click="isVisiblePopup = false">
            готово
          </button>
        </div>
      </template>
    </Popup>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      isVisibleFormPopup: false,
      isVisiblePopup: false,
      title: '',
      name: null,
      phone: null,
      confChecked: false,
      items: [
        { img: 'auto', title: 'навесы для авто', subtitle: 'навеса для авто', price: '50 000 ₽' },
        { img: 'sheds', title: 'навесы для дачи', subtitle: 'навеса для дачи', price: '70 000 ₽' },
        { img: 'сarports', title: 'навесы к дому', subtitle: 'навеса к дому', price: '650 000 ₽' },
        { img: 'pool_enclosures', title: 'навесы для бассейна', title: 'навеса для бассейна', price: '55 500 ₽' },
        { img: 'alcove', title: 'беседка', subtitle: 'беседки', price: '33 000 ₽' },
        { img: 'visor', title: 'козырёк', subtitle: 'козырька', price: '15 000 ₽' },
        { img: 'barbecue_awnings', title: 'навесы для мангала', subtitle: 'навеса для мангала', price: '10 000 ₽' },
        { img: 'bbq_awnings', title: 'навесы для барбекю', subtitle: 'навеса для барбекю', price: '16 000 ₽' },
        { img: 'gazebo_canopies', title: 'навесы для беседки', subtitle: 'навеса для беседки', price: '44 000 ₽' },
        { img: 'swing_canopy', title: 'качели с навесом', subtitle: 'качелей с навесом', price: '35 000 ₽' },
        { img: 'verandas_terraces', title: 'веранды и террасы', subtitle: 'веранды и террасы', price: '70 000 ₽' },
        { img: 'parking_awnings', title: 'навесы для парковок', subtitle: 'навеса для парковок', price: '90 000 ₽' },
      ]
    }
  },
  methods: {
    openPopupForm(item) {
      this.title = `Расчёт стоимости ${item.subtitle}`

      // this.$store.commit('changeScrollbarVisible', true);
      this.isVisibleFormPopup = true
    },
    closePopupForm() {
      let startMsg = 'Необходимо указать'
      const errorMesages = []

      if (!this.phone) {
        errorMesages.push(`${startMsg} телефон`)
      }
      if (!this.name) {
        errorMesages.push(`${startMsg} имя`)
      }
      if (!this.confChecked) {
        errorMesages.push(`Необходимо дать согласие на передачу информации`)
      }
      if (errorMesages.length) {
        alert(errorMesages.join(', '))
        return false
      }

      // this.$store.commit('changeScrollbarVisible', false);
      this.isVisibleFormPopup = false
      setTimeout(() => {
        // this.$store.commit('changeScrollbarVisible', true);
        this.isVisiblePopup = true
      }, 200)
    },
    closePopup() {
      // this.$store.commit('changeScrollbarVisible', false);
      this.isVisiblePopup = false
    }
  }
}
</script>
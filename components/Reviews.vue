<template>
  <section class="reviews">
    <div class="reviews_wrap">
      <h2 class="reviews__title">
        Отзывы и благодарственные письма
      </h2>
      <div class="reviews__items">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="reviews__item"
        >
          <img :src="require(`~/assets/images/reviews/${item.img}.png`)" alt="Отзыв">
        </div>
        <div class="reviews__btn-block">
          <button type="button" @click="openPopupForm">
            Получить проект и расчет
          </button>
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
          Хотите получить проект и расчёт?
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
            id="conf8" 
            type="checkbox" 
            class="custom-checkbox"
          >
          <label for="conf8">Я согласен(а) с условиями передачи информации</label>
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
      name: null,
      phone: null,
      confChecked: false,
      items: [
        { img: 'review_image' },
        { img: 'review_image' },
        { img: 'review_image' }
      ]
    }
  },
  methods: {
    openPopupForm() {
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
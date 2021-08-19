<template>
  <section class="materials">
    <div class="materials__wrap">
      <div class="materials__main">
        <h2 class="materials__title">
          Используемые материалы для кровли
        </h2>
        <p class="materials__subtitle">4 типа материалов для кровли</p>
        <div class="materials__items">
          <div 
            v-for="(item, index) in materials"
            :key="index"
            class="materials__item"
          >
            <div class="materials__item_img-block">
              <img 
                :src="require(`~/assets/images/materials/${item.img}.png`)" 
                :alt="item.title"
              >
            </div>
            <div class="materials__item_info-block">
              <h4>{{ item.title }}</h4>
              <div class="materials__item_info-block__price-block">
                <span>Цена от</span>
                <p>{{ item.price }}</p>
              </div>
              
              <div class="materials__item_info-block__btn-block">
                <button type="button" @click="openPopupForm(item)">
                  узнать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="materials__colors-subtitle">На ваш выбор 18 цветов поликарбоната и 12 цветов эмали</p>
      <div class="materials__colors">
        <div class="materials__prof-colors">
          <div 
            v-for="(color, index) in profColors"
            :key="index"
          >
            <img :src="require(`~/assets/images/materials/profColors/${color.img}.png`)" :alt="color.title">
            <h4>{{ color.title }}</h4>
          </div>
        </div>
        <div class="materials__divider"></div>
        <div class="materials__enamel-colors">
          <div 
            v-for="(item, index) in enamelColors"
            :key="index"
          >
            <img :src="require(`~/assets/images/materials/enamelColors/${item.img}.png`)" :alt="item.title">
            <h4>{{ item.title }}</h4>
          </div>
        </div>
      </div>
    </div>
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
            id="conf3" 
            type="checkbox" 
            class="custom-checkbox"
          >
          <label for="conf3">Я согласен(а) с условиями передачи информации</label>
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
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      isVisibleFormPopup: false,
      isVisiblePopup: false,
      title: '',
      name: null,
      phone: null,
      confChecked: false,
      profColors: [
        { img: 'transparent', title: 'прозрачный' },
        { img: 'white', title: 'белый' },
        { img: 'lactic', title: 'молочный' },
        { img: 'bronze', title: 'бронза' },
        { img: 'blue', title: 'синий' },
        { img: 'green', title: 'зелёный' },
        { img: 'turquoise', title: 'бирюза' },
        { img: 'grindfish', title: 'гриндфиш' },
        { img: 'red', title: 'красный' },
        { img: 'yellow', title: 'жёлтый' },
        { img: 'orange', title: 'оранжевый' },
        { img: 'silver', title: 'серебро' }
      ],
      enamelColors: [
        { img: 'black', title: 'чёрный' },
        { img: 'bronze', title: 'бронза' },
        { img: 'sky', title: 'голубой' },
        { img: 'graphite', title: 'графит' },
        { img: 'emerald', title: 'изумруд' },
        { img: 'brown', title: 'коричневый' },
        { img: 'silver', title: 'серебристый' },
        { img: 'blue', title: 'синий' },
        { img: 'cherry', title: 'вишнёвый' },
        { img: 'green', title: 'зелёный' },
        { img: 'gold', title: 'золотистый' },
        { img: 'red', title: 'красный' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      materials: 'getRoofMaterials'
    })
  },
  methods: {
    openPopupForm(item) {
      this.title = `Закажите навес из ${item.subtitle}`
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

      this.isVisibleFormPopup = false
      setTimeout(() => {
        this.isVisiblePopup = true
      }, 200)
    },
    closePopup() {
      this.isVisiblePopup = false
    }
  }
}
</script>

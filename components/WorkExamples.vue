<template>
  <section id="examples" class="examples">
    <div class="examples_wrap">
      <h2 class="examples__title">
        За последние 5 лет<br/> мы изготовили более 480 навесов
      </h2>
      <p class="examples__subtitle">
        Посмотрите некоторые из них ниже с подробным<br/> описанием всех характеристик
      </p>

      <div class="examples__items">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="examples__item"
        >
          <div class="examples__item_image-block carousel">
            <VueSlickCarousel 
              :infinite="true"
              :draggable="false"
              :slidesToShow="1" 
              :slidesToScroll="1" 
              :speed="500" 
              :fade="false" 
              :edgeFriction="0.35" 
              :arrows="true" 
              :dots="true"
            >
              <div><img src="~/assets/images/workExamples/ex1.png"></div>
              <div><img src="~/assets/images/workExamples/ex2.png"></div>
              <div><img src="~/assets/images/workExamples/ex3.png"></div>
              <div><img src="~/assets/images/workExamples/ex4.png"></div>
              <div><img src="~/assets/images/workExamples/ex5.png"></div>
            </VueSlickCarousel>
          </div>
          <div class="examples__item_info-block">
            <h4>{{ item.title }}</h4>
            <div class="examples__item_info-block__description">
              <div><strong>Ширина х длина: </strong><span>{{ item.wh }}</span></div>
              <div><strong>Металлические столбы: </strong><span>{{ item.metalStubs }}</span></div>
              <div><strong>Силовые боковые балки: </strong><span>{{ item.powerBeams }}</span></div>
              <div><strong>Металлические фермы: </strong><span>{{ item.metalTrusses }}</span></div>
              <div><strong>Обрешетка (лаги):</strong><span>{{ item.lathing }}</span></div>
              <div><strong>Форма крыши:</strong><span>{{ item.roofShape }}</span></div>
              <div><strong>Материал кровли:</strong><span>{{ item.roofMaterial }}</span></div>
              <div><strong>Монтаж к земле:</strong><span>{{ item.mounting }}</span></div>
            </div>
            <ul class="examples__item_info-block_estimate">
              <li
                v-for="position in item.estimate"
                :key="position.code"
              >
                <div class="examples__item_info-block_estimate_img-block">
                  <img :src="require(`~/assets/images/workExamples/${position.code}.svg`)" :alt="position.title">
                </div>
                <div>
                  <span>{{ position.title }}:</span>
                  <p>{{ position.price | formatNumberMain }} ₽</p>
                </div>
              </li>
              <li>
                <div class="examples__item_info-block_estimate_img-block">
                  <img src="~/assets/images/workExamples/total.svg" alt="Итого">
                </div>
                <div>
                  <span>Итого:</span>
                  <p>{{ geTotalPrice(item.estimate) | formatNumberMain }} ₽</p>
                </div>
              </li>
            </ul>
            <div class="examples__item_info-block_btn-block">
              <button type="button" @click="openPopupForm">
                узнать стоимость вашего навеса
              </button>
            </div>
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
          Хотите узнать стоимость?
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
            id="conf5" 
            type="checkbox" 
            class="custom-checkbox"
          >
          <label for="conf5">Я согласен(а) с условиями передачи информации</label>
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
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {
    VueSlickCarousel
  },
  data: () => {
    return {
      isVisibleFormPopup: false,
      isVisiblePopup: false,
      // windowWidth: window.innerWidth,
      name: null,
      phone: null,
      confChecked: false,
      items: [
        { 
          title: 'Навес в Самаре 8.7м x 7.3м', 
          estimate: [ 
            { title: 'Материалы', price: 15000, code: 'materials' },
            { title: 'Работа', price: 23000, code: 'work' }
          ],
          wh: '8,7 х 7,3 м',
          metalStubs: '80 x 80 x 3 мм, 6 шт.',
          powerBeams: '80 x 80 x 3 мм',
          metalTrusses: '60 х 30 х 2 мм',
          lathing: '40 х 20 х 1,5 мм',
          roofShape: 'арочная',
          roofMaterial: 'сотовый поликарбонат 8 мм POLYGAL КОЛИБРИ',
          mounting: 'сваи винтовые d79 с заглублением 3000 мм'
        },
        { 
          title: 'Навес в Самаре 8.7м x 7.3м', 
          estimate: [ 
            { title: 'Материалы', price: 15000, code: 'materials' },
            { title: 'Работа', price: 23000, code: 'work' }
          ],
          wh: '8,7 х 7,3 м',
          metalStubs: '80 x 80 x 3 мм, 6 шт.',
          powerBeams: '80 x 80 x 3 мм',
          metalTrusses: '60 х 30 х 2 мм',
          lathing: '40 х 20 х 1,5 мм',
          roofShape: 'арочная',
          roofMaterial: 'сотовый поликарбонат 8 мм POLYGAL КОЛИБРИ',
          mounting: 'сваи винтовые d79 с заглублением 3000 мм'
        },
        { 
          title: 'Навес в Самаре 8.7м x 7.3м', 
          estimate: [ 
            { title: 'Материалы', price: 15000, code: 'materials' },
            { title: 'Работа', price: 23000, code: 'work' }
          ],
          wh: '8,7 х 7,3 м',
          metalStubs: '80 x 80 x 3 мм, 6 шт.',
          powerBeams: '80 x 80 x 3 мм',
          metalTrusses: '60 х 30 х 2 мм',
          lathing: '40 х 20 х 1,5 мм',
          roofShape: 'арочная',
          roofMaterial: 'сотовый поликарбонат 8 мм POLYGAL КОЛИБРИ',
          mounting: 'сваи винтовые d79 с заглублением 3000 мм'
        },
        { 
          title: 'Навес в Самаре 8.7м x 7.3м', 
          estimate: [ 
            { title: 'Материалы', price: 15000, code: 'materials' },
            { title: 'Работа', price: 23000, code: 'work' }
          ],
          wh: '8,7 х 7,3 м',
          metalStubs: '80 x 80 x 3 мм, 6 шт.',
          powerBeams: '80 x 80 x 3 мм',
          metalTrusses: '60 х 30 х 2 мм',
          lathing: '40 х 20 х 1,5 мм',
          roofShape: 'арочная',
          roofMaterial: 'сотовый поликарбонат 8 мм POLYGAL КОЛИБРИ',
          mounting: 'сваи винтовые d79 с заглублением 3000 мм'
        },
        { 
          title: 'Навес в Самаре 8.7м x 7.3м', 
          estimate: [ 
            { title: 'Материалы', price: 15000, code: 'materials' },
            { title: 'Работа', price: 23000, code: 'work' }
          ],
          wh: '8,7 х 7,3 м',
          metalStubs: '80 x 80 x 3 мм, 6 шт.',
          powerBeams: '80 x 80 x 3 мм',
          metalTrusses: '60 х 30 х 2 мм',
          lathing: '40 х 20 х 1,5 мм',
          roofShape: 'арочная',
          roofMaterial: 'сотовый поликарбонат 8 мм POLYGAL КОЛИБРИ',
          mounting: 'сваи винтовые d79 с заглублением 3000 мм'
        }
      ]
    }
  },
  methods: {
    geTotalPrice(arr) {
      return arr.reduce((acc, cur) => { return acc + cur.price }, 0)
    },
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

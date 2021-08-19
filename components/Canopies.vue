<template>
  <section id="canopies" class="canopies">
    <div class="canopies_wrap">
      <h2 class="canopies__title">
        Примеры стоимости “под ключ” типовых навесов
      </h2>
      <ul class="canopies__tabs">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          :class="{ 'active': isActiveTab(tab) }"
          @click="selectTab(tab)"
        >
          {{ tab.name }}
        </li>
      </ul>
      <div class="canopies__items">
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="canopies__item"
        >
          <div class="canopies__item_image-block">
            <img :src="require(`~/assets/images/canopies/${item.subtype}.png`)" :alt="item.type">
          </div>
          <div class="canopies__item_info-block">
            <div class="canopies__item_info-block__params">
              <strong>Ширина:</strong> <span>{{ item.params.width }}</span><br/>
              <strong>Длина:</strong> <span>{{ item.params.length }}</span><br/>
              <strong>Высота:</strong> <span>{{ item.params.height }}</span>
            </div>
            <div class="canopies__item_info-block__props">
              <strong>Тип:</strong> <span>{{ item.type }}</span><br/>
              <strong>Покрытие:</strong> <span>{{ item.coating }}</span>
            </div>
            <div class="canopies__item_info-block__price">
              <span>Цена под ключ:</span><strong>{{ item.price | formatNumberMain }} ₽</strong>
            </div>
            <div class="canopies__item_info-block_btn-block">
              <button type="button" @click="openPopupForm">
                заказать замер
              </button>
            </div>
          </div>
        </div>
        <template v-if="!filteredItems.length">
          <h2>На данный момент этот тип отсутствует</h2>
        </template>
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
          Хотите заказать размер?
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
            id="conf7" 
            type="checkbox" 
            class="custom-checkbox"
          >
          <label for="conf7">Я согласен(а) с условиями передачи информации</label>
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
      tabs: [
        { id: 1, type: '1auto', name: 'для одного автомобиля' },
        { id: 2, type: '2auto', name: 'для двух автомобилей' },
        { id: 3, type: 'visors', name: 'козырьки и беседки' }
      ],
      selectedTab: null,
      items: [
        { 
          subtype: '1auto', type: 'арочная', coating: 'поликарбонат',
          params: { width: '3 метра', length: '4 метра', height: '2,4 метра'},
          price: 30000
        },
        { 
          subtype: '1auto', type: 'арочная', coating: 'поликарбонат',
          params: { width: '3 метра', length: '4 метра', height: '2,4 метра'},
          price: 30000
        },
        { 
          subtype: '1auto', type: 'арочная', coating: 'поликарбонат',
          params: { width: '3 метра', length: '4 метра', height: '2,4 метра'},
          price: 30000
        },
        { 
          subtype: '1auto', type: 'арочная', coating: 'поликарбонат',
          params: { width: '3 метра', length: '4 метра', height: '2,4 метра'},
          price: 30000
        },
        { 
          subtype: '1auto', type: 'арочная', coating: 'поликарбонат',
          params: { width: '3 метра', length: '4 метра', height: '2,4 метра'},
          price: 30000
        },
        { 
          subtype: '1auto', type: 'арочная', coating: 'поликарбонат',
          params: { width: '3 метра', length: '4 метра', height: '2,4 метра'},
          price: 30000
        }
      ]
    }
  },
  created() {
    this.selectedTab = this.tabs[0]
  },
  computed: {
    filteredItems() {
      return (this.items || []).filter(item => item.subtype === this.selectedTab?.type)
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
    },
    isActiveTab(tab) {
      return this.selectedTab.type === tab.type
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
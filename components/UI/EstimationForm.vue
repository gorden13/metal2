<template>
  <div class="est-form">
    <div class="est-form__head">
      <div class="est-form__head_img-block">
        <img src="~/assets/images/ui/target.svg" alt="Точный расчёт">
      </div>
      <div class="est-form__head_title-block">
        <h2>
          Точный расчёт
        </h2>
        <p>стоимости навеса</p>
      </div>
    </div>
    <p class="est-form__subtitle">
      Оставьте свой номер телефона и наш специалист свяжется с Вами в течение 45 минут
    </p>
    <div class="est-form__fields">
      <div class="est-form__field w100">
        <label>Ваш телефон</label>
        <input
          v-model="phone"
          type="text" 
          placeholder="Укажите ваш телефон"
        >
      </div>

      <div class="est-form__field_wrap">
        <div class="est-form__field">
          <label>Длина</label>
          <input
            v-model="length"
            type="text" 
            placeholder="5 метров"
          >
        </div>

        <div class="est-form__field">
          <label>Высота</label>
          <input
            v-model="height"
            type="text" 
            placeholder="5 метров"
          >
        </div>

        <div class="est-form__field">
          <label>Ширина</label>
          <input
            v-model="width"
            type="text" 
            placeholder="5 метров"
          >
        </div>
      </div>
      
      <div class="est-form__field w100">
        <label>Материал крыши</label>
        <v-select
          v-model="selectedMaterial"
          :options="materials"
          label="title"
          :searchable="false"
          :clearable="false"
          class="style-chooser"
          placeholder="Выберите материал"
        >
          <template #option="{ title }">
            <div class="lang-option">
              <span>{{ title }}</span>
            </div>
          </template>
          <template #open-indicator="{ attributes }">
            <span v-bind="attributes"></span>
          </template>
        </v-select>
      </div>
    </div>

    <div class="est-form__conf">
      <input 
        v-model="confChecked"
        id="conf1" 
        type="checkbox" 
        class="custom-checkbox"
      >
      <label for="conf1">Я согласен(а) с условиями передачи информации</label>
    </div>

    <div class="est-form__btn-block">
      <button type="button" @click="checkout">
        получить проект и расчёт
      </button>
    </div>

    <div class="est-form__props-block">
      <div>
        <div class="est-form__props-block_image-block">
          <img src="~/assets/images/ui/car.svg" alt="car">
        </div>
        <p>Бесплатный выезд инженера для уточнения конструкции и цвета навеса</p>
      </div>
      <div>
        <div class="est-form__props-block_image-block">
          <img src="~/assets/images/ui/list.svg" alt="list">
        </div>
        <p>Бесплатная отправка Вам нашего коммерческого предложения с детальной сметой, 3D эскизами и стоимостью.</p>
      </div>
    </div>
    <Popup v-if="isVisiblePopup" @close-hard="closePopup" @close-popup="closePopup">
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
          <button type="button" @click="closePopup">
            готово
          </button>
        </div>
      </template>
    </Popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vSelect from 'vue-select'

export default {
  data() {
    return {
      isVisiblePopup: false,
      phone: null,
      length: null,
      height: null,
      width: null,
      selectedMaterial: null,
      confChecked: false
    }
  },
  components: {
    vSelect
  },
  computed: {
    ...mapGetters({
      materials: 'getRoofMaterials'
    })
  },
  methods: {
    checkout() {
      let startMsg = 'Необходимо указать'
      const errorMesages = []

      if (!this.phone) {
        errorMesages.push(`${startMsg} телефон`)
      }
      if (!this.length) {
        errorMesages.push(`${startMsg} длину`)
      }
      if (!this.height) {
        errorMesages.push(`${startMsg} высоту`)
      }
      if (!this.width) {
        errorMesages.push(`${startMsg} ширину`)
      }
      if (!this.selectedMaterial) {
        errorMesages.push(`${startMsg} материал`)
      }
      if (!this.confChecked) {
        errorMesages.push(`Необходимо дать согласие на передачу информации`)
      }
      if (errorMesages.length) {
        alert(errorMesages.join(', '))
        return false
      }
      
      this.$store.commit('changeScrollbarVisible', true);
      // show popup
      this.isVisiblePopup = true
    },
    closePopup() {
      this.$store.commit('changeScrollbarVisible', false);
      this.isVisiblePopup = false
    }
  }
}
</script>
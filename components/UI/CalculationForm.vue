<template>
  <div class="calc-form">
    <div class="calc-form__head">
      <div class="calc-form__head_img-block">
        <img src="~/assets/images/ui/calc.svg" alt="Точный расчёт">
      </div>
      <div class="calc-form__head_title-block">
        <h2>
          КАЛЬКУЛЯТОР
        </h2>
        <p>стоимости навеса</p>
      </div>
    </div>
    <p class="calc-form__subtitle">
      Введите размеры навеса или беседки:
    </p>
    <div class="calc-form__fields">
      <div class="calc-form__field_wrap">
        <div class="calc-form__field">
          <label>Длина</label>
          <input
            v-model="length"
            type="text" 
            placeholder="5 метров"
          >
        </div>

        <div class="calc-form__field">
          <label>Высота</label>
          <input
            v-model="height"
            type="text" 
            placeholder="5 метров"
          >
        </div>

        <div class="calc-form__field">
          <label>Ширина</label>
          <input
            v-model="width"
            type="text" 
            placeholder="5 метров"
          >
        </div>
      </div>
      
      <div class="calc-form__field w100">
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
    
    
    <div class="calc-form__roof-type-block">
      <div class="calc-form__roof-type-block__title">
        Выберите тип крыши вашего навеса:
      </div>
      <div class="calc-form__roof-type-block__items">
        <div
          v-for="(type, index) in typeOfRoofs"
          :key="index"
          class="calc-form__roof-type-block__item"
          :class="{ 'checked': isSelectedRoofType(type) }"
          @click="choiseRoofType(type)"
        >
          <img :src="require(`~/assets/images/calculation/${type.img}.svg`)" :alt="type.title">
        </div>
      </div>
      
    </div>

    <div class="calc-form__btn-block">
      <button type="button" @click="checkout">
        расчитать
      </button>
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
  components: {
    vSelect
  },
  data() {
    return {
      isVisiblePopup: false,
      length: null,
      height: null,
      width: null,
      selectedMaterial: null,
      selectedRoofType: null,
      typeOfRoofs: [
        { title: 'тип1', img: 'roof1' },
        { title: 'тип2', img: 'roof2' },
        { title: 'тип3', img: 'roof3' },
        { title: 'тип4', img: 'roof4' },
        { title: 'тип5', img: 'roof5' },
        { title: 'тип6', img: 'roof6' },
        { title: 'тип7', img: 'roof7' },
        { title: 'тип8', img: 'roof8' },
        { title: 'тип9', img: 'roof9' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      materials: 'getRoofMaterials'
    })
  },
  methods: {
    choiseRoofType(item) {
      this.selectedRoofType = item
    },
    isSelectedRoofType(item) {
      return this.selectedRoofType?.img === item.img
    },
    checkout() {
      let startMsg = 'Необходимо указать'
      const errorMesages = []

      // if (!this.phone) {
      //   errorMesages.push(`${startMsg} телефон`)
      // }
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
      // if (!this.confChecked) {
      //   errorMesages.push(`Необходимо дать согласие на передачу информации`)
      // }
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
<template>
  <section class="calc">
    <div class="calc_wrap">
      <div class="calc__main-block">
        <div class="calc__left-form">
          <UICalculationForm/>
        </div>
        <div class="calc__table">
          <h4 class="calc__table_title">Предварительный расчет стоимости</h4>
          <table>
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Кол-во</th>
                <th>Ед.из</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Металлические столбы 60х60</td>
                <td>6</td>
                <td>шт</td>
              </tr>
              <tr>
                <td>Силовые боковые балки</td>
                <td>2</td>
                <td>шт</td>
              </tr>
              <tr>
                <td>Ферма</td>
                <td>5</td>
                <td>шт</td>
              </tr>
              <tr>
                <td>Лаги 40х20х2мм</td>
                <td>5</td>
                <td>шт</td>
              </tr>
              <tr>
                <td>Поликарбонат</td>
                <td>8</td>
                <td>м²</td>
              </tr>
              <tr>
                <td>Соединительные профили</td>
                <td>1</td>
                <td>к-т</td>
              </tr>
              <tr>
                <td>Окрашивание грунтом</td>
                <td>8</td>
                <td>м²</td>
              </tr>
            </tbody>
          </table>
          <div class="calc__table_total">
            <label>Итого</label><span>44800 руб</span>
          </div>
          <div class="calc__table_discount">
            <label>Со скидкой</label><span>40320 руб</span>
          </div>
          <div class="calc__table_contact-form">
            <div class="calc__table_contact-form_conf">
              <span>Ваш телефон</span>
              <div>
                <input id="conf" v-model="confChecked" type="checkbox">
                <label for="conf">Я согласен(а) с условиями передачи информации</label>
              </div>
            </div>
            <div class="calc__table_contact-form_controls">
              <input type="text" v-model="phone" placeholder="Укажите ваш телефон">
              <button type="button" @click="getDiscount">
                получить скидку
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- todo separate -->
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
      isVisiblePopup: false,
      phone: null,
      confChecked: false
    }
  },
  methods: {
    getDiscount() {
      let startMsg = 'Необходимо указать'
      const errorMesages = []

      if (!this.phone) {
        errorMesages.push(`${startMsg} телефон`)
      }
      if (!this.confChecked) {
        errorMesages.push(`Необходимо дать согласие на передачу информации`)
      }
      if (errorMesages.length) {
        alert(errorMesages.join(', '))
        return false
      }

      setTimeout(() => {
        // this.$store.commit('changeScrollbarVisible', true);
        this.isVisiblePopup = true
      }, 200)
    }
  }
}
</script>
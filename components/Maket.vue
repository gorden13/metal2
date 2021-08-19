<template>
  <section id="maket" class="maket">
    <div class="maket_wrap">
      <div class="maket__left-block">
        <h2>Хотите посмотреть, как будет выглядеть ваш навес?</h2>
        <p>Оставьте заявку и мы сделаем 3D макет вашего будущего навеса</p>
      </div>
      <div class="maket__img-block">
        <img src="~/assets/images/maket/maket.png" alt="Макет">
      </div>
      <div class="maket__right-block">
        <CallbackForm>
          <template #title>
            <h4 class="callback-form__title">
              Заявка на 3D макет будущего навеса
            </h4>
          </template>

          <template #text>
            <p class="callback-form__text">
              Подберем для Вас все параметры и посчитаем смету
            </p>
          </template>

          <template #fields>
            <div class="callback-form__fields">
              <div class="callback-form__field w100">
                <label>Ваш телефон</label>
                <input
                  v-model="phone"
                  type="text" 
                  placeholder="Укажите ваш телефон"
                >
              </div>
            </div>
            <div class="callback-form__conf-block">
              <input 
                v-model="confChecked"
                id="conf6" 
                type="checkbox" 
                class="custom-checkbox"
              >
              <label for="conf6">Я согласен(а) с условиями передачи информации</label>
            </div>
          </template>

          <template #btn-block>
            <div class="callback-form__btn-block">
              <button type="button" @click="callMaster">
                получить проект и расчёт
              </button>
            </div>
          </template>
        </CallbackForm>
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
    callMaster() {
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
      // todo send mail
      setTimeout(() => {
        this.isVisiblePopup = true
      }, 200)
    }
  }
}
</script>
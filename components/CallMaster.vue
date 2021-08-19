<template>
  <section class="master">
    <div class="master_wrap">
      <div class="master__left-block">
        <h2>Не знаете, какой навес выбрать?</h2>
        <p>Пригласите специалиста, который снимет все размеры, предложит конструкцию навеса, подходящую именно Вам.</p>
        <p>
          <strong>При подборе навеса учитываем:</strong>
        </p>
        <ul>
          <li>Цвет кровли и стоек</li>
          <li>Форму крыши и размер</li>
          <li>Количество ферм</li>
          <li>Материал кровли и нагрузку</li>
        </ul>
      </div>
      <div class="master__img-block">
        <img src="~/assets/images/callMaster/master.png" alt="Мастер">
      </div>
      <div class="master__right-block">
        <CallbackForm>
          <template #title>
            <h4 class="callback-form__title">
              Пригласить специалиста
            </h4>
          </template>

          <template #text>
            <p class="callback-form__text">
              Свяжемся с Вами в течении 45 минут и договоримся о замере
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
                id="conf4" 
                type="checkbox" 
                class="custom-checkbox"
              >
              <label for="conf4">Я согласен(а) с условиями передачи информации</label>
            </div>
          </template>

          <template #btn-block>
            <div class="callback-form__btn-block">
              <button type="button" @click="callMaster">
                пригласить специалиста
              </button>
            </div>
          </template>

          <template #call-phone>
            <div class="callback-form__call-phone-block">
              <label>
                Или просто позвоните нам по телефону
              </label>
              <a href="tel:+78469707147">+7 (846) 970-71-47</a>
            </div>
          </template>
        </CallbackForm>
      </div>
    </div>
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
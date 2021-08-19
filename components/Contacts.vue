<template>
  <section id="contacts" class="contacts">
    <div class="contacts_wrap">
      <div class="contacts__info-block">
        <div class="contacts__info-block_wrap">
          <h2>Хотите узнать цену, не вызывая замерщика?</h2>
          <p>Пришлите нам фотографию и размеры места установки - и мы посчитаем стоимость без выезда замерщика.</p>
          <div class="contacts__info-block_wrap__phone">
            <a :href="`tel:%2B${pnoneNumber}`">+7 996 471-47-96</a>
          </div>
          <div class="contacts__info-block_wrap__messengers">
            <div class="contacts__info-block_wrap__messengers__links">
              <a :href="item.href" target="_blank"
                v-for="(item, index) in messengers"
                :key="index"
              >
                <img :src="require(`~/assets/images/contacts/${item.title}.svg`)" :alt="item.title">
              </a>
            </div>
            <label class="contacts__info-block_wrap__messengers__label">
              Кликните на иконку мессенджера для перехода в чат
            </label>
          </div>
          
        </div>
      </div>
      <div class="contacts__img-block">
        <img src="~/assets/images/contacts/big-phone.png" alt="Телефон">
      </div>
    </div>
    <div class="contacts__c-form">
      <div class="contacts__c-form_block">
        <h4>Офис продаж:</h4>
        <p>г. Самара, р-н Куйбышевский, мкр. Кряж, Уральская улица, 34</p>
      </div>
      <div class="contacts__c-form_block">
        <h4>Телефоны:</h4>
        <p>+7 (846) 970-71-47<br/>+7 (996) 471-47-96</p>
      </div>
      <div class="contacts__c-form_block">
        <h4>e-mail:</h4>
        <p>samara@znavesov.ru</p>
      </div>
      <div class="contacts__c-form_btn-block">
        <button @click="openPopupForm">
          вызвать замерщика
        </button>
      </div>
    </div>
    <div class="contacts__map">
      <client-only>
        <YaMap :coords="coords" :placemarks="items" :zoom="zoom" class="cont" />
      </client-only>
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
            id="conf9" 
            type="checkbox" 
            class="custom-checkbox"
          >
          <label for="conf9">Я согласен(а) с условиями передачи информации</label>
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
const pnoneNumber = '79964714796'
const userName = '79964714796'

export default {
  data: () => {
    return {
      isVisibleFormPopup: false,
      isVisiblePopup: false,
      name: null,
      phone: null,
      confChecked: false,
      pnoneNumber: '79964714796',
      userName: '79964714796',
      messengers: [
        { title: 'whatsapp', href: `https://api.whatsapp.com/send/?phone=%2B${pnoneNumber}` },
        { title: 'viber', href: `viber://chat?number=+${pnoneNumber}` },
        { title: 'telegram', href: `tg://resolve?domain=${userName}` }
      ],
      zoom: 16,
      coords: [53.1315037, 50.1092795],
      items: [
        [53.1315037, 50.1092795]
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
<template>
  <header id="header" class="header" :class="className">
    <div class="header_wrap">
      <div class="header__logo">
        <img src="~/assets/images/logo.svg" alt="Логотип" />
      </div>
      <div class="header__description">
        Изготовление и монтаж навесов любой сложности в городе Самара
      </div>
      <div class="header__contacts">
        <span class="header__contacts_text">
          Возникли вопросы? Звоните!
        </span>
        <img src="~/assets/images/phone.svg" alt="Телефон">
        <a href="tel:+79964714796" class="header__contacts_phone">
          +7 996 471-47-96
        </a>
      </div>
    </div>
    <Navigation />
    <div class="header__button-up-block">
      <button type="button" @click="up">
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7L8 1L15 7" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    up() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
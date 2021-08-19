<template>
  <div class="popup">
    <div class="popup-wrap" :class="className">
      <button type="button" class="popup-close" @click="$emit('close-hard')">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11.8994L11.8995 1.99992" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.8984 11.8994L1.99894 1.99992" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <template v-if="type === 'simple'">
        <div>
          <slot name="title">
            Заголовок
          </slot>

          <slot name="text">
            Текст
          </slot>
        </div>
      </template>

      <template v-if="type === 'form'">
        <div class="popup__form-type">
          <slot name="title">
            Заголовок
          </slot>

          <slot name="text">
            Текст
          </slot>

          <slot name="fields">
          </slot>
        </div>
      </template>
     
      <slot name="btn-block">
        <div class="btn-block">
          <button type="button" @click="$emit('close-popup')">
            готово
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'simple'
    }
  },
  computed: {
    className() {
      if (this.type === 'form') {
        return 'form'
      }
      return this.type
    }
  },
  mounted() {
    document.body.classList = 'hide-scroll'
  },
  destroyed() {
    document.body.classList = ''
  }
}
</script>

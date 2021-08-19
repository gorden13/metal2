<template>
  <div class="popup-form">
    <div class="popup-form-wrap">
      <button type="button" class="popup-form-close" @click="$emit('close-hard')">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11.8994L11.8995 1.99992" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.8984 11.8994L1.99894 1.99992" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <slot name="title">
        Заголовок
      </slot>

      <slot name="text">
        Текст
      </slot>

      <slot name="fields">
      </slot>

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
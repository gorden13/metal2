<template>
  <div action="" class="callback-form">
    <slot name="title">
    </slot>

    <slot name="text">
    </slot>

    <slot name="fields">
    </slot>

    <slot name="btn-block">
      <div class="btn-block">
        <button type="button" @click="$emit('close-popup')">
          пригласить специалиста
        </button>
      </div>
    </slot>

    <slot name="call-phone">
    </slot>
  </div>
</template>

<script>
export default {
  
}
</script>
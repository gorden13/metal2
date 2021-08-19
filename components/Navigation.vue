<template>
  <div class="navigation" ref="nav">
    <div class="navigation_wrap">
      <div class="navigation__logo">
        <img src="/logo.svg" alt="">
      </div>
      <nav class="navigation__nav">
        <ul class="navigation__list" ref="menu">
          <li class="list-close" @click="closeMobileMenu">
            <a>
              ✖
            </a>
          </li>
          <li 
            v-for="(link, index) in links"
            :key="index"
            :class="{ 'active': isRouteActive('#' + link.id) }"
            @click="routeTo('#' + link.id)"
          >
            <nuxt-link
              :to="{ path: '/', hash: '#' + link.id }">
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="navigation__contacts">
        <img src="~/assets/images/phone.svg" alt="Телефон">
        <a href="tel:+79964714796" class="navigation__contacts_phone">
          +7 996 471-47-96
        </a>
      </div>
      <div class="navigation__mobile" ref="mobile">
        <button type="button" @click="showMobileMenu">
          <svg width="60" height="64" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
          <rect width="40" height="40" transform="matrix(4.37114e-08 1 1 -4.37114e-08 20 0)" fill="#FFCB38"/>
          </g>
          <path d="M33 15H47" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M33 20H47" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M33 25H47" stroke="#332105" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
          <filter id="filter0_d" x="0" y="-16" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="10"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.145087 0 0 0 0 0.366475 0 0 0 0 0.570833 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          </defs>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      links: 'getLinks',
      active: 'getCurrentHash'
    })
  },
  methods: {
    isRouteActive(hash) {
      return this.active === hash
    },
    showMobileMenu() {
      if (this.$refs.menu && this.$refs.nav && this.$refs.mobile) {
        this.$refs.menu.classList.add('show')
        this.$refs.nav.classList.add('not-hide')
        this.$refs.mobile.classList.add('hide')
      }
    },
    closeMobileMenu() {
      if (this.$refs.menu && this.$refs.nav && this.$refs.mobile) {
        this.$refs.menu.classList.remove('show')
        this.$refs.nav.classList.remove('not-hide')
        this.$refs.mobile.classList.remove('hide')
      }
    },
    routeTo(hash) {
      this.$router.push({
        path: '/', hash
      })
    }
  }
}
</script>
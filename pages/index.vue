<template>
  <main class="content">
    <HeaderMain :className="(handleScrollClass ? 'header--scrolled': '')" />
    <About />
    <Constructions />
    <Materials />
    <CallMaster />
    <WorkExamples />
    <Maket />
    <Canopies />
    <Calculation />
    <Guarantees />
    <Production />
    <Steps />
    <Reviews />
    <Contacts />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      darkMode: false,
      handleScrollClass: false,
      elements: []
    }
  },
  computed: {
    ...mapGetters({
      behavior: 'getScrollBehavior',
      navigationIds: 'getLinks'
    })
  },
  methods: {
    handleScroll () {
      this.handleScrollClass = window.scrollY > 0

      if (this.behavior) {
        return false
      }

      this.elements.forEach(item => {
        if (window.scrollY > item.offsetTop - 100) {
          this.$store.commit('setCurrentHash', '#' + item.id)
        }
      })
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.elements = this.navigationIds.map(item => {
        return document.getElementById(item.id)
      })
    })
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
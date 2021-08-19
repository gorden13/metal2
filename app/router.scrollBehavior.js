export default async function (to, from, savedPosition) {
  if (to.hash) {

    const element = document.querySelector(to.hash)

    if (!element) {
      return
    }

    $nuxt.$store.commit('setCurrentHash', to.hash)
    $nuxt.$store.commit('setInScrollBehavior', true);

    setTimeout(() => {
      $nuxt.$store.commit('setInScrollBehavior', false);
    }, 300)
    
    return window.scrollTo({
      top: element.offsetTop - 110, // height of header + 10px
      behavior: 'auto'
    })
    
  }
  return window.scrollTo({ top: 0, behavior: 'smooth' })
}
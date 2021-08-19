<template>
  <section id="guarantees" class="guarantees">
    <div class="guarantees_wrap">
      <h2 class="guarantees__title">8 причин, по которым в Самаре выбирают нас для изготовления навесов</h2>
      <div class="guarantees__items">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="guarantees__item"
        >
          <div class="guarantees__item_img-block">
            <img :src="require(`~/assets/images/guarantees/${item.img}.svg`)" :alt="item.title">
          </div>
          <div class="guarantees__item_info-block">
            <h4>{{ item.title }}</h4>
            <p v-html="item.desc"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        { img: 'r1', title: 'Собственное производство', desc: 'Мы не завышаем цены на продукцию<br/>У нас свои материалы и бригады' },
        { img: 'r2', title: 'Выгодные цены на материалы', desc: 'У нас прямой договор со всеми поставщиками.<br/>Экономия от 5 до 15% на материалах.' },
        { img: 'r3', title: 'Работаем по договору', desc: 'Озвученная стоимость не изменится.<br/>Она зафиксирована в договоре.' },
        { img: 'r4', title: 'Гарантия на навес 5 лет', desc: 'Гарантия от коррозии. Гарантия на монтаж.<br/>Все гарантии прописаны в договоре.' },
        { img: 'r5', title: 'Бесплатный выезд на участок', desc: 'Выезжаем и в выходные дни.<br/>Бесплатный выезд в Самаре и +50 км' },
        { img: 'r6', title: 'Бесплатный расчет сметы', desc: 'Посчитаем смету за 2 часа.<br/>Приложим к смете 3D проект Вашего навеса' },
        { img: 'r7', title: 'Работаем по СП, СНИП и ГОСТ', desc: 'Соблюдаем все требования.<br/>Имеем сертификаты на всю продукцию.' },
        { img: 'r8', title: 'Работаем без предоплат', desc: 'Никаких 100% предоплат.<br/>Вы платите 60% за материалы и 40% по окончанию работы.' }
      ]
    }
  }
}
</script>
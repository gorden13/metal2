<template>
  <section class="steps">
    <div class="steps_wrap">
      <h2 class="steps__title">
        Всего 6 шагов до вашего идеального навеса
      </h2>
      <p class="steps__subtitle">
        Работа проходит в следующие этапы
      </p>
      <div class="steps__items">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="steps__item"
        >
          <div class="steps__item_img-block">
            <img class="steps__item_img-block--abs" :src="require(`~/assets/images/steps/${item.img2}.png`)" :alt="item.img2" />
            <img class="steps__item_img-block--main" :src="require(`~/assets/images/steps/${item.img1}.png`)" :alt="item.title" />
          </div>
          <div class="steps__item_info-block">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
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
        { 
          img1: 'step1', img2: '01', title: 'Заявка', 
          desc: 'Связываемся с Вами в самое ближайшее время, уточняем детали и говорим предварительную цену.' 
        },
        { 
          img1: 'step2', img2: '02', title: 'Замер/посещение цеха', 
          desc: 'Приезжаем на замер, помогаем выбрать конфигурацию, поправляем итоговую цену.' 
        },
        { 
          img1: 'step3', img2: '03', title: 'Договор/предоплата на материалы', 
          desc: 'В договоре прописываем все гарантии, стоимость навеса и т.д.' 
        },
        { 
          img1: 'step4', img2: '04', title: 'Изготовление навеса', 
          desc: 'Проводим все работы в цеху, и красим тоже в цеху (никаких малярных работ на объекте).' 
        },
        { 
          img1: 'step5', img2: '05', title: 'Доставка и монтаж навеса', 
          desc: 'Доставка осуществляется в удобный для Вас день, сборка осуществляется в день монтажа.' 
        },
        { 
          img1: 'step6', img2: '06', title: 'ПОДПИСЫВАЕМ АКТПРИЕМА-ПЕРЕДАЧИ', 
          desc: 'После завершения сборки подписывается акт приема-передачи и производится окончательная оплата по договору.' 
        }
      ]
    }
  }
}
</script>
<template>
  <v-layout column justify-center>
    <v-carousel :show-arrows="false" hide-delimiters cycle>
      <v-carousel-item v-for="slide of slides" :key="slide.id" :src="slide.url">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3 white--text">
            {{ slide.title }}
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-flex column class="advantages">
      <v-row cols="12" class="advantages-av">
        <v-col>
          <v-row align="center" justify="center" style="height:100%">
            <v-col class="text-center" cols="12">
              <h1 class="mb-4 display-3">Надёжность</h1>
              <h4 class="subtitle-1">
                99% Аптайм
              </h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-img src="/bruh.png" alt="Сервер" height="400" contain />
        </v-col>
      </v-row>
      <v-row cols="12" class="advantages-av">
        <v-col>
          <v-row align="center" justify="center" style="height:100%">
            <v-col class="text-center" cols="12">
              <h1 class="mb-4 display-3">Уникальность</h1>
              <h4 class="subtitle-1">
                Множество уникальных самописных плагинов
              </h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-img src="/unique.png" alt="Уникальность" height="400" contain />
        </v-col>
      </v-row>
      <v-row cols="12" class="advantages-av">
        <v-col>
          <v-row align="center" justify="center" style="height:100%">
            <v-col class="text-center" cols="12">
              <h1 class="mb-4 display-3">Профессионализм</h1>
              <h4 class="subtitle-1">
                Это наш не первый сервер, мы работаем уже 4 года
              </h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-img src="/pro.png" alt="Администрация" height="400" contain />
        </v-col>
      </v-row>
      <v-row cols="12" class="advantages-av">
        <v-col>
          <v-row align="center" justify="center" style="height:100%">
            <v-col class="text-center" cols="12">
              <h1 class="mb-4 display-3">Баланс</h1>
              <h4 class="subtitle-1">
                Мы не даём приоритета донатерам
              </h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-img src="/balance.png" alt="Весы" height="400" contain />
        </v-col>
      </v-row>
    </v-flex>
    <v-parallax dark src="/first-screen.jpg" height="700">
      <v-row justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-2 mt-5">Донат</h1>
        </v-col>
        <v-col class="text-center" cols="12">
          <v-btn color="white" outlined x-large nuxt to="/donate"
            >Перейти в магазин</v-btn
          >
        </v-col>
      </v-row>
    </v-parallax>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          url:
            'https://sun9-34.userapi.com/c206520/v206520507/7773/FLjxIh8k0i4.jpg',
          title: 'Elevation',
          id: 1
        },
        {
          url:
            'https://sun9-42.userapi.com/c206520/v206520507/777d/MGyknZ_fDSo.jpg',
          title: 'Elevation',
          id: 2
        },
        {
          url:
            'https://sun9-15.userapi.com/c857736/v857736900/11cd30/o88VpY2Nckg.jpg',
          title: 'Elevation',
          id: 3
        },
        {
          url:
            'https://sun9-32.userapi.com/c855136/v855136900/19a236/acZrPK1ra0E.jpg',
          title: 'Elevation',
          id: 4
        }
      ]
    }
  }
}
</script>
<style scoped>
@media (min-width: 960px) {
  .advantages-av:nth-child(even) .col:nth-child(1) {
    order: 1;
  }
}
</style>

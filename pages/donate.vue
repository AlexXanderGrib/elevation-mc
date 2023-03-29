<template>
  <v-layout column justify-center>
    <div
      v-for="category in categories"
      :key="category.id"
      class="category-wrapper"
    >
      <h2 class="text-center display-2">{{ category.name }}</h2>
      <v-container>
        <v-row>
          <v-col
            v-for="item in category.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card
              @click.stop="
                dialog = true
                dialogItemId = item.id
                dialogHeader = item.name
                dialogText = item.description
              "
            >
              <v-img
                v-if="item.image"
                :src="item.image"
                :alt="`Изображение товара ${item.name}`"
                class="white--text align-end"
              >
                <v-card-title primary-title>
                  <h3 class="headline mb-0">{{ item.name }}</h3>
                </v-card-title>
                <!-- <v-card-text v-html="item.description"></v-card-text> -->
                <v-card-text
                  ><b>Цена: {{ item.cost }}&#8381;</b></v-card-text
                >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-row justify="center">
      <v-dialog v-model="dialog" scrollable max-width="600px">
        <v-card>
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ dialogHeader }}</h3>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form @submit.prevent="buy(dialogItemId)" class="mt-5">
              <v-text-field
                :rules="[(v) => !!v || 'Поле обязательно']"
                v-model="nickname"
                :disabled="!dialog"
                name="nick"
                label="Ник игрока"
                outlined
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-text v-html="dialogText.replace('\n', '<br/>')"></v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn @click="dialog = false" color="red darken-1" text
              >Отмена</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn
              @click="buy(dialogItemId)"
              :disabled="!nickname"
              color="success darken-1"
              text
              >Купить</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-layout>
</template>
<script>
// import Axios from 'axios'

const shopId = 114519
const baseUrl = 'https://api.trademc.org'
export default {
  data() {
    return {
      dialog: false,
      dialogHeader: '',
      dialogText: '',
      dialogItemId: 0,
      nickname: '',
      coupon: ''
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${baseUrl}/shop.getItems?shop=${shopId}`)

    if (data.error) {
      return { error: data }
    }

    return data.response
  },
  methods: {
    async buy(id) {
      this.dialog = false

      const { data } = await this.$axios.get(
        `${baseUrl}/shop.buyItems?items=${id}:1&buyer=${this.nickname}`
      )

      window.location.href = `https://pay.trademc.org/?cart_id=${data.response.cart_id}&success_url=https://elevation-mine.ru&pending_url=https://elevation-mine.ru&fail_url=https://elevation-mine.ru`
    }
  }
}
</script>

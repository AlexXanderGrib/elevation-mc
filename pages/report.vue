<template>
  <v-form ref="form" @submit.prevent="submit()" class="ma-5">
    <v-select
      :items="types"
      v-model="type"
      :disabled="lock"
      label="Тип жалобы"
      outlined
    ></v-select>
    <div v-if="type === 'player'">
      <v-text-field
        :rules="required"
        v-model="fields.nick"
        :disabled="lock"
        name="nick"
        label="Ник игрока"
        outlined
      ></v-text-field>
      <v-textarea
        :rules="required"
        v-model="fields.reportText"
        :disabled="lock"
        outlined
        name="report-text"
        label="Текст жалобы"
      ></v-textarea>
    </div>
    <div v-else-if="type === 'bug'">
      <v-textarea
        :rules="required"
        v-model="fields.reproductionSteps"
        :disabled="lock"
        outlined
        name="reproduction-steps"
        label="Шаги воспроизведения"
        placeholder="1. Почешите жопу
2. ..."
      ></v-textarea>
      <v-textarea
        :rules="required"
        v-model="fields.expectedResult"
        :disabled="lock"
        outlined
        name="expected-result"
        label="Ожидаемый результат"
        placeholder="Я сделал ... должно было случится ..."
      ></v-textarea>
      <v-textarea
        :rules="required"
        v-model="fields.actualResult"
        :disabled="lock"
        outlined
        name="actual-result"
        label="Что получилось"
        placeholder="Я сделал ... но случилось ..."
      ></v-textarea>
    </div>
    <v-file-input
      v-model="screenshot"
      :disabled="lock"
      placeholder="Скриншот"
      outlined
      accept="image/png, image/jpeg"
    >
    </v-file-input>
    <v-text-field
      :rules="required"
      v-model="fields.feedback"
      :disabled="lock"
      name="feedback"
      label="Как с вами связаться"
      placeholder="VK, Email, Whatsapp, Ник"
      outlined
    ></v-text-field>

    <v-btn type="submit" color="success">Отправить</v-btn>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      type: 'player',
      types: ['player', 'bug'],
      screenshot: [],
      required: [(v) => !!v || 'Поле обязательно'],
      fields: {
        nick: '',
        reportText: '',
        reproductionSteps: '',
        expectedResult: '',
        actualResult: '',
        feedback: ''
      },
      lock: false
    }
  },

  methods: {
    async submit() {
      let photo = ''

      this.lock = true

      if (this.screenshot && this.screenshot instanceof File) {
        const uploadFormData = new FormData()

        uploadFormData.append('file', this.screenshot)

        const { data } = await this.$axios.post(
          '/upload-screenshot',
          uploadFormData
        )

        photo = data
      }

      // eslint-disable-next-line no-return-await
      const result = await this.$axios.post('/api/report', {
        ...this.fields,
        type: this.type,
        photo
      })

      this.lock = false

      window.location.href = '/'

      return result
    }
  }
}
</script>

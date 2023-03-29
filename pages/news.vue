<template>
  <v-layout column justify-center>
    <v-flex xs12 sm8 md6>
      <v-card
        v-for="post in posts"
        :key="post.postId"
        class="mx-auto my-3"
        max-width="700"
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="group.photo" :srcset="group.photo2x + '2x'"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{
              group.name
            }}</v-list-item-title>
            <v-list-item-subtitle>
              <a
                :href="'https://vk.com/' + post.postId"
                style="text-decoration: none"
                target="_blank"
              >
                {{ dateify(post.date) }}
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <p v-html="unescape(post.text)"></p>
        </v-card-text>
        <v-img v-if="post.images" :src="post.images[0]"></v-img>
      </v-card>
      <v-row cols="12">
        <v-btn
          nuxt
          to="/redir?url=https://vk.com/elevation_mine"
          text
          class="mx-auto mb-3"
          >Больше</v-btn
        >
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const postsRes = await $axios.get('/api/posts')
    const groupRes = await $axios.get('/api/group')
    // console.log(data)
    return { posts: postsRes.data.posts, group: groupRes.data }
  },
  methods: {
    unescape(text) {
      return text
        .replace(/</, '&gt;')
        .replace(/>/, '&lt;')
        .replace(/\n+/g, '<br/>')
        .replace(
          /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim,
          '<a href="$1" target="_blank">$1</a>'
        )
        .replace(
          /\[((club|public|id)([0-9])+)\|(((?!\]).)*)\]/gim,
          '<a href="https://vk.com/$1" target="_blank">$4</a>'
        )
    },

    dateify(timestamp) {
      const d = new Date(timestamp * 1000)

      function month(m) {
        switch (m % 12) {
          case 0:
            return 'янв'
          case 1:
            return 'фев'
          case 2:
            return 'мар'
          case 3:
            return 'апр'
          case 4:
            return 'май'
          case 5:
            return 'июн'
          case 6:
            return 'июл'
          case 7:
            return 'авн'
          case 8:
            return 'сен'
          case 9:
            return 'окт'
          case 10:
            return 'ноя'
          case 11:
            return 'дек'
        }
      }

      const minute = ('0' + String(d.getMinutes())).substr(-2)

      const time = `${d.getHours()}:${minute}`
      let day = `${d.getDate()} ${month(d.getMonth())}`

      if (new Date().getFullYear() !== d.getFullYear()) {
        day += ` ${d.getFullYear()}`
      }

      return `${day} в ${time}`
    }
  }
}
</script>

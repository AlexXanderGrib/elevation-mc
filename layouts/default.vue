<template>
  <v-app height="1000px">
    <div v-if="time < 0">
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        right
        fixed
        dark
        class="d-block d-md-none"
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" fixed app dark>
        <nuxt-link to="/">
          <v-img
            class="mx-2"
            src="/logo.svg"
            max-height="40"
            max-width="40"
            contain
          ></v-img>
        </nuxt-link>
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-toolbar-items class="d-none d-md-flex">
          <v-btn v-for="(item, i) in items" :key="i" :to="item.to" text nuxt>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="d-block d-md-none"
        />
      </v-app-bar>
      <v-content>
        <nuxt />
      </v-content>
      <v-footer dark padless>
        <v-card
          flat
          tile
          class="lighten-1 white--text text-center"
          width="100%"
        >
          <v-card-text>
            <v-btn icon color="white" nuxt to="/offert">
              <v-icon>mdi-file-document-outline</v-icon>
            </v-btn>
            <v-btn icon color="white" nuxt to="/vacances">
              <v-icon>mdi-hammer</v-icon>
            </v-btn>
            <v-btn
              icon
              color="white"
              to="/redir?url=https://vk.com/elevation_mine"
            >
              <v-icon>mdi-vk</v-icon>
            </v-btn>
            <v-btn color="white" nuxt to="/report" icon>
              <v-icon>mdi-bug</v-icon>
            </v-btn>
            <!-- <v-btn text color="white" nuxt to="/redir?url=https://icons8.com"
            >Icons by Icons8</v-btn
          > -->
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            &copy;
            {{ new Date().getFullYear() }} —
            <strong>Elevation & XXHAX Team</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
    <div v-else>
      <timer @timeadd="timeadd" />
    </div>
  </v-app>
</template>

<script>
import timer from '~/components/Timer'

export default {
  components: {
    timer
  },
  data() {
    return {
      scrollTop: 0,
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-newspaper',
          title: 'Новости',
          to: '/news'
        },
        {
          icon: 'mdi-file-document-outline',
          title: 'Правила',
          to: '/rules'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'О Сервере',
          to: '/about'
        },
        {
          icon: 'mdi-cash',
          title: 'Донат',
          to: '/donate'
        },
        {
          icon: 'mdi-help-circle-outline',
          title: 'FAQ',
          to: '/faq'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Elevation',
      time: 100
    }
  },
  methods: {
    timeadd(time) {
      this.time = time
    }
  }
}
</script>

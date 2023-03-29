<template>
  <div class="pp">
    <md :page="$route.path" v-if="isPage" />
    <div v-else>
      <h1 class="display-1 text-center mt-5">Error {{ error.statusCode }}</h1>
      <p class="subtitle text-center">{{ error.message }}</p>
    </div>
  </div>
</template>
<script>
import md from '~/components/MarkDown'

export default {
  components: {
    md
  },
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      isPage: false
    }
  },

  mounted() {
    this.$axios
      .get(
        `https://raw.githubusercontent.com/elevation-mc/pages/master${this.$route.path}.md`
      )
      .then(() => (this.isPage = true))
      .catch(() => (this.isPage = false))
  }
}
</script>

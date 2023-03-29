<template>
  <v-layout column justify-center align-center fill-height>
    <div class="fixer">
      <div class="block">
        <h1 class="display-1 white--text text-center">{{ formattedTime }}</h1>
        <h3 class="subtitle white--text text-center">До открытия</h3>
      </div>
    </div>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      interval: 0,
      time: 1
    }
  },

  computed: {
    formattedTime() {
      const d = new Date(this.time * 1000)

      function std(num) {
        return String(num).length < 2 ? String('0' + num) : String(num)
      }

      const date = d.getDate() - 1

      const days = `${date} ${date > 1 ? 'дня' : 'день'}`
      const time = `${std(d.getHours() - 3)}:${std(d.getMinutes())}:${std(
        d.getSeconds()
      )}`

      return date > 0 ? `${days} ${time}` : time
    }
  },

  async mounted() {
    const { data } = await this.$axios.post('/api/tto')

    this.time = parseInt(data, 10)

    this.interval = setInterval(() => {
      this.$emit('timeadd', this.time)
      this.time--
    }, 1000)
  },

  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>
<style>
* {
  overflow: hidden !important;
}
.fixer {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #343a40;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <v-parallax dark src="/first-screen.jpg" height="700">
    <v-row justify="center" align="center">
      <v-col class="text-center" cols="12">
        <h1 class="subtitle mt-5">
          Все вакансии доступны в нашей группе ВКонтакте
        </h1>
        <v-btn
          color="white"
          outlined
          x-large
          nuxt
          to="/redir?url=https://vk.com/elevation_mine"
          >Перейти в группу</v-btn
        >
      </v-col>
    </v-row>
  </v-parallax>
</template>
<script>
export default {}
</script>

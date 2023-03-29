<template>
  <span>Перенаправление...</span>
</template>
<script>
export default {
  middleware({ redirect, route }) {
    // console.log(route)

    redirect(route.query.url)
  }
}
</script>

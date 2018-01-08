<template>
  <v-base>
    <Card dis-hover :style="{margin:'20px auto',width:'80%',textAlign:'center'}">
      <p :style="{fontSize:'200px'}">It works!</p>
    </Card>
  </v-base>
</template>

<script>
  import vBase from '../components/base'

  export default {
    name: 'home',
    components: {
      vBase
    }
  }
</script>

<style scoped>

</style>

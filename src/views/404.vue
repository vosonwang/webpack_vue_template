<template>
  <v-base>
    <Card slot="content" :style="{margin:'20px auto',width:'80%',textAlign:'center'}">
      <p :style="{fontSize:'200px'}">404</p>
      <p :style="{fontSize:'50px'}">Page Not Found</p>
      <router-link active-class="ivu-btn ivu-btn-ghost backhome" :to="{ name: 'home'}" tag="button">Back to home
      </router-link>
    </Card>
  </v-base>
</template>

<script>
  import vBase from '../components/base'

  export default {
    components: {
      vBase
    }
  }
</script>

<style scoped>
  .backhome {
    margin-top: 50px;
  }
</style>

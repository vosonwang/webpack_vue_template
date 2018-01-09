<template>
  <v-base>
    <search slot="header"></search>
    <Card slot="content" dis-hover :style="{margin:'20px auto',width:'80%',textAlign:'center'}">
      <p :style="{fontSize:'100px'}">{{$t('home.success')}}</p>
      <i-switch v-model="switch1" @on-change="change"></i-switch>
    </Card>
  </v-base>
</template>

<script>
  import vBase from '../components/base'
  import search from '../components/search'
  import ISwitch from "iview/src/components/switch/switch";

  export default {
    name: 'home',
    components: {
      ISwitch,
      vBase,
      search
    },
    data() {
      return {
        switch1: false
      }
    },
    methods: {
      change(status) {
        this.$Message.info('开关状态：' + status);
      }
    }
  }
</script>

<style scoped>

</style>

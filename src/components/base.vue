<template>
  <Layout>
    <Header></Header>
    <Content>
      <slot></slot>
    </Content>
    <Footer :style="{textAlign:'center'}">
      2013-2030 &copy; voson.me
    </Footer>
  </Layout>
</template>

<script>
    export default {
        name: "template"
    }
</script>

<style scoped>

</style>

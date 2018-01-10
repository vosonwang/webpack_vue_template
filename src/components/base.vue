<template>
  <Layout>
    <Header>
      <slot name="header"></slot>
    </Header>
    <Content>
      <div class="wrap">
        <slot name="content"></slot>
      </div>
    </Content>
    <Footer :style="{textAlign:'center'}">
      2013-2030 &copy; voson.me
    </Footer>
  </Layout>
</template>

<script>
  export default {}
</script>

<style scoped>
  .wrap {
    margin: 20px auto;
    width: 80%;
    text-align: center
  }
</style>

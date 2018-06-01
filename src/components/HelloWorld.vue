<template>
  <mt-cell title="标题文字" value="说明文字"></mt-cell>
</template>

<script>
import { Cell } from 'mint-ui'

export default {
  name: 'HelloWorld',
  components: {
    [Cell.name]: Cell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

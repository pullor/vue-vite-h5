<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="StoreObj.setCount(++StoreObj.count)">count is: {{ StoreObj.count }}</button>
  <br>
  <van-button size="mini" type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
</template>

<script lang="ts" setup>
import { Store } from '@store/index';
const StoreObj = Store()

const props = defineProps({
  msg: String
})

</script>

<style scoped lang="less">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

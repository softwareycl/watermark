<!--
 * @Author: ycl
 * @Date: 2022-01-18 11:10:10
 * @LastEditors: ycl
 * @LastEditTime: 2022-01-24 11:14:12
 * @Description: 
-->
<template>
  <div class="container">
    <div v-for="(item, index) in list" :key="index">
      <p>{{ item.name }}</p>
      <div v-if="item.cList" class="children-item">
        <v-content :list="item.cList"></v-content>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  height: 500px;
}

.children-item {
  padding: 0 20px;
}
</style>
<script>
export default {
  name: "vContent",
  props: {
    list: Array,
  },
};
</script>

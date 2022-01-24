<!--
 * @Author: ycl
 * @Date: 2022-01-18 11:01:05
 * @LastEditTime: 2022-01-24 11:14:32
 * @LastEditors: ycl
 * @Description: 
-->
<template>
  <div class="page-wrap">
    <wm-background></wm-background>
    <v-header></v-header>
    <v-content :list="list"></v-content>
    <v-footer></v-footer>
  </div>
</template>
<script>
import vHeader from "./header";
import vContent from "./content";
import vFooter from "./footer";
import wmBackground from "./watermark";
export default {
  components: {
    vHeader,
    vContent,
    vFooter,
    wmBackground
  },
  mounted() {},
  data() {
    return {
      list: [
        { name: "一级菜单AAA" },
        {
          name: "一级菜单BBB",
          cList: [{ name: "二级菜单aaa" }, { name: "二级菜单bbb" }],
        },
      ],
    };
  },
  methods: {
    btnClick() {
      console.log('点击时间')
    }
  },
};
</script>

<style scoped>
.footer {
  height: 1000px;;
}
</style>
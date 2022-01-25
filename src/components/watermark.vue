<!--
 * @Author: ycl
 * @Date: 2022-01-19 19:58:28
 * @LastEditors: ycl
 * @LastEditTime: 2022-01-25 09:49:10
 * @Description: 水印组件
-->

<template>
  <div ref="wm" class="wm-container"></div>
</template>
<script>
import tool from "../utils/tool";
export default {
  mounted() {
    //获取水印背景图
    const option1 = {
      strContent: "yourname",
      x: "0",
      y: "100",
    };
    const option2 = {
      strContent: "yourname",
      x: "150",
      y: "200",
    };
    this.wmBackground1 = tool.addWaterMark(option1);
    this.wmBackground2 = tool.addWaterMark(option2);

    //将水印添加到节点样式
    const wmDom = this.$refs["wm"];
    const pNode = wmDom.parentElement;
    const styleStr = `
            position:fixed;
            width:100vw;
            height:100vh;
            z-index:9999;
            pointer-events:none;
            background-image:url('${this.wmBackground1}'),url('${this.wmBackground2}')`;
    wmDom.setAttribute("style", styleStr);
    //防删操作
    const options = {
      attributes: true,
      childList: true,
      subtree: true,
    };
    const observer = new MutationObserver(() => {
      console.log("监听中");
      const wmInstance = document.querySelector(".wm-container");

      //如果标签在，只修改了属性，重新赋值属性
      if (wmInstance) {
        if (wmInstance.getAttribute("id")) {
          wmInstance.removeAttribute("id");
        }
        if (wmInstance.getAttribute("class") !== "wm-container") {
          wmInstance.setAttribute("class", "wm-container");
        }
        if (wmInstance.getAttribute("style") !== styleStr) {
          wmInstance.setAttribute("style", styleStr);
        }
      } else {
        if (wmDom.getAttribute("class") == "wm-container") {
          pNode.insertBefore(wmDom, pNode.firstChild);
        } else {
          wmDom.setAttribute("class", "wm-container");
        }
      }
    });
    observer.observe(pNode, options);
  },
  data() {
    return {
      wmBackground1: "",
      wmBackground2: "",
    };
  },
};
</script>
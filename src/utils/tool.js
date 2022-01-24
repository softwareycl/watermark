/*
 * @Author: ycl
 * @Date: 2022-01-19 15:32:26
 * @LastEditors: ycl
 * @LastEditTime: 2022-01-24 11:15:09
 * @Description: 工具类
 */

export default {
    //添加水印
    addWaterMark(name) {
        let curDate = new Date();
        let formatDate = curDate.getFullYear() + '/' + curDate.getMonth() + 1 + '/' + curDate.getDate()
        const strArr = `${name}|${formatDate}`;
        let ctx = document.createElement("canvas");
        ctx.width = 200;
        ctx.height = 100;
        ctx.style.display = "none";
        let cans = ctx.getContext("2d");
        cans.rotate((-20 * Math.PI) / 180);
        cans.font = "12px Microsoft YaHei";
        cans.fillStyle = "rgba(17, 17, 17, 0.20)";
        cans.textAlign = "left";
        cans.textBaseline = "Middle";
        cans.fillText(strArr, 0, 100);
        cans.save();
        return ctx.toDataURL();
    }
}

/*
 * @Author: ycl
 * @Date: 2022-01-19 15:32:26
 * @LastEditors: ycl
 * @LastEditTime: 2022-01-25 09:48:59
 * @Description: 工具类
 */

export default {
    //添加水印
    addWaterMark(options) {
        let curDate = new Date();
        let formatDate = curDate.getFullYear() + '/' + curDate.getMonth() + 1 + '/' + curDate.getDate()
        const strArr = `${options.strContent}|${formatDate}`;
        let ctx = document.createElement("canvas");
        ctx.width = 400;
        ctx.height = 200;
        ctx.style.display = "none";
        let cans = ctx.getContext("2d");
        cans.rotate((-20 * Math.PI) / 180);
        cans.font = "12px Microsoft YaHei";
        cans.fillStyle = "rgba(17, 17, 17, 0.20)";
        cans.textAlign = "left";
        cans.textBaseline = "Middle";
        cans.fillText(strArr, options.x, options.y);
        cans.save();
        return ctx.toDataURL();
    }
}

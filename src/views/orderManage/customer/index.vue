<template>
<div>
<PageContainer>
<template v-slot:aside>
<nav-menu title="发票管理" :list="navmenu" @click="change"></nav-menu>
</template>
<template v-slot:filter>
</template>
<template v-slot:table>
<keep-alive>
<component :is="comt"></component>
</keep-alive>
</template>
</PageContainer>
</div>
</template>
<script>
import orderOne from "./components/orderManageOne";
import orderTwo from "./components/orderManageTwo";
const navmenu = [
{ title: "发票申请", path: "orderOne" },
{ title: "已开发票", path: "orderTwo" }
];
export default {
name: "cancelsales",
components: {
orderOne,
orderTwo
},
data() {
return {
comt: "orderOne",
navmenu: navmenu
};
},
provide() {},
methods: {
change(item) {
this.comt = item.name;
}
}
};
</script>

<style lang="scss" >
.container {
min-height: calc(100vh - 84px);
}
.model {
margin-top: 10px;
display: flex;
}
.order {
margin-left: -20px;
}
.subfilg {
margin: auto 0;
width: 50pt;
height: 18pt;
text-align: center;
line-height: 0;
position: absolute;
bottom: 10px;
right: 20px;
}
.subfilg1 {
margin: auto 0;
min-width: 50pt;
height: 18pt;
text-align: center;
line-height: 0;
font-size: 7pt;
}
.btnWhite {
background: white;
border: 1px solid #256ad1;
min-width: 50pt;
height: 18pt;
line-height: 0;
font-size: 7pt;
color: #256ad1;
}
.el-dialog__title {
display: block;
font-size: 9pt;
}
.inputAll {
width: 140px;
height: 20px;
border: none;
margin-left: 25px;
}
.inputAll1 {
width: 50px;
height: 20px;
border: none;
margin-left: 25px;
}
.inputAll2 {
width: 140px;
height: 20px;
margin-left: 15px;
border: none;
margin-left: 25px;
}
.inputAll3 {
width: 100px;
height: 20px;
margin-left: 15px;
border: none;
margin-left: 25px;
}
.addH {
// background: yellow;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -280px);
}
.addexp {
// background: yellow;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -270px);
}
.exchange {
// background: yellow;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -270px);
}
</style>

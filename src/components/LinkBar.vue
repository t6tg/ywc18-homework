<template>
      <div class="link-bar">
      <div class="bar">
        <span id="link-bar-home">หน้าแรก</span>/<span>ค้นหา</span>
      </div>
    </div>
</template>
<style scoped>
 .link-bar{
     display: flex;
     justify-content: flex-start;
     background:rgb(39, 57, 124);
     color: white;
     height: 45px;
 }
 .bar > span {
     display: inline-flex;
     margin: 10px;
 }
</style>
<script>
export default {
    name: "LinkBar"
}
</script>
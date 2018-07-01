<template>
<div>
<img src="../assets/wii_cursor.png" alt="Wii Cursor" :style="{transform: 'rotate(' + rotation + 'deg)'}">
</div>  
</template>
<script>
export default {
  name: 'WiiCursor',
  props: {
    rotation: Number
  }
}
</script>
<style scoped>
img {
  margin: 4px;
}
</style>

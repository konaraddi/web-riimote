<template>
<div>
<img 
  src="../assets/wii_cursor.png" 
  alt="Wii Cursor" 
  :style="orientationAndPositionStyle">
</div>  
</template>
<script>
export default {
  name: 'WiiCursor',
  props: {
    // properties of the cursor
    // defines the orientation and position
    rotation: Number,
    xAxisPosition: Number, // 0 - 100 (percentage)
    yAxisPosition: Number // 0 - 100 (percentage)
  },
  computed: {
    orientationAndPositionStyle() {
      return {
        transform: 'rotate(' + this.rotation + 'deg)',
        top: this.yAxisPosition + '%',
        left: this.xAxisPosition + '%'
      }
    }
  }
}
</script>
<style scoped>
img {
  position: fixed;
  /* 
  The below is to offset for the image's width and length
  so that a `top: 50%` and `left: 50%` will center the image. 
  */
  margin-top: -2.2rem;
  margin-left: -2.2rem;
}
</style>

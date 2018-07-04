<template>
<div>
<img 
  src="../assets/wii_wheel.png" 
  alt="Wii Wheel" 
  :style="orientationStyle">
</div>  
</template>
<script>
/**
 * For best results, the user must be holding the smartphone
 * such that the smartphone's screen is facing up and
 * the top of the smartphone is pointing to the left.
 * Then the user should tilt the smartphone
 * so that the top edge of the smartphone (where the camera is usually located)
 * is raised higher or lower than the bottom edge of the smartphone
 * (where the charging port is usually located).
 */

export default {
  name: "WiiWheel",
  props: {
    // properties of the cursor
    // defines the orientation and position
    rotation: Number,
    disabled: Boolean
  },
  computed: {
    orientationStyle() {
      if (this.disabled) {
        return {
          transform: "rotate(0deg)",
          opacity: 0.25
        };
      }
      return {
        transform: "rotate(" + this.rotation + "deg)"
      };
    }
  }
};
</script>
<style scoped>
img {
  width: 75%;
  height: 75%;
  margin: 12.5%;
}
</style>

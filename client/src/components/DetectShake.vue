<template>
<div>
  <h3 class="title is-3">Is the controller shaking?</h3>
  <h3 class="title is-3" v-if='userIsShaking'>
    <span class="yes">Yes</span>
  </h3>
  <h3 class="title is-3" v-else>
    <span class="no">No</span>
  </h3>
</div>
</template>
<script>
export default {
  name: "DetectShake",
  props: {
    acceleration: {
      type: Object,
      default: {
        // in meters per second squared
        x: null,
        y: null,
        z: null
      },
      description: "Contains the x y z acceleration"
    }
  },
  computed: {
    userIsShaking() {
      const threshold = 12;
      if (
        Math.abs(this.acceleration.x) > threshold ||
        Math.abs(this.acceleration.y) > threshold ||
        Math.abs(this.acceleration.z) > threshold
      ) {
        return true;
      }
      return false;
    }
  }
};
</script>
<style scoped>
.yes {
  background-color: #00e676;
  color: black;
}
.no {
  background-color: #ff3d00;
  color: white;
}
</style>

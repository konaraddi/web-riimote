<!--
This component uses the x y z acceleration (from it's props)
to determine if the user is shaking the controller.
It displays whether the user is shaking the controller.
-->
<template>
<div class="content">
  <h3 class="title is-3">Is the controller shaking?
  <span class="highlight__green" v-if='controllerIsShaking'>Yeah</span>
  <span class="highlight__blue" v-else>Nope</span>
  </h3>
  <img v-if='controllerIsShaking' src="../assets/controller_shaking.png" alt="Shaking controller">
  <img v-else src="../assets/controller_not_shaking.png" alt="Shaking controller">
</div>
</template>
<script>
export default {
  name: "DisplayControllerShaking",
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
    controllerIsShaking() {
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
h3 {
  margin-bottom: 0 !important;
}
</style>

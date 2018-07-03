<template>
<div>
<h3 class="subtitle is-3">Euler Angles</h3>
<p>
  X: {{eulerAngles.x}}°
  <br>
  Y: {{eulerAngles.y}}°
  <br>
  Z: {{eulerAngles.z}}°
</p>
<br>
<h3 class="subtitle is-3">Acceleration</h3>
<p>
  X: {{acceleration.x}} m/s<sup>2</sup>
  <br>
  Y: {{acceleration.y}} m/s<sup>2</sup>
  <br>
  Z: {{acceleration.z}} m/s<sup>2</sup>
</p>
</div>
</template>

<script>
export default {
  name: 'DeviceStatsDisplay',
  props: {
    eulerAngles: {
      type: Object,
      default: {
        x: null, // -180 to 180
        y: null, // -90 to 90
        z: null // 0 to 360
      },
      description: "Contains the x y z euler angles"
    },
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
  }
}
</script>

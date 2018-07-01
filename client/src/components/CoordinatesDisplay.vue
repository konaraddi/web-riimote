<template>
<p>
  X: {{xAxisDegrees}}°
  <br>
  Y: {{yAxisDegrees}}°
  <br>
  Z: {{zAxisDegrees}}°
</p>
</template>

<script>
export default {
  name: 'CoordinatesDisplay',
  props: {
    xAxisDegrees: Number,
    yAxisDegrees: Number,
    zAxisDegrees: Number
  }
}
</script>

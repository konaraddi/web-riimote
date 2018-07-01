<template>
<div>
<h1>DisplayView</h1>
<p>X: {{xAxisDegrees}}°</p>
<p>Y: {{yAxisDegrees}}°</p>
<p>Z: {{zAxisDegrees}}°</p>
</div>
</template>

<script>
export default {
  name: "DisplayView",
  mounted() {
    this.$socket.on("COORDINATES", data => {
      this.xAxisDegrees = data.x;
      this.yAxisDegrees = data.y;
      this.zAxisDegrees = data.z;
    });
  },
  data() {
    return {
      xAxisDegrees: null,
      yAxisDegrees: null,
      zAxisDegrees: null
    };
  }
};
</script>

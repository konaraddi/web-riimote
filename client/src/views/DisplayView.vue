<template>
<div>
<h1>DisplayView</h1>
<CoordinatesDisplay 
  :xAxisDegrees = 'xAxisDegrees' 
  :yAxisDegrees = 'yAxisDegrees' 
  :zAxisDegrees = 'zAxisDegrees'
/>
</div>
</template>

<script>
import CoordinatesDisplay from "../components/CoordinatesDisplay.vue";

export default {
  name: "DisplayView",
  components: {
    CoordinatesDisplay
  },
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

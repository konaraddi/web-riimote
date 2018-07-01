<template>
<div>
<h1>DisplayView</h1>
<CoordinatesDisplay 
  :xAxisDegrees = 'xAxisDegrees' 
  :yAxisDegrees = 'yAxisDegrees' 
  :zAxisDegrees = 'zAxisDegrees'
/>
<WiiCursor :rotation='yAxisDegrees * 2'/>
</div>
</template>

<script>
import CoordinatesDisplay from "../components/CoordinatesDisplay.vue";
import WiiCursor from '../components/WiiCursor.vue'

export default {
  name: "DisplayView",
  components: {
    CoordinatesDisplay,
    WiiCursor
  },
  mounted() {
    // starts listening for events on socket
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

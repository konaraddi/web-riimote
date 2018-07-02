<template>
<div>
<h1>DisplayView</h1>
<CoordinatesDisplay 
  :xAxisDegrees = 'xAxisDegrees' 
  :yAxisDegrees = 'yAxisDegrees' 
  :zAxisDegrees = 'zAxisDegrees'
/>
<WiiCursor 
  :rotation='yAxisDegrees * 2' 
  :xAxisPosition="cursor_xAxisPosition" 
  :yAxisPosition="cursor_yAxisPosition"
/>
</div>
</template>

<script>
import CoordinatesDisplay from "../components/CoordinatesDisplay.vue";
import WiiCursor from "../components/WiiCursor.vue";

export default {
  name: "DisplayView",
  components: {
    CoordinatesDisplay,
    WiiCursor
  },
  mounted() {
    // start listening for Euler angles from ControllerView
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
  },
  computed: {
    // TODO require calibration from user's end
    // right now this is hardcoded...

    // cursor's x and y position range from 0 to 100
    // where (50,50) is the center of the screen
    cursor_xAxisPosition() {
      // computed using zAxisDegrees
      let z = this.zAxisDegrees;
      z = z > 110 ? 110 : z;
      z = z < 70 ? 70 : z;
      z -= 70 // 40 > z > 0
      return 100 - Math.round(z / 40 * 100);
    },
    cursor_yAxisPosition() {
      // computed using xAxisDegrees
      let x = this.xAxisDegrees
      x = x > 20 ? 20 : x
      x = x < -20 ? -20 : x
      x += 20 // 40 > z > 0
      return 100 - Math.round(x / 40 * 100);
    }
  }
};
</script>

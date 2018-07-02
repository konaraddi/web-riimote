<template>
<div>
<h1>DisplayView</h1>
<EulerAnglesDisplay 
  :eulerAngles="eulerAnglesOfController"
/>
<WiiCursor 
  :rotation='eulerAnglesOfController.y * 2' 
  :xAxisPosition="cursor_xAxisPosition" 
  :yAxisPosition="cursor_yAxisPosition"
/>
</div>
</template>

<script>
import EulerAnglesDisplay from "../components/EulerAnglesDisplay.vue";
import WiiCursor from "../components/WiiCursor.vue";

export default {
  name: "DisplayView",
  components: {
    EulerAnglesDisplay,
    WiiCursor
  },
  mounted() {
    // start listening for Euler angles from ControllerView
    this.$socket.on("EULER_ANGLES", eulerAngles => {
      this.eulerAnglesOfController = eulerAngles;
    });
  },
  data() {
    return {
      eulerAnglesOfController: {
        x: null,
        y: null,
        z: null
      }
    };
  },
  computed: {
    // TODO require calibration from user's end
    // right now this is hardcoded...

    // cursor's x and y position range from 0 to 100
    // where (50,50) is the center of the screen
    cursor_xAxisPosition() {
      // computed using z
      let newZ = this.eulerAnglesOfController.z;
      newZ = newZ > 110 ? 110 : newZ;
      newZ = newZ < 70 ? 70 : newZ;
      newZ -= 70; // 40 > z > 0
      return 100 - Math.round(newZ / 40 * 100);
    },
    cursor_yAxisPosition() {
      // computed using x
      let newX = this.eulerAnglesOfController.x;
      newX = newX > 20 ? 20 : newX;
      newX = newX < -20 ? -20 : newX;
      newX += 20; // 40 > z > 0
      return 100 - Math.round(newX / 40 * 100);
    }
  }
};
</script>

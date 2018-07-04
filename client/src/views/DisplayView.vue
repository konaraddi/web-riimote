<template>
<div>
<h1 class="title is-1">Main Display</h1>

<div class="columns is-centered">
  <div class="column">
    <div class="box">
      <DeviceStats
        :eulerAngles="eulerAnglesOfController"
        :acceleration="acceleration"
      />
    </div>
  </div>
  <div class="column">
    <div class="box">
      <DetectShake :acceleration='acceleration'/>
    </div>
  </div>
  <div class="column has-text-centered">
    <div class="box">
      <WiiWheel 
        :disabled="userIsPointingAtScreen"
        :rotation='eulerAnglesOfController.x'
      />
    </div>
  </div>
</div>

<WiiCursor 
  v-if="userIsPointingAtScreen"
  :rotation='eulerAnglesOfController.y * 2' 
  :xAxisPosition="cursor_xAxisPosition" 
  :yAxisPosition="cursor_yAxisPosition"
/>

</div>
</template>

<script>
import DeviceStats from "../components/DeviceStats.vue";
import DetectShake from "../components/DetectShake.vue";
import WiiCursor from "../components/WiiCursor.vue";
import WiiWheel from "../components/WiiWheel.vue";

export default {
  name: "DisplayView",
  components: {
    DeviceStats,
    DetectShake,
    WiiCursor,
    WiiWheel
  },
  mounted() {
    // start listening for Euler angles from ControllerView
    this.$socket.on("EULER_ANGLES", eulerAngles => {
      this.eulerAnglesOfController = eulerAngles;
    });

    // start listening for rate of acceleration from ControllerView
    this.$socket.on("ACCELERATION", acceleration => {
      this.acceleration = acceleration;
    });
  },
  data() {
    return {
      acceleration: {
        x: null,
        y: null,
        z: null
      },
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
    },
    // detect if the user is pointing at the main display
    userIsPointingAtScreen() {
      if (
        120 >= this.eulerAnglesOfController.z &&
        this.eulerAnglesOfController.z >= 60 &&
        30 >= this.eulerAnglesOfController.x &&
        this.eulerAnglesOfController.x >= -30
      ) {
        return true
      }
      return false;
    }
  }
};
</script>

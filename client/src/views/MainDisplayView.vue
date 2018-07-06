<!--
This page is for the main display.
This is the page where the cursor, stats, steering wheel, and more would appear.
-->
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
    <div class="box">
      <div class="content">
        <h3 class="title is-3">Is the controller pointing at the screen?
        <span class="highlight__green" v-if='userIsPointingAtScreen'>Yeah</span>
        <span class="highlight__blue" v-else>Nope</span>
        </h3>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="box">
      <DisplayControllerShaking :acceleration='acceleration'/>
    </div>
  </div>
  <div class="column">
    <div class="box">
      <div class="content">
        <h3 class="title is-3">Steering</h3>
        <p>
          Turn device sideways and tilt the device to steer. 
          Keep the top edge of the smartphone pointing to your left.
        </p>
        <WiiWheel 
          :disabled="userIsPointingAtScreen"
          :rotation='eulerAnglesOfController.x'
        />
      </div>
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
import DeviceStats from "../components/MainDisplayView/DeviceStats.vue";
import DisplayControllerShaking from "../components/MainDisplayView/DisplayControllerShaking.vue";
import WiiCursor from "../components/MainDisplayView/WiiCursor.vue";
import WiiWheel from "../components/MainDisplayView/WiiWheel.vue";

export default {
  name: "MainDisplayView",
  components: {
    DeviceStats,
    DisplayControllerShaking,
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

<style>
.highlight__green {
  background-color: #00e676;
  color: black;
}
.highlight__blue {
  background-color: #00B0FF;
  color: white;
}
</style>

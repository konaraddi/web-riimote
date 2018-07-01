<template>
<div>
<h1>ControllerView</h1>
<h3>Supports device orientation: {{deviceOrientationSupported}}</h3>
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
  name: "ControllerView",
  components: {
    CoordinatesDisplay
  },
  mounted() {
    // check if we can access the device's orientation
    // if we can, then attach an event listener to it
    if (window.DeviceOrientationEvent) {
      this.deviceOrientationSupported = true;
      window.addEventListener("deviceorientation", this.handleOrientation);
    }
  },
  data() {
    return {
      deviceOrientationSupported: false,
      xAxisDegrees: null, // -180 to 180
      yAxisDegrees: null, // -90 to 90
      zAxisDegrees: null // 0 to 360
    };
  },
  methods: {
    // notifies the DisplayView of the controller's x, y, and z angles
    sendCoordinatesToDisplayView(x, y, z) {
      this.$socket.emit("SEND_COORDINATES", {
        x,
        y,
        z
      });
    },
    handleOrientation(event) {
      // obtains x y z angles
      this.xAxisDegrees = Math.round(event.beta);
      this.yAxisDegrees = Math.round(event.gamma);
      this.zAxisDegrees = Math.round(event.alpha);
      // share x y z angles with DisplayView
      this.sendCoordinatesToDisplayView(
        this.xAxisDegrees,
        this.yAxisDegrees,
        this.zAxisDegrees
      );
    }
  }
};
</script>

<template>
<div>
<h1 class="title is-1">ControllerView</h1>
<h3>Supports device orientation: <mark>{{deviceOrientationSupported}}</mark></h3>
</div>
</template>

<script>
import EulerAnglesDisplay from "../components/EulerAnglesDisplay.vue";

export default {
  name: "ControllerView",
  components: {
    EulerAnglesDisplay
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

      // using Euler angles of the device on controllerview (smartphone)
      // see https://developers.google.com/web/fundamentals/native-hardware/device-orientation/
      eulerAngles: {
        x: null, // -180 to 180
        y: null, // -90 to 90
        z: null // 0 to 360
      }
    };
  },
  methods: {
    // notifies the DisplayView of the controller's x, y, and z angles
    sendEulerAnglesToDisplayView(eulerAngles) {
      this.$socket.emit("SEND_EULER_ANGLES", eulerAngles);
    },
    handleOrientation(event) {
      // obtains x y z angles
      this.eulerAngles = {
        x: Math.round(event.beta),
        y: Math.round(event.gamma),
        z: Math.round(event.alpha)
      }
      // share x y z angles with DisplayView
      this.sendEulerAnglesToDisplayView(this.eulerAngles);
    }
  }
};
</script>

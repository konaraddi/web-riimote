<template>
<div>
<h1 class="title is-1">Controller</h1>
<h3>Supports device orientation: <mark>{{deviceOrientationSupported}}</mark></h3>
</div>
</template>

<script>
export default {
  name: "ControllerView",
  mounted() {
    // check if we can access the device's orientation
    // if we can, then attach an event listener to it
    if (window.DeviceOrientationEvent) {
      this.deviceOrientationSupported = true;
      // to obtain device's euler angles
      window.addEventListener("deviceorientation", this.handleOrientation);
      // to obtain device's x,y,z rate of acceleration
      window.addEventListener("devicemotion", this.handleMotion, true);
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
      },
      acceleration: {
        x: 0,
        y: 0,
        z: 0
      }
    };
  },
  methods: {
    handleOrientation(event) {
      // obtains x y z angles
      this.eulerAngles = {
        x: Math.round(event.beta),
        y: Math.round(event.gamma),
        z: Math.round(event.alpha)
      };

      // send euler angles for main display (DisplayView)
      this.$socket.emit("SEND_EULER_ANGLES", this.eulerAngles);
    },
    handleMotion(event) {
      this.acceleration = {
        x: Math.round(event.acceleration.x),
        y: Math.round(event.acceleration.y),
        z: Math.round(event.acceleration.z)
      };

      // send rate of acceleration for main display (DisplayView)
      this.$socket.emit("SEND_ACCELERATION", this.acceleration);
    }
  }
};
</script>

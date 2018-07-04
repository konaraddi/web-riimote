<!--
This page is for the user's controller (a smartphone).
This is what the user will see on their smartphone.
This page will send the user's controller's orientation and acceleration 
to be used by the main display. 
-->
<template>
<div>

<!--
  The modal shows up by default so the user can position themselves before starting.
  Once closed, it remains closed until the user refreshes the webpage.
-->
<!--TODO: Allow for recalibration (so even after closes this modal)-->
<ThePrerequisitesModal :onCloseFunction='attemptToAttachEventListener'/>

<h1 class="title is-1">Controller</h1>
<h3>Supports device orientation: <mark>{{deviceOrientationSupported}}</mark></h3>

</div>
</template>

<script>
import ThePrerequisitesModal from "../components/ThePrerequisitesModal.vue"

export default {
  name: "ControllerView",
  components: {
    ThePrerequisitesModal
  },
  data() {
    return {
      isPrerequisitesModalActive: true,
      deviceOrientationSupported: window.DeviceOrientationEvent ? true : false,

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
    attemptToAttachEventListener() {
      // if device orientation and motion events are supported, 
      // then attach event listeners to it
      if (this.deviceOrientationSupported) {

        // to obtain device's euler angles
        window.addEventListener("deviceorientation", this.handleOrientation);
        // to obtain device's x,y,z rate of acceleration
        window.addEventListener("devicemotion", this.handleMotion, true);
      }
    },
    handleOrientation(event) {
      // obtains x y z angles
      this.eulerAngles = {
        x: Math.round(event.beta),
        y: Math.round(event.gamma),
        z: Math.round(event.alpha)
      };

      // send euler angles for main display (MainDisplayView)
      this.$socket.emit("SEND_EULER_ANGLES", this.eulerAngles);
    },
    handleMotion(event) {
      this.acceleration = {
        x: Math.round(event.acceleration.x),
        y: Math.round(event.acceleration.y),
        z: Math.round(event.acceleration.z)
      };

      // send rate of acceleration for main display (MainDisplayView)
      this.$socket.emit("SEND_ACCELERATION", this.acceleration);
    }
  }
};
</script>

<style scoped>
h1 {
  margin-top: 4rem;
}
</style>

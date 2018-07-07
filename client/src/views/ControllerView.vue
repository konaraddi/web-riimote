<!--
This page is for the user's controller (a smartphone).
This is what the user will see on their smartphone.
This page will send the user's controller's orientation and acceleration 
to be used by the main display. 
-->
<template>
<div>

  <!--
    User sets up the web app on two devices, 
    "pairs" them by joinin the same room as the main display,
    and, ideally, stands in the right place with the controller pointed
  -->
  <section v-if="!userIsReady">
    <h1 class="title is-1">Pair Controller</h1>
    <p>
      <strong>Please visit this website on a laptop or desktop too!</strong> 
      This device will be your controller. 
      Your laptop/desktop will be the main display. 
    </p>
    <br>
    <p>
      Stand in front of the main display and point your smartphone at the center of the display.
    </p>
    <br>
    <b-field label="Enter Room #" 
        @submit="() => pairControllerWithMainDisplay()">
      <b-input
        size='is-medium'
        icon='laptop'
        type="number"
        v-model="roomToJoin"
        placeholder="Main Display's Room #"
        @keyup.native.enter="() => pairControllerWithMainDisplay()"
        required>
      </b-input>
    </b-field>
    <br>
    <button 
      class="button is-primary is-medium" 
      type="submit" 
      :disabled='!roomToJoin'
      @click="() => pairControllerWithMainDisplay()">
        Connect to Main Display
    </button>  
  </section>

  <!--Once user is ready-->
  <section v-if="userIsReady">
    <h1 class="title is-1">Controller</h1>
    <h3 class="title is-3">Room #<mark>{{currentRoom}}</mark></h3>
    <div v-if="!deviceOrientationSupported">
      <p>
      Sorry, this device or browser is not supported.
      In order for this to work, the device and browser need to support DeviceOrientationEvent.
      </p>
      <br>
      <p>Try Chrome on a recent Android or Apple device.</p>
    </div>

    <!--take user back to the onboarding screen -->
    <br>
    <button 
      class="button is-primary is-medium" 
      type="button" 
      @click="() => userIsReady = false">
        Join another room
    </button>  
  </section>

</div>
</template>

<script>
export default {
  name: "ControllerView",
  data() {
    return {
      userIsReady: false,
      roomToJoin: null,
      currentRoom: null,
      deviceOrientationSupported: !!window.DeviceOrientationEvent,

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
    pairControllerWithMainDisplay() {
      this.userIsReady = true;
      this.$socket.emit('SWITCH_ROOMS', {
        new_room: this.roomToJoin
      })
      this.currentRoom = this.roomToJoin;
      this.attemptToAttachEventListeners();
    },
    attemptToAttachEventListeners() {
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
      this.$socket.emit("SEND_EULER_ANGLES", {
        room: this.currentRoom,
        euler_angles: this.eulerAngles
      });
    },
    handleMotion(event) {
      this.acceleration = {
        x: Math.round(event.acceleration.x),
        y: Math.round(event.acceleration.y),
        z: Math.round(event.acceleration.z)
      };

      // send rate of acceleration for main display (MainDisplayView)
      this.$socket.emit("SEND_ACCELERATION", {
        room: this.currentRoom,
        acceleration: this.acceleration
      });
    }
  }
};
</script>

<style scoped>
h1 {
  margin-top: 4rem;
}
</style>

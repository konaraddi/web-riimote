<!--
A modal to handle prerequisites so the user is ready before starting.
It is being used on the controller.
-->
<template>
  <b-modal :active.sync="isPrerequisitesModalActive" has-modal-card>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
          <h3 class="modal-card-title title is-3">Get Ready</h3>
      </header>
      <section class="modal-card-body">
        <p>
          Please position yourself so you are standing in front of your main display.
          Then point your smartphone at the center of the display.
        </p>
        <br>  
        <b-field label="Room #">
          <b-input
              size='is-medium'
              icon='laptop'
              type="number"
              v-model="roomToJoin"
              placeholder="Main Display's room #"
              required>
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button 
          class="button is-primary is-medium" 
          type="button" 
          @click="() => {isPrerequisitesModalActive = false; $emit('on-close', roomToJoin);}">
            Connect to Main Display
        </button>        
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ThePrerequisitesModal",
  data() {
    return {
      isPrerequisitesModalActive: true,
      roomToJoin: null
    };
  }
};
</script>

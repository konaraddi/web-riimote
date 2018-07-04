<!--
A modal to handle prerequisites so the user is ready before starting.
It is being used on the controller.
-->
<template>
  <b-modal :active.sync="isPrerequisitesModalActive" has-modal-card>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
          <h3 class="modal-card-title title is-3">Get Ready!</h3>
      </header>
      <section class="modal-card-body">
          <div class="content">
            <p>
              Please position yourself so you are standing in front of your main display.
              Then point your smartphone at the center of the display.
            </p>
          </div>
      </section>
      <footer class="modal-card-foot">
        <button 
          class="button is-primary is-medium" 
          type="button" 
          @click="() => {isPrerequisitesModalActive = false; onCloseFunction();}">
            Okay, I'm ready
        </button>        
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "ThePrerequisitesModal",
  props: {
    onCloseFunction: {
      type: Function,
      required: false,
      description: "A function to run when the user closes the modal"
    }
  },
  data() {
    return {
      isPrerequisitesModalActive: true
    };
  }
};
</script>

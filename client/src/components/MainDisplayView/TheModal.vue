<template>
  <b-modal :active.sync="isModalActive" has-modal-card>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <h3 class="modal-card-title title is-3">Wait!</h3>
      </header>
      <section class="modal-card-body">
        <p>
          <strong>Please visit this website on a smartphone too!</strong>
          <br>
          This device will be the main display and the smartphone will be the controller.
          <br>
          You'll need to pair the controller with this display.
        </p>
      </section>
      <footer class="modal-card-foot">
        <button 
          class="button is-primary is-medium" 
          type="button" 
          @click="isModalActive = false">
            Sure thing!
        </button>        
      </footer>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: 'TheModal',
  data(){
    return {
      isModalActive: true
    }
  }
}
</script>

<template>
<div>
<h1>ControllerView</h1>
<input v-model="messageToDisplay">
<button @click="sendMessageToDisplay">Display Message</button>
</div>
</template>

<script>
export default {
  name: 'ControllerView',
  data(){
    return{
      messageToDisplay: ''
    }
  },
  methods: {
    sendMessageToDisplay(){
      this.$socket.emit('SEND_MESSAGE', {
        message: this.messageToDisplay
      })
    }
  }
}
</script>

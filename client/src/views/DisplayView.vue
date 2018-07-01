<template>
<div>
<h1>DisplayView</h1>
<p>{{messageFromControllerView}}</p>
</div>
</template>

<script>
export default {
  name: "DisplayView",
  mounted() {
    this.$socket.on("MESSAGE", data => {
      this.messageFromControllerView = data.message;
    });
  },
  data() {
    return {
      messageFromControllerView: ""
    };
  }
};
</script>

<template>
  <div class="hello">
    <chat />
  </div>
</template>

<script>
import Chat from './AcsChatbox/Chat.vue' 

export default {
  components: {
    Chat // Register the Chat component locally
  },
  props: {
    msg: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

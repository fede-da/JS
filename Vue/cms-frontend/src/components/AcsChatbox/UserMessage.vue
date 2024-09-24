<template>
    <Message messageType="userMessage">
      <slot>Default user message</slot>
    </Message>
  </template>

<script>
import Message from './Message.vue';

export default {
  components: {
    Message
  }
};
</script>

<style scoped>
.userMessage {
  background-color: #b60808;
  align-self: flex-end;
  text-align: right;
  color: white; 
}
</style>
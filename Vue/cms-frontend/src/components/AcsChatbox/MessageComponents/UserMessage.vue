<template>
    <Message messageType="userMessage"
    :style="{
      '--user-message-bg-color': userMessageBackgroundColor,
      '--user-message-text-color': userMessageTextColor
    }">
      <slot>Default user message</slot>
    </Message>
  </template>

<script>
import Message from './Message.vue';

export default {
  inject: ['userMessageBackgroundColor', 'userMessageTextColor'],
  components: {
    Message
  }
};
</script>

<style scoped>
.userMessage {
  background-color: var(--user-message-bg-color);
  color: var(--user-message-text-color);  
  align-self: flex-end;
  text-align: right;
}
</style>
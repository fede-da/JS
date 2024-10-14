<template>
  <div class="messageWrapper">
    <Message messageType="userMessage"
    :style="{
      '--user-message-bg-color': userMessageBackgroundColor,
      '--user-message-text-color': userMessageTextColor
    }">
      <slot>Default user message</slot>
    </Message>
  </div>
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
}

.messageWrapper{
  padding-top: 8px;   /* Aggiunge 20px di padding sopra */
  padding-right: 8px; /* Aggiunge 15px di padding a destra */
  align-self: flex-end;
  text-align: right;
}
</style>
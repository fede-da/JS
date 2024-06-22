<template>
    <div class="chatbox">
      <input
        v-model="newMessage"
        placeholder="Type a message..."
        @keyup.enter="emitMessage"
        :disabled="isSending"
      >
      <button @click="emitMessage" :disabled="isSending">
        Send
      </button>
    </div>
  </template>
  
  <script>
  import MessageService from '@/services/messageService'; 
  
  export default {
    emits: ['messageSent'],
    data() {
      return {
        newMessage: '',
        isSending: false
      };
    },
    methods: {
      async emitMessage() {
        if (this.newMessage.trim()) {
          this.isSending = true;
          try {
            const response = this.newMessage;
            this.$emit('messageSent', response);  
            this.newMessage = '';  
          } catch (error) {
            console.error('Failed to send message:', error);
          } finally {
            this.isSending = false;  
            this.newMessage = '';
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .chatbox {
    display: flex;
    margin-top: 10px;
  }
  .chatbox input, .chatbox button {
    padding: 10px;
    margin-right: 10px;
  }
  .chatbox button {
    padding: 10px;
  }
  </style>
  
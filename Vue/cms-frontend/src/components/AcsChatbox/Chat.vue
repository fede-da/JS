<template>
  <div class="chat-container">
    <chatwindow :messages="messages" />
  </div>
</template>
  
  <script>
  import Chatwindow from './Chatwindow.vue';
  import MessageService from '@/services/messageService';
  
  export default {
    components: {
      Chatwindow
    },
    methods: {

    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  
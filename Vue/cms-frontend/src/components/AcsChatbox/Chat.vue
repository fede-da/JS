<template>
  <div class="chat-container">
    <Chatwindow />
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
    position: fixed; /* Positions the element relative to the viewport */
    bottom: 20px;       /* Aligns the element to the bottom of the viewport */
    right: 20px; 
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 30vw;
    border: 1px solid #ccc;
    padding: 10px;
  }
  </style>
  
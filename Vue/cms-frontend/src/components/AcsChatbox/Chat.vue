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
  
<style>
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

  /* Stili per dispositivi mobili */
  @media (max-width: 768px) {
    .chat-container {
      width: 90vw;
      height: 60vh;
    }
  }
</style>
  
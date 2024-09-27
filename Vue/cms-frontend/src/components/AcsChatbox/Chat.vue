<template>  
  <div class="chat-container">
    <div class="chat-window-top-heading">
      <p class="text-content">3FS Customer Support</p>
    </div>
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
  position: fixed;
  bottom: 20px;
  right: 20px; 
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 60vw;
  border: 1px solid #ccc;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  padding: 10px;
  padding-top: 8px;  /* Aggiunge spazio in alto per l'effetto */
  background-color: white;
  overflow: hidden;  /* Nasconde gli elementi che escono dai bordi arrotondati */
}

.chat-window-top-heading {
  height: 5%;
  background-color: #16AD8D;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}

.chat-window-top-heading .text-content {
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}

/* Stili per dispositivi mobili */
@media (max-width: 768px) {
  .chat-container {
    width: 90vw;
    height: 60vh;
  }
}
</style>
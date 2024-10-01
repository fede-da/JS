<template>  
  <div class="chat-container" 
  :style="{
      '--chat-container-bg-color': chatContainerBackgroundColor,
      '--header-bg-color': headerBackgroundColor,
      '--header-text-color': headerTextColor
    }">
    <div class="chat-window-top-heading">
      <p class="text-content">3FS Customer Support</p>
    </div>
    <chat-window />
  </div>
</template>
  
<script>
import ChatWindow from './ChatWindow.vue';
//import MessageService from '@/services/messageService';

export default {
  components: {
    ChatWindow,
  },

  props: {
    headerBackgroundColor: {
      type: String,
      default: '#16AD8D'
    },
    headerTextColor: {
      type: String,
      default: '#ffffff'
    },
    chatContainerBackgroundColor: {
      type: String,
      default: 'white'
    },
    systemMessageBackgroundColor: {
      type: String,
      default: 'transparent'
    },
    systemMessageTextColor: {
      type: String,
      default: 'black'
    },
    userMessageBackgroundColor: {
      type: String,
      default: '#1C9FD1'
    },
    userMessageTextColor: {
      type: String,
      default: 'white'
    },
    sendMessageButtonBackgroundColor: {
      type: String,
      default: '#16AD8D'
    },
    sendMessageButtonTextColor: {
      type: String,
      default: 'white'
    },
    eFSIconPath: {
      type: String,
      default: require('./assets/logo_3fs.png')
    },
  },
  provide() {
    return {
      headerBackgroundColor: this.headerBackgroundColor,
      headerTextColor: this.headerTextColor,
      chatContainerBackgroundColor: this.chatContainerBackgroundColor,
      systemMessageBackgroundColor: this.systemMessageBackgroundColor,
      systemMessageTextColor: this.systemMessageTextColor,
      userMessageBackgroundColor: this.userMessageBackgroundColor,
      userMessageTextColor: this.userMessageTextColor,
      sendMessageButtonBackgroundColor: this.sendMessageButtonBackgroundColor,
      sendMessageButtonTextColor: this.sendMessageButtonTextColor,
      eFSIconPath: this.eFSIconPath
    };
  },
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
  background-color: var(--chat-container-bg-color);
  overflow: hidden;  /* Nasconde gli elementi che escono dai bordi arrotondati */
}

.chat-window-top-heading {
  height: 5%;
  background-color: var(--header-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}

.chat-window-top-heading .text-content {
  color: var(--header-text-color);
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
<template>
  <div>
    <!-- Pulsante iniziale -->
    <button
      v-if="!isChatOpen"
      @click="isChatOpen = true"
      class="chat-toggle-button"
      :style="{
        '--toggle-button-gradient-start-color': toggleButtonGradientStartColor,
        '--toggle-button-gradient-end-color': toggleButtonGradientEndColor,
        '--toggle-button-box-shadow-color': toggleButtonBoxShadowColor
      }"
    >
      <img :src="eFSIconPath" alt="Open Chat" />
    </button>

    <!-- Chat Container -->
    <div
      v-else
      class="chat-container"
      :style="{
        '--chat-container-bg-color': chatContainerBackgroundColor,
        '--header-bg-color': headerBackgroundColor,
        '--header-text-color': headerTextColor,
        '--chat-container-border-color': chatContainerBorderColor,
        '--close-button-hover-color': closeButtonHoverColor
      }"
    >
      <div class="chat-window-top-heading">
        <p class="text-content">3FS Customer Support</p>
        <!-- Pulsante di chiusura -->
        <button class="close-button" @click="isChatOpen = false">&times;</button>
      </div>
      <chat-window ref="chatWindow" />
    </div>
  </div>
</template>


  
<script>
import ChatWindow from './ChatWindow.vue';
//import MessageService from '@/services/messageService';

export default {
  components: {
    ChatWindow,
  },
  data() {
    return {
      isChatOpen: false, // Stato della chat: aperta (true) o chiusa (false)
    };
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
    supportIconPath:{
      type: String,
      default: require('./assets/chatbot-icon.png')
    },
    toggleButtonGradientStartColor: {
      type: String,
      default: '#1C9FD1' // Colore di partenza del gradiente (in alto)
    },
    toggleButtonGradientEndColor: {
      type: String,
      default: '#16AD8D' // Colore finale del gradiente (in basso)
    },
  toggleButtonBoxShadowColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.1)'
  },
  chatContainerBorderColor: {
    type: String,
    default: '#ccc'
  },
  closeButtonHoverColor: {
    type: String,
    default: '#ff0000'
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
      eFSIconPath: this.eFSIconPath,
      toggleButtonBoxShadowColor: this.toggleButtonBoxShadowColor,
      chatContainerBorderColor: this.chatContainerBorderColor,
      closeButtonHoverColor: this.closeButtonHoverColor,
      toggleButtonGradientStartColor: this.toggleButtonGradientStartColor,
      toggleButtonGradientEndColor: this.toggleButtonGradientEndColor,
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
  border: 1px solid var(--chat-container-border-color);
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
  padding: 10px;
  padding-top: 8px;
  background-color: var(--chat-container-bg-color);
  overflow: hidden;
}


.chat-toggle-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    var(--toggle-button-gradient-start-color),
    var(--toggle-button-gradient-end-color)
  );
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 6px var(--toggle-button-box-shadow-color);
}

.chat-toggle-button img {
  width: 30px;
  height: 30px;
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

.close-button {
  position: absolute;
  top: 0px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 34px;
  color: var(--header-text-color);
  cursor: pointer;
}

.close-button:hover {
  color: var(--close-button-hover-color);
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
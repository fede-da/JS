<template>
  <div class="chat-window"
  ref="chatWindow"
  :style="{
        '--chat-window-bg-color': chatContainerBackgroundColor,
    }">

    <component
      v-for="(msg) in messages"
      :is="getComponent(msg.messageType)"
      :key="msg.id"
      v-bind="msg"
      ref="message"
    >
      {{ msg.text }}
    </component>
  </div>  
  <Chatbox @message-sent="handleNewMessage"></Chatbox>
</template>

<script lang="js">
import Chatbox from './Chatbox.vue';
import Message from './Message.vue';
import UserMessage from './UserMessage.vue';
import SystemMessage from './SystemMessage.vue';
import ErrorMessage from './ErrorMessage.vue';

export default {
  components: {
    Chatbox,
    Message,
    UserMessage,
    SystemMessage,
    ErrorMessage
  },
  data() {
    return {
      messages: [
      {
          id: Date.now(),  
          text: "Messaggio errore di prova, cancellare messaggio da lista di messaggi in ChatWindow successivamente", 
          messageType: "errorMessage", 
        }
      ]
    };
  },
  computed: {
    componentMap() {
      return {
        userMessage: UserMessage,
        systemMessage: SystemMessage,
        errorMessage: ErrorMessage,
      };
    }
  },
  mounted() {
    this.scrollToLastMessage();
  },
  methods: {
    getComponent(messageType) {
      return this.componentMap[messageType] || Message;
    },
    handleNewMessage(message) {
      message.id = Date.now();
      this.messages.push(message);
      this.$nextTick(() => {
        this.scrollToLastMessage();
      });
    },
    scrollToLastMessage() {
      const chatWindow = this.$refs.chatWindow;
      const messages = this.$refs.message;
      if (chatWindow && messages && messages.length > 0) {
        const lastMessageComponent = messages[messages.length - 1];
        const lastMessageElement = lastMessageComponent.$el || lastMessageComponent;
        if (lastMessageElement) {
          const offsetTop = lastMessageElement.offsetTop;
          chatWindow.scrollTop = offsetTop - 50;
        }
      }
    },
    showError(messageText) {
      const errorMessage = {
      id: Date.now(),
      text: messageText,
      messageType: 'errorMessage',
    };
    this.messages.push(errorMessage);
    this.$nextTick(() => {
      this.scrollToLastMessage();
    });
    },
  }
};
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90%; /* Regola l'altezza secondo le tue necessità */
  overflow-y: auto;
  background-color: var(--chat-window-bg-color);
}
</style>

<!-- Chatwindow.vue -->
<template>
  <div class="chat-window">
    <component
      v-for="msg in messages"
      :is="getComponent(msg.messageType)"
      :key="msg.id"
    >
      {{ msg.text }}
    </component>
  </div>
  <Chatbox @message-sent="handleNewMessage"></Chatbox>
</template>

<script>
import Chatbox from './Chatbox.vue';
import Message from './Message.vue';
import UserMessage from './UserMessage.vue';
import SystemMessage from './SystemMessage.vue';

export default {
  components: {
    Chatbox,
    Message,
    UserMessage,
    SystemMessage
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          text: 'Ciao, come posso aiutarti?',
          messageType: 'systemMessage'
        },
        {
          id: 2,
          text: 'Ho bisogno di informazioni sul vostro servizio.',
          messageType: 'userMessage'
        }
      ]
    };
  },
  computed: {
    componentMap() {
      return {
        'userMessage': UserMessage,
        'systemMessage': SystemMessage
      };
    }
  },
  methods: {
    getComponent(messageType) {
      return this.componentMap[messageType] || Message;
    },
    handleNewMessage(message) {
      message.id = Date.now();
      this.messages.push(message);
    }
  }
};
</script>

<style scoped>
.chat-window {
  height: 100%;
  overflow-y: auto;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
</style>

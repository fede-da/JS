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
import Message from './MessageComponents/Message.vue';
import UserMessage from './MessageComponents/UserMessage.vue';
import SystemMessage from './MessageComponents/SystemMessage.vue';
import ErrorMessage from './MessageComponents/ErrorMessage.vue';

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
      this.addMessageFromUser(message.text);
      this.sendMessageToServer(message.text);
    },
    scrollToLastMessage() {
      const chatWindow = this.$refs.chatWindow;
      if (chatWindow) {
        this.$nextTick(() => {
          chatWindow.scrollTop = chatWindow.scrollHeight;
        });
      }
    },
    addMessage(message) {
      this.messages.push(message);
      this.scrollToLastMessage();
    },
    addMessageFromUser(text) {
      const userMessage = {
        id: Date.now(),
        text: text,
        messageType: 'userMessage',
      };
      this.addMessage(userMessage);
    },
    addMessageFromSystem(text) {
      const systemMessage = {
        id: Date.now(),
        text: text,
        messageType: 'systemMessage',
      };
      this.addMessage(systemMessage);
    },
    addError(text) {
      const errorMessage = {
        id: Date.now(),
        text: text,
        messageType: 'errorMessage',
      };
      this.addMessage(errorMessage);
    },
    async sendMessageToServer(text) {
      try {
        // Simulate sending a message to the server
        const response = await this.mockHttpRequest(text);
        // If successful, add the system response
        this.addMessageFromSystem(response.data);
      } catch (error) {
        // If there's an error, add an error message
        this.addError('Failed to send message to the server.');
      }
    },
    mockHttpRequest(text) {
      // Simulating an HTTP request using a Promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate a successful response 70% of the time
          if (Math.random() > 0.3) {
            resolve({ data: `Server response to "${text}"` });
          } else {
            reject(new Error('Network error'));
          }
        }, 2000); // Simulate network delay
      });
    },
  },
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

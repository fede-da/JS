<template>
  <div class="chat-window">
    <Message
      v-for="msg in messages"
      :key="msg.id"
      :text="msg.text"
      :message-type="msg.type"
    />
  </div>
  <Chatbox @message-sent="handleNewMessage" ></Chatbox>
</template>
  
<script>
import Chatbox from './Chatbox.vue';
import Message from './Message.vue';

export default {
  components: {
    Chatbox,
    Message
  },
  data() {
    return {
      messages: []
    };
  },
  methods: {
  handleNewMessage(newMsgText) {
    const newMsg = {
      id: Date.now(),  
      text: newMsgText,
      messageType: 'userMessage' 
    };
    this.messages.push(newMsg);
  }
}

};
</script>
  
  <style scoped>
  .chat-window {
    height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  </style>
  
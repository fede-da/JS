<!-- Chatbox.vue -->
<template>
  <div class="chatbox"
    :style="{
      '--send-button-bg-color': sendMessageButtonBackgroundColor,
      '--send-button-text-color': sendMessageButtonTextColor
    }"
  >
    <textarea
      ref="textarea"
      v-model="newMessage"
      placeholder="Type a message..."
      @input="autoResize"
      :disabled="isSending"
      style="resize: none; overflow-y: hidden;"
    ></textarea>
    <button @click="emitMessage" :disabled="isSending">
      Send
    </button>
  </div>
</template>

<script>
export default {
  inject: ['sendMessageButtonBackgroundColor', 'sendMessageButtonTextColor'],
  emits: ['message-sent'],
  data() {
    return {
      newMessage: '',
      isSending: false,
      n: 0
    };
  },
  methods: {
    emitMessage() {
      if (this.newMessage.trim()) {
        this.isSending = true;
        const messageType = this.n % 2 === 0 ? 'userMessage' : 'systemMessage';
        const message = {
          text: this.newMessage.trim(),
          messageType: messageType
        };
        this.$emit('message-sent', message);
        this.n++;
        this.isSending = false;
        this.newMessage = '';
        // Assicura che il DOM sia aggiornato prima di ridimensionare la textarea
        this.$nextTick(() => {
          this.autoResize();
        });
      }
    },
    autoResize(event) {
      const textarea = event ? event.target : this.$refs.textarea;
      if (textarea) {
        textarea.style.height = 'auto';
        const maxHeight = 100; // Altezza massima desiderata in pixel

        const desiredHeight = textarea.scrollHeight;
        if (desiredHeight > maxHeight) {
          textarea.style.height = `${maxHeight}px`;
          textarea.style.overflowY = 'auto';
        } else {
          textarea.style.height = `${desiredHeight}px`;
          textarea.style.overflowY = 'hidden';
        }
      }
    },
  }
};
</script>

<style scoped>
.chatbox {
  display: flex;      
  align-items: flex-end; 
  padding: 10px;
}

.chatbox textarea {
  padding: 5px;
  margin-right: 10px;  
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  overflow-y: hidden;  
  flex-grow: 1;
}

.chatbox button {
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1.5;
  border: none;
  background-color: var(--send-button-bg-color);
  color: var(--send-button-text-color);
  border-radius: 5px;
  cursor: pointer;
  width: 100px;    
  box-sizing: border-box;
}
</style>

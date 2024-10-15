<!-- Chatbox.vue -->
<template>
  <div class="chatbox"
    :style="{
      '--send-button-bg-color': sendMessageButtonBackgroundColor,
      '--send-button-text-color': sendMessageButtonTextColor,
      '--chat-container-border-color': chatContainerBorderColor,
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
      ↑
    </button>
  </div>
</template>

<script>
export default {
  inject: ['sendMessageButtonBackgroundColor', 'sendMessageButtonTextColor','chatContainerBorderColor'],
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
  border: 2px solid var(--chat-container-border-color);
  border-radius: 48px;
  padding: 10px;
}

.chatbox textarea {
  padding: 0px;
  margin-right: 10px;  
  font-size: 14px;
  margin-left: 10px;  
  border: 0px solid #ccc;
  border-radius: 6px;
  resize: none;
  overflow-y: hidden;  
  flex-grow: 1;
}

.chatbox textarea:focus {
  border-color: transparent; 
  outline: none; /* Removes the default focus outline */
}


.chatbox button {
  width: 50px; 
  height: 50px;
  border: none;
  border-radius: 50%;
  padding: 10px 20px;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center; /* Horizontally centers content */
  padding: 0; /* Remove padding to maintain the circle shape */
  line-height: 1.5;
  background-color: var(--send-button-bg-color);
  color: var(--send-button-text-color);
  cursor: pointer;
  box-sizing: border-box;
}
</style>

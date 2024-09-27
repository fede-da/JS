<!-- Chatbox.vue -->
<template>
  <div class="chatbox">
    <textarea
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
      }
    },
    autoResize(event) {
    const textarea = event.target;
    // Imposta l'altezza iniziale a 'auto' per ricalcolare correttamente l'altezza se necessario
    textarea.style.height = 'auto';
    const maxHeight = 100; // Assicurati che questo valore corrisponda all'altezza massima desiderata

    // Calcola l'altezza necessaria e applica il massimo consentito
    const desiredHeight = textarea.scrollHeight;
    if (desiredHeight > maxHeight) {
      textarea.style.height = `${maxHeight}px`; // Imposta l'altezza massima
      textarea.style.overflowY = 'auto'; // Attiva lo scroll solo se l'altezza del contenuto supera quella massima
    } else {
      textarea.style.height = `${desiredHeight}px`; // Altrimenti, adatta all'altezza del contenuto
      textarea.style.overflowY = 'hidden'; // Nasconde la barra di scroll se non necessaria
    }
  },
  }
};
</script>

<style scoped>
.chatbox {
  display: flex;      
  align-items: flex-end; 
  height: 20%;
  margin-top: 10px;
}

.chatbox textarea {
  padding: 10px;
  margin-right: 10px;  
  font-size: 14px;
  line-height: 1.5;
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
  background-color: #16AD8D;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;    
  height: 40px;       
  box-sizing: border-box;
}

</style>

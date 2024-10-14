<template>
    <Message messageType="systemMessage"
    :style="style">
      <div class="system-message-content">
        <img class="system-message-icon" :src="eFSIconPath" alt="System Icon" />
        <span class="system-message-text">
          <slot>System message</slot>
        </span>
      </div>
    </Message>
  </template>
  
  <script>
  import Message from './Message.vue';
  
  export default {
    inject: ['systemMessageBackgroundColor', 'systemMessageTextColor','eFSIconPath'],
    components: {
      Message
    },
    props: {
      style: {
        type: Object,
        default: () => ({})
      },
    }
  };
  </script>
  
  <style scoped>
  .systemMessage {
    /*align-self: center; /* Centra il contenitore del messaggio */
    align-self: flex-start;
    /*margin: 0 auto; /* Centra orizzontalmente */
    max-width: 70%; /* Limita la larghezza massima */
    text-align: left; /* Centra il testo all'interno del contenitore */
  }
  
  .system-message-content {
    display: flex;
    align-items: flex-start;
    justify-content: center; /* Centra il contenuto orizzontalmente */
    background-color: var(--system-message-bg-color); /* Rimuove il colore di sfondo */
  }
  
  .system-message-icon {
    width: 24px; /* Regola la dimensione in base alle tue esigenze */
    height: 24px;
    margin-right: 8px; /* Spazio tra l'icona e il testo */
    flex-shrink: 0;
  }
  
  .system-message-text {
    text-align: justify; /* Allinea il testo se necessario */
    color: var(--system-message-text-color);
  }
  </style>
  
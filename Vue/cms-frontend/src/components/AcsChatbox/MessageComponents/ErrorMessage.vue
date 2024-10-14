<!-- ErrorMessage.vue -->
<template>
    <SystemMessage :icon-src="iconSrc">
      ERROR: <slot>Error message</slot>
    </SystemMessage>
  </template>
  
  <script>
  import SystemMessage from './SystemMessage.vue';
  
  export default {
    components: {
      SystemMessage,
    },
    props: {
      iconSrc: {
        type: String,
        default: '.', 
      },
    },
  };
  </script>
  
  <style scoped>
  /* Cambiare il colore del testo a rosso */
  ::v-deep .system-message-text {
    color: red;
  }
  
  /* Modificare lo sfondo a trasparente */
  ::v-deep .system-message-content {
    background-color: transparent;
  }
  
  
  /* Altri override se necessario */
  </style>
  
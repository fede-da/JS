<template>
  <div :class="['message', messageType]">
    {{ text }}
  </div>
</template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        default: 'Default text' 
      },
      messageType: {
        type: String,
        default: 'userMessage'  
      }
    }
  };
  </script>
  
  <style scoped>
  .message {
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    max-width: 80%;
  }
  .userMessage {
    background-color: #daf1da;
    align-self: flex-end;
  }
  .systemMessage {
    background-color: #f1f1da;
    align-self: flex-start;
  }
  </style>
  
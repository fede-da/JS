<template>
  <div class="hello">
    <chat
      :headerBackgroundColor="headerBackgroundColor"
      :headerTextColor="headerTextColor"
      :chatContainerBackgroundColor="chatContainerBackgroundColor"
      :systemMessageBackgroundColor="systemMessageBackgroundColor"
      :systemMessageTextColor="systemMessageTextColor"
      :userMessageBackgroundColor="userMessageBackgroundColor"
      :userMessageTextColor="userMessageTextColor"
      :sendMessageButtonBackgroundColor="sendMessageButtonBackgroundColor"
      :sendMessageButtonTextColor="sendMessageButtonTextColor"
      :eFSIconPath="eFSIconPath"
      :supportIconPath="supportIconPath"
      :toggleButtonGradientStartColor="toggleButtonGradientStartColor"
      :toggleButtonGradientEndColor="toggleButtonGradientEndColor"
      :toggleButtonBoxShadowColor="toggleButtonBoxShadowColor"
      :chatContainerBorderColor="chatContainerBorderColor"
      :closeButtonHoverColor="closeButtonHoverColor"
    />
  </div>
</template>

<script>
import Chat from './AcsChatbox/Chat.vue' 

export default {
  components: {
    Chat
  },
  data() {
    return {
      /* Define all your colours and themes here */
      /*
      headerBackgroundColor: '#16AD8D',
      headerTextColor: '#FFFFFF',
      chatContainerBackgroundColor: '#F0F0F0',
      systemMessageBackgroundColor: '#EFEFEF',
      systemMessageTextColor: '#000000',
      userMessageBackgroundColor: '#1C9FD1',
      userMessageTextColor: '#FFFFFF',
      sendMessageButtonBackgroundColor: '#16AD8D',
      sendMessageButtonTextColor: '#FFFFFF',
      toggleButtonGradientStartColor: '#1C9FD1',
      toggleButtonGradientEndColor: '#16AD8D',
      toggleButtonBoxShadowColor: 'rgba(0, 0, 0, 0.2)',
      chatContainerBorderColor: '#CCCCCC',
      closeButtonHoverColor: '#FF0000',
      */
    }
  }
}
</script>

<style scoped>
/* Your component styles */
</style>

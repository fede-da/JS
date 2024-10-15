<template>
  <Message
    messageType="systemMessage"
    :style="{
      '--spinner-primary-color': spinnerPrimaryColor,
      '--spinner-secondary-color': spinnerSecondaryColor
    }"
  >
    <div class="system-message-content">
      <img
        class="system-message-icon"
        :src="eFSIconPath"
        alt="System Icon"
      />
      <span class="system-message-text"
      :class="{ 'error-text': hasError }"
      >
        <template v-if="hasContent">{{ text }}</template>
        <template v-else-if="hasError">
          <!-- Display error message -->
          {{ text || 'An error occurred. Please try again.' }}
        </template>
        <template v-else>
          <!-- Loading spinner -->
          <div class="spinner"></div>
        </template>
      </span>
    </div>
  </Message>
</template>

<script>
import Message from './Message.vue';

export default {
  inject: [
    'systemMessageBackgroundColor',
    'systemMessageTextColor',
    'spinnerPrimaryColor',
    'spinnerSecondaryColor',
    'eFSIconPath',
  ],
  components: {
    Message,
  },
  props: {
    text: {
      type: String,
      default: '',
    },
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasContent() {
      return this.text && this.text.trim() !== '' && !this.hasError;
    },
  },
};
</script>

<style scoped>
.systemMessage {
  align-self: flex-start;
  max-width: 70%;
  text-align: left;
}

.system-message-content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--system-message-bg-color);
}

.system-message-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  flex-shrink: 0;
}

.system-message-text {
  text-align: justify;
  color: var(--system-message-text-color);
}

.error-text {
  color: red;
}

.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: conic-gradient(
    var(--spinner-primary-color),
    var(--spinner-secondary-color)
  );
  -webkit-mask: 
    radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 5px));
  mask: 
    radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 5px));
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


</style>

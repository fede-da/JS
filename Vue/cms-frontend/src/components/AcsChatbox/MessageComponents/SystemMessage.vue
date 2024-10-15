<template>
  <Message
    messageType="systemMessage"
    :style="style"
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
    'eFSIconPath',
  ],
  components: {
    Message,
  },
  props: {
    style: {
      type: Object,
      default: () => ({}),
    },
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
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div :class="['message', messageType]">
    <slot>Default message</slot>
  </div>
</template>

<script>
export default {
  props: {
    messageType: {
      type: String,
      default: 'default-message'
    }
  }
};
</script>

<style scoped>
.message {
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  max-width: 70%;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.default-message {
  background-color: transparent;
  align-self: flex-start;
  text-align: left;
}
</style>

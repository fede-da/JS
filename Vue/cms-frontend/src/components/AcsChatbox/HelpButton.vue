<template>
	<div>
		<!-- Help Button -->
		<div class="help-button" @click="toggleXComponent">
			<i class="icon">?</i> <!-- Replace with actual icon if using a library like FontAwesome -->
		</div>

		<!-- X Component -->
		<X v-if="isXVisible" />
	</div>
</template>

<script>
import X from './X.vue'; // Assuming X.vue is in the same directory

export default {
  components: {
    X
  },
  data() {
    return {
      isXVisible: false
    };
  },
  methods: {
    toggleXComponent() {
      this.isXVisible = !this.isXVisible;
    }
  }
};
</script>

<style scoped>
	.help-button {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #007bff;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		transition: background-color 0.3s ease;
	}

		.help-button:hover {
			background-color: #0056b3;
		}

	.icon {
		font-size: 24px;
		font-weight: bold;
	}
</style>

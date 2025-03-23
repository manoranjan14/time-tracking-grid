<template>
  <div class="modal-overlay" v-if="isVisible" @click="$emit('close')">
    <div class="date-picker-modal" @click.stop>
      <h2>Select Date & Time</h2>
      <input type="datetime-local" v-model="selectedDateTime" />
      <div class="modal-actions">
        <button class="log-time-button" @click="confirmDate">OK</button>
        <button class="cancel-button" @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isVisible'],
  data() {
    return {
      selectedDateTime: ''
    };
  },
  methods: {
    confirmDate() {
    if (this.selectedDateTime) {
      this.$emit("date-selected", this.selectedDateTime);
    }
    this.$emit("close"); 
  }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(9, 30, 66, 0.54);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002; 
}

.date-picker-modal {
  background-color: white;
  border-radius: 3px;
  padding: 24px;
  width: 400px;
  box-shadow: 0 8px 16px rgba(9, 30, 66, 0.25);
  z-index: 1003;
}

.date-picker-modal h2 {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
}

input[type="datetime-local"] {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 3px;
  margin-bottom: 24px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.cancel-button {
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 3px;
}

.cancel-button:hover {
  background-color: var(--background-secondary);
}

.log-time-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
}

.log-time-button:hover {
  background-color: var(--primary-hover);
}
</style>
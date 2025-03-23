<template>
     <div class="modal-overlay" v-if="isVisible" @click.self="$emit('close')">
        <div class="log-time-modal">
        <h2>Log time</h2>
        <div class="search-issues">
          <input type="text" placeholder="Search issues" />
          <i class="lucide-search"></i>
        </div>
        <div class="date-time-inputs">
            <div class="date-input">
                <input 
  type="text" 
  :value="formatDate(selectedDate)" 
  readonly 
  @click.stop="openDatePicker" 
/>

      </div>
          <div class="time-input">
            <input type="text"  placeholder="0h 0m" />
            <i class="lucide-clock"></i>
          </div>
        </div>
        <div class="description-input">
          <input type="text" placeholder="Description" />
          <i class="lucide-file-text"></i>
        </div>
        <div class="modal-actions">
          <button class="cancel-button" @click="closeLogTimeModal">Cancel</button>
          <button class="log-time-button" @click="submitLogTime">Log time</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogTimeModal',
    props: {
        isVisible: Boolean,
      selectedDate: Date,
      logTimeHours: String,
    },
    methods: {
        closeLogTimeModal() {
      this.$emit('close'); 
    },
      submitLogTime() {
        this.$emit('close');
      },
      formatDate(date) {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      },
      openDatePicker() {
    this.$emit("open-date-picker"); 
  }
    },
  };
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
    z-index: 1000;
  }
  
  .log-time-modal {
    z-index: 1001;
    position: relative;
    background-color: white;
    border-radius: 3px;
    padding: 24px;
    width: 400px;
    box-shadow: 0 8px 16px rgba(9, 30, 66, 0.25);
  }
  
  .log-time-modal h2 {
    margin-bottom: 16px;
    font-size: 20px;
    font-weight: 500;
  }
  
  .search-issues {
    position: relative;
    margin-bottom: 16px;
  }
  
  .search-issues input {
    width: 100%;
    padding: 8px 12px;
    padding-right: 32px;
    border: 1px solid var(--border-color);
    border-radius: 3px;
  }
  
  .search-issues i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .date-time-inputs {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
  }
  
  .date-input, .time-input {
    position: relative;
    flex: 1;
  }
  
  .date-input input, .time-input input {
    width: 100%;
    padding: 8px 12px;
    padding-right: 32px;
    border: 1px solid var(--border-color);
    border-radius: 3px;
  }
  
  .date-input i, .time-input i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .description-input {
    position: relative;
    margin-bottom: 24px;
  }
  
  .description-input input {
    width: 100%;
    padding: 8px 12px;
    padding-right: 32px;
    border: 1px solid var(--border-color);
    border-radius: 3px;
  }
  
  .description-input i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
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
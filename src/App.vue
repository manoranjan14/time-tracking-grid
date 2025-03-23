<template>
  <div class="app-container">

    <APPHeader />
    <APPSidebar />
    <MainContent />
  </div>
</template>

<script>
import APPHeader from './components/Header.vue';
import APPSidebar from './components/Sidebar.vue';
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    APPHeader,
    APPSidebar,
    MainContent,
  },
};
</script>

<style>
:root {
  --primary-color: #0052CC;
  --primary-hover: #0065FF;
  --secondary-color: #DEEBFF;
  --text-color: #172B4D;
  --text-secondary: #6B778C;
  --border-color: #DFE1E6;
  --background-color: #FFFFFF;
  --background-secondary: #F4F5F7;
  --weekend-color: #F4F5F7;
  --today-color: #EAE6FF;
  --highlight-color: #E6EFFC;
  --avatar-blue: #0065FF;
  --avatar-pink: #FF5630;
  --avatar-orange: #FF8B00;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.5;
}

.app-container {
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
  height: 100vh;
}


@media (max-width: 1200px) {
  .app-container {
    grid-template-columns: 50px 1fr; 
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0 10px;
  }

  .search-container {
    width: 180px;
  }

  .timesheet-actions {
    flex-wrap: wrap;
  }

  .date-picker-modal {
    width: 90%;
    max-width: 600px;
  }

  .date-range-inputs {
    flex-direction: column;
    gap: 12px;
  }

  .date-time-inputs {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
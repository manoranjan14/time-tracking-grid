<template>
    <aside class="sidebar">
      <div class="sidebar-item active">
        <CheckCircleIcon class="icon" />
      </div>
      <div class="sidebar-item">
        <UsersIcon class="icon" />
      </div>
      <div class="sidebar-item">
        <SettingsIcon class="icon" />
      </div>
      <div class="sidebar-spacer"></div>
      <div class="sidebar-item">
        <HelpCircleIcon class="icon" />
      </div>
    </aside>
  </template>
  
  <script>
  import { CheckCircleIcon, UsersIcon, SettingsIcon, HelpCircleIcon } from 'lucide-vue-next';
  
  export default {
    name: 'APPSidebar',
    components: {
      CheckCircleIcon,
      UsersIcon,
      SettingsIcon,
      HelpCircleIcon,
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    grid-area: sidebar;
    background-color: #0747A6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    width: 50px; 
  }
  
  .sidebar-item {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 8px 0;
    cursor: pointer;
  }
  
  .sidebar-item.active {
    background-color: white;
    color: #0747A6;
  }
  
  .sidebar-spacer {
    flex-grow: 1;
  }
  
  .icon {
    width: 20px;
    height: 20px;
    color: inherit;
  }
  </style>